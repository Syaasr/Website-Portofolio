import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // 1. Input Validation and Sanitization (Defense-in-depth)
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }

    // Limit maximum payload length to prevent flooding
    if (message.length > 4000) {
      return NextResponse.json(
        { error: "Message is too long (maximum 4000 characters)" },
        { status: 400 }
      );
    }

    // Escape Markdown special characters to prevent Telegram API parsing errors
    const escapedMessage = message
      .replace(/[_*\[\]()~`>#+\-=|{}.!]/g, "\\$&");

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Verify backend environment variables
    if (!token || !chatId) {
      console.error("[Security Alert] Backend Telegram credentials are missing!");
      return NextResponse.json(
        { error: "Internal server error configuration" },
        { status: 500 }
      );
    }

    const formattedMessage = `📩 *New Anonymous Message*:\n\n"${escapedMessage}"`;

    // 2. Safe Server-Side Request to Telegram Bot API
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
        parse_mode: "MarkdownV2", // Using V2 for robust escaped formatting support
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Telegram API Error]:", errorText);
      return NextResponse.json(
        { error: "Failed to dispatch message to Telegram" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("[Serverless Route Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

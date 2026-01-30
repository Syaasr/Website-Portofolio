import React from "react";
import { FaHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

type InstagramPostCardProps = {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  likedByText: string;
  likeCount: number;
  caption: string;
  hastag: string;
  timeAgo: string;
};

const InstagramPostCard: React.FC<InstagramPostCardProps> = ({
  username,
  avatarUrl,
  imageUrl,
  likedByText,
  likeCount,
  caption,
  hastag,
  timeAgo,
}) => {
  return (
    <div className="max-w-md w-full bg-card border border-border rounded-md overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <img
            src={avatarUrl}
            alt={username}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-foreground">{username}</span>
        </div>
        <button className="text-xl leading-none text-muted-foreground hover:text-foreground transition-colors">⋯</button>
      </div>

      {/* Image */}
      <div className="bg-muted">
        <img
          src={imageUrl}
          alt="post"
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3 text-xl text-foreground">
          <button className="hover:scale-110 transition">
            <FaHeart />
          </button>
          <button className="hover:scale-110 transition">
            <FaRegComment />
          </button>
          <button className="hover:scale-110 transition">
            <FaRegPaperPlane />
          </button>
        </div>
        <button className="text-xl text-foreground hover:scale-110 transition">
          <FaRegBookmark />
        </button>
      </div>

      {/* Likes */}
      <div className="px-3 text-sm text-foreground">
        <span className="font-semibold">
          {likeCount.toLocaleString()} likes
        </span>
      </div>

      {/* Caption */}
      <div className="px-3 py-1 text-sm text-foreground">
        <span className="font-semibold mr-1">{username}</span>
        <span className="text-muted-foreground">{caption}</span>
        <br />
        <span className="text-muted-foreground">{hastag}</span>
      </div>

      {/* Liked by text (optional) */}
      {likedByText && (
        <div className="px-3 pb-1 text-xs text-muted-foreground">
          Liked by <span className="font-semibold text-foreground">{likedByText}</span> and others
        </div>
      )}

      {/* Time */}
      <div className="px-3 pb-2 text-[10px] text-muted-foreground uppercase tracking-wide">
        {timeAgo}
      </div>
    </div>
  );
};

export default InstagramPostCard;

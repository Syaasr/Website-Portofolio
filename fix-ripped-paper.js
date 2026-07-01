const fs = require('fs');

const polygonClip = `clip-[polygon(0%_50%,4%_25%,8%_62.5%,12%_20%,16%_55%,20%_30%,24%_67.5%,28%_25%,32%_60%,36%_30%,40%_70%,44%_37.5%,48%_65%,52%_25%,56%_55%,60%_20%,64%_60%,68%_30%,72%_70%,76%_37.5%,80%_62.5%,84%_20%,88%_55%,92%_30%,96%_67.5%,100%_37.5%,100%_100%,0%_100%)]`;

const configs = [
  {
    file: 'src/components/Hero.tsx',
    bgClass: 'bg-[#FFFBEB] dark:bg-[#181814]',
    motifs: [
      '<div className="absolute inset-0 opacity-[0.2] nb-bg-checkered bg-[position:left_bottom]" />',
      '<div className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/AboutSkills.tsx',
    bgClass: 'bg-[#EFF6FF] dark:bg-[#101E2E]',
    motifs: [
      '<div className="absolute inset-0 opacity-[0.25] nb-bg-blueprint pointer-events-none bg-[position:left_bottom]" />',
      '<div className="absolute inset-0 opacity-[0.1] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />',
      '<div className="absolute inset-0 opacity-[0.05] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/TimelineRoadmap.tsx',
    bgClass: 'bg-[#F0FDF4] dark:bg-[#101E16]',
    motifs: [
      '<div aria-hidden="true" className="absolute inset-0 opacity-[0.08] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />',
      '<div aria-hidden="true" className="absolute inset-0 opacity-[0.15] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/Projects.tsx',
    bgClass: 'bg-[#FFF5F5] dark:bg-[#1E1010]',
    motifs: [
      '<div aria-hidden="true" className="absolute inset-0 opacity-[0.25] nb-bg-blueprint pointer-events-none bg-[position:left_bottom]" />',
      '<div aria-hidden="true" className="absolute inset-0 opacity-[0.08] nb-bg-dots pointer-events-none bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/Certifications.tsx',
    bgClass: 'bg-[#F0FDF4] dark:bg-[#101E16]',
    motifs: [
      '<div aria-hidden="true" className="absolute inset-0 opacity-[0.25] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />',
      '<div aria-hidden="true" className="absolute inset-0 opacity-[0.06] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/Blog.tsx',
    bgClass: 'bg-[#FFFBEB] dark:bg-[#181814]',
    motifs: [
      '<div className="absolute inset-0 opacity-[0.08] nb-bg-grid-heavy pointer-events-none bg-[position:left_bottom]" />',
      '<div className="absolute inset-0 opacity-[0.15] nb-bg-checkered pointer-events-none bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/Game.tsx',
    bgClass: 'bg-white dark:bg-[#1A1A1A]',
    motifs: [
      '<div className="absolute inset-0 opacity-[0.1] nb-bg-grid-heavy bg-[position:left_bottom]" />',
      '<div className="absolute inset-0 opacity-[0.2] nb-bg-checkered bg-[position:left_bottom]" />'
    ]
  },
  {
    file: 'src/components/Contact.tsx',
    bgClass: 'bg-white dark:bg-[#1A1A1A]',
    motifs: []
  }
];

const regex = /\{\/\*\s*Ripped Paper Divider\s*\*\/\}\s*<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 translate-y-\[2px\]">\s*<svg[^>]*>[\s\S]*?<\/svg>\s*<\/div>/g;

for (const config of configs) {
  let content = fs.readFileSync(config.file, 'utf8');
  
  const motifStr = config.motifs.map(m => `          ${m}`).join('\n');
  
  const replacement = `{/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-8 z-20 translate-y-[2px] pointer-events-none">
        {/* Next section background with motifs clipped to ripped shape */}
        <div className={\`absolute inset-0 w-full h-full ${config.bgClass} \${"${polygonClip}"}\`}>
${motifStr}
        </div>
        {/* The stroke */}
        <svg viewBox="0 0 1000 40" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className="stroke-black stroke-[4px] fill-none" d="M0,20 L40,10 L80,25 L120,8 L160,22 L200,12 L240,27 L280,10 L320,24 L360,12 L400,28 L440,15 L480,26 L520,10 L560,22 L600,8 L640,24 L680,12 L720,28 L760,15 L800,25 L840,8 L880,22 L920,12 L960,27 L1000,15" />
        </svg>
      </div>`;

  const newContent = content.replace(regex, replacement);
  fs.writeFileSync(config.file, newContent);
  console.log('Updated ' + config.file);
}

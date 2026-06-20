interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, accentColor = "#38BDF8" }: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <p
        className="font-mono text-xs tracking-[0.35em] uppercase mb-3 font-medium"
        style={{ color: accentColor }}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F4FF] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#8899BB] text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-[#1E2D4A]" />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
        <div className="h-px w-12 bg-[#1E2D4A]" />
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && <p className="eyebrow mb-3 font-latin">{eyebrow}</p>}
      <h2 className="text-3xl text-brand-text lg:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-muted">{subtitle}</p>
      )}
    </div>
  );
}

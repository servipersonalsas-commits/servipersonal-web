export default function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
        {label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-petroleum leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

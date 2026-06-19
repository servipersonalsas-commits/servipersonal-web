export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  if (align === "left") {
    return (
      <div className="max-w-2xl mb-16">
        <div className="flex gap-4">
          <div className="w-1 shrink-0 bg-gradient-to-b from-turquoise to-turquoise/20 rounded-full" />
          <div>
            {label && (
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
                {label}
              </span>
            )}
            <h2 className="font-serif text-4xl md:text-5xl text-petroleum leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-turquoise mb-3">
          {label}
        </span>
      )}
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

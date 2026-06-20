type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "password";
  placeholder?: string;
  rows?: number;
  multiline?: boolean;
  error?: string;
};

export default function FormField({
  id,
  label,
  name,
  type = "text",
  placeholder,
  rows,
  multiline,
  error,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const fieldClass =
    "w-full px-4 py-3 rounded-lg border border-stone/80 bg-white text-sm placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-turquoise/40 focus:border-turquoise transition-all";
  const ariaProps = {
    id,
    name,
    placeholder,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  } as const;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-charcoal/80 mb-1.5"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          {...ariaProps}
          rows={rows ?? 4}
          className={`${fieldClass} resize-none`}
        />
      ) : (
        <input {...ariaProps} type={type} className={fieldClass} />
      )}
      {error && (
        <p id={errorId} className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

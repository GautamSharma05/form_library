export default function FormField({
  label,
  value,
  onChange,
  validationType,
  min,
  max,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={validationType === "number" ? "number" : "text"}
        value={value}
        onChange={onChange}
        className="border border-black rounded px-3 py-2 w-full"
        placeholder={`Enter ${label}`}
        min={min}
        max={max}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

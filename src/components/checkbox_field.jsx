export default function CheckboxField({
  label,
  options,
  onChange,
  formValues,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold">{label}</label>
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => onChange(option, e.target.checked)}
            checked={formValues[option] || false}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
}

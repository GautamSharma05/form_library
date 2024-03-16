export default function SelectField({ label, options, onChange, value }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold">{label}</label>
      <select
        className="block w-full mt-1 border p-2 rounded-md shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

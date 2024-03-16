import { useState } from "react";
import FormField from "./form_field";
import CheckboxField from "./checkbox_field";
import SelectField from "./select_field";
import useFormValidation from "../hooks/useFormValidation";
import toast, { Toaster } from "react-hot-toast";
import AppText from "../constant/appText";

export default function Form({ fields }) {
  const [formValues, setFormValues] = useState({});
  const { errors, validateForm } = useFormValidation(fields);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(formValues);
    if (isValid) {
      toast.success(AppText.validForm);
    } else {
      toast.error(AppText.invalidFrom);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => {
          switch (field.type) {
            case "text":
              return (
                <FormField
                  key={index}
                  label={field.label}
                  value={formValues[field.label] || ""}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  validationType={field.validation}
                  min={field.min}
                  max={field.max}
                  error={errors[field.label]}
                />
              );
            case "number":
              return (
                <FormField
                  key={index}
                  label={field.label}
                  value={formValues[field.label] || ""}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  validationType={field.validation}
                  min={field.min}
                  max={field.max}
                  error={errors[field.label]}
                />
              );
            case "checkbox":
              return field.mode === "single" ? (
                <CheckboxField
                  key={index}
                  label={field.label}
                  options={[field.label]}
                  onChange={(value) => handleChange(field.label, value)}
                  formValues={formValues}
                />
              ) : (
                <CheckboxField
                  key={index}
                  label={field.label}
                  options={field.groupLabel}
                  onChange={(option, value) => handleChange(option, value)}
                  formValues={formValues}
                />
              );
            case "select":
              return (
                <SelectField
                  key={index}
                  label={field.label}
                  options={field.options}
                  onChange={(value) => handleChange(field.label, value)}
                  value={formValues[field.label] || ""}
                />
              );
            default:
              return null;
          }
        })}
        <button
          type="submit"
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
}

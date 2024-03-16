import { useState } from "react";
export default function useFormValidation(fields) {
  const [errors, setErrors] = useState({});

  const validateField = (name, value, validationType, min, max) => {
    let error = "";
    if (validationType === "number") {
      const num = parseFloat(value);
      if (isNaN(num) || num < min || num > max) {
        error = `Value must be between ${min} and ${max}`;
      }
    } else if (
      validationType === "text" &&
      (value.length < min || value.length > max)
    ) {
      error = `Value must be between ${min} and ${max} characters`;
    }
    return error;
  };

  const validateForm = (formValues) => {
    if (Object.keys(formValues).length === 0) {
      return false;
    }
    const newErrors = {};

    fields.forEach((field) => {
      const { label, validation, min, max } = field;
      newErrors[label] = validateField(
        label,
        formValues[label],
        validation,
        min,
        max
      );
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  return { errors, validateForm };
}

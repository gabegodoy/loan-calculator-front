/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormState } from "react-hook-form";

export default function FormDatePicker({
  name,
  label,
  control,
  rules,
  minDate,
  maxDate,
  views,
  helperText,
  size = "small"
}) {
  const { errors, isSubmitting } = useFormState({ control });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onBlur, onChange, value, name, ref } }) => (
        <DatePicker
          minDate={minDate}
          maxDate={maxDate}
          label={label}
          views={views}
          onChange={onChange}
          value={value}
          inputRef={ref}
          slotProps={{ textField: { size: size } }}
          textField={(params) => (
            <TextField
              {...params}
              name={name}
              onBlur={onBlur}
              required={rules?.required}
              disabled={isSubmitting}
              helperText={helperText}
              error={errors[name] !== undefined}
              fullWidth
            />
          )}
        />
      )}
    />
  );
}

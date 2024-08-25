/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Controller, useFormState } from "react-hook-form";
import MaskedInput from "react-text-mask";

export default function FormMaskedTextField({
    mask,
    control,
    rules,
    name,
    label,
    onBlur,
    guide,
    InputProps,
    size = 'small'
}) {
    const { errors, isSubmitting } = useFormState({ control });

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            onBlur={onBlur}
            render={({ field: { onChange, value, name, ref } }) => (
                <MaskedInput
                    mask={mask ?? []}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    value={value}
                    ref={ref}
                    guide={guide}
                    render={(ref, props) => (
                        <TextField
                            {...props}
                            size={size}
                            inputRef={ref}
                            label={label}
                            required={rules?.required}
                            disabled={isSubmitting}
                            error={errors[name] !== undefined}
                            InputLabelProps={{ shrink: !!value }}
                            InputProps={InputProps}
                            fullWidth
                        />
                    )}
                />
            )}
        />
    );
}

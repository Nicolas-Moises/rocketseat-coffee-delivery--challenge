import { forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { FieldInputLabel, InputComponent, InputFieldContainer, TextInsideInput } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    textInside?: string
};


export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, textInside, ...props }, ref) => {

        return (
            <FieldInputLabel className={className}>
                <InputFieldContainer hasErrors={!!error}>
                    <InputComponent {...props} ref={ref} />
                    {textInside && <TextInsideInput>{textInside}</TextInsideInput>}
                </InputFieldContainer>
                {error &&
                    <p>
                        {error}
                    </p>}

            </FieldInputLabel>

        )
    }
)
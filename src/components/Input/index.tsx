import { forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { FieldInputLabel, InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
};



export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, ...props }, ref) => {

        const { formState: { errors } } = useFormContext()

        return (
            <FieldInputLabel>
                <InputStyleContainer {...props} ref={ref} />
                {error &&
                    <span>
                        {error}
                    </span>}

            </FieldInputLabel>

        )
    }
)
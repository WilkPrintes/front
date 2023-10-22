import { forwardRef } from "react"
import { TextFieldProps, TextFieldRef } from "./interface"
import { CustomTextField } from "./styles"

export const TextField = forwardRef(function TextField(
    { children, ...props }: TextFieldProps,
    ref: TextFieldRef
) {
    return (
        <CustomTextField
            fullWidth
            ref={ref}
            {...props}
        >
            {children}
        </CustomTextField>
    )
})
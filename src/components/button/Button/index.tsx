import { forwardRef } from "react"
import { ButtonProps, ButtonPropsRef } from "./interface"
import { CustomButton } from "./styles"

export const Button = forwardRef(function Button(
    { children, ...props }: ButtonProps,
    ref: ButtonPropsRef
) {
    return (
        <CustomButton
            fullWidth
            ref={ref}
            {...props}
        >
            {children}
        </CustomButton>
    )
})
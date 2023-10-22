import CustomTypography from "./styles";
import { TypographyProps } from "./interface";

export function Typography( {children, ...props}: TypographyProps){
    return <CustomTypography {...props}>{children}</CustomTypography>
}
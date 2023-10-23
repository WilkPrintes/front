import { ListProps } from "@mui/material";
import { CustomList } from "./styles";

export function List( {children, ...props}: ListProps){
    return <CustomList {...props}>{children}</CustomList>
}
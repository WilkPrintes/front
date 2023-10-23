import { ListItemButtomProps } from "./interface";
import { CustomListItemButton } from "./styles";

export function ListItemButton( {children, ...props}: ListItemButtomProps){
    return <CustomListItemButton {...props}>{children}</CustomListItemButton>
}
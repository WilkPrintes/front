import { ListItemProps } from "./interface";
import { CustomListItem } from "./styles";

export function ListItem( {children, ...props}: ListItemProps){
    return <CustomListItem {...props}>{children}</CustomListItem>
}
import CustomSideBox from './styles';
import { BoxProps } from './interface';

export function SideBox({ children, ...props }: BoxProps) {
	return <CustomSideBox {...props}>{children}</CustomSideBox>;
}

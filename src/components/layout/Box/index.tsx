import CustomBox from './styles';
import { BoxProps } from './interface';

export function Box({ children, ...props }: BoxProps) {
	return <CustomBox {...props}>{children}</CustomBox>;
}

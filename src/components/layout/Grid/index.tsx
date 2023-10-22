import { GridProps } from './interface';
import { CustomGrid } from './styles';

export function Grid({ children, ...props }: GridProps) {
	return <CustomGrid {...props}> {children} </CustomGrid>;
}

import CustomContainer from './styles';
import { ContainerProps } from './interface';

export function Container({ children, variants, ...props }: ContainerProps) {
	return (
		<CustomContainer variants={variants} {...props}>
			{children}
		</CustomContainer>
	);
}

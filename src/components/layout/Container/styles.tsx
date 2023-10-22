import { Container, styled, Theme } from '@mui/material';

import {
	ContainerProps,
	OperatorTypes,
	VariantsByBreakpoints,
} from './interface';

const CustomContainer = styled(Container, {
	shouldForwardProp: (prop) =>
		prop !== 'selfCenterChildren' && prop !== 'fullHeight',
})<ContainerProps>(({ selfCenterChildren, fullHeight, variants, theme }) => ({
	...(fullHeight && {
		minHeight: '100svh',
	}),

	...(selfCenterChildren && {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}),

	...(variants &&
		Object.keys(variants).reduce((acc, variant) => {
			const variantsItem = variants[variant];

			variantsItem?.forEach((item) => {
				const breakpoint = theme.breakpoints[item.operator as OperatorTypes](
					variant as VariantsByBreakpoints
				);

				acc[breakpoint] = {
					...item.styles,
				};
			});

			return acc;
		}, {})),
}));

export default CustomContainer;

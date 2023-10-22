import {
	ContainerProps as MuiContainerProps,
	Breakpoint,
	Theme,
} from '@mui/material';

export type VariantsByBreakpoints = Breakpoint;

export interface VariantProperties {
	operator: OperatorTypes;
	styles: (theme: Theme) => void;
}

export type OperatorTypes = 'up' | 'down';

type VariantsProps = {
	[breakpoint in VariantsByBreakpoints]: VariantProperties[];
};

export type ExtendedVariantsProps = Partial<
	{
		[key: string]: VariantProperties[];
	} & VariantsProps
>;

export type DeepPartial<T> = {
	[P in keyof T]: DeepPartial<T[P]>;
};

export type ContainerProps = MuiContainerProps & {
	selfCenterChildren?: boolean;
	fullHeight?: boolean;
	variants?: DeepPartial<ExtendedVariantsProps>;
};

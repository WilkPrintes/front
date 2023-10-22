import { ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps

export type ButtonPropsRef =
	| ((instance: HTMLButtonElement | null) => void)
	| React.RefObject<HTMLButtonElement>
	| null
	| undefined;

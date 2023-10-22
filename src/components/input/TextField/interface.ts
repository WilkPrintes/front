import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps

export type TextFieldRef =
	| ((instance: HTMLDivElement | null) => void)
	| React.RefObject<HTMLDivElement>
	| null
	| undefined;

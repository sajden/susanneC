import { TFunction } from "react-i18next";
export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  type?: "button" | "submit" | "reset"; // Add this line
  children: React.ReactNode;
  onClick?: () => void;
}



export interface SvgIconProps {
  src?: string;  // Now optional
  width?: string;
  height?: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
export interface validateProps {
  name: string;
  message: string;
  email: string;
}

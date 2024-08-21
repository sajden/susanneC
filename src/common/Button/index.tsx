import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, type = 'button' }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} type={type}>
    {children}
  </StyledButton>
);

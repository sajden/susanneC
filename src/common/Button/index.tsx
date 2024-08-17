import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, htmlType = 'button' }: ButtonProps) => (
  <StyledButton color={color} type={htmlType}>
    {children}
  </StyledButton>
);

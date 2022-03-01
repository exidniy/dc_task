import { FC } from "react";
import { Button } from "@mui/material";
import { IControlProps } from "./types";
import { styled } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  textTransform: "none",
}));

export const Control: FC<IControlProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <StyledButton className={className} variant="contained" {...rest}>
      {children}
    </StyledButton>
  );
};

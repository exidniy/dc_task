import { PopoverProps } from "@mui/material";
import React from "react";

export interface IPopoverProps extends PopoverProps {
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

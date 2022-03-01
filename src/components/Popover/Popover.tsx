import React, { FC } from "react";
import { Popover as PopoverMUI } from "@mui/material";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IPopoverProps } from "./types";

export const Popover: FC<IPopoverProps> = ({
  anchorEl,
  children,
  handleClose,
  id,
  open,
  ...rest
}) => {
  return (
    <PopoverMUI
      hideBackdrop
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...rest}
    >
      <Card sx={{ minWidth: "250px" }}>
        <CardContent>
          {children}
          <Link
            sx={{ display: "inline-block", marginTop: "8px" }}
            component="button"
            color="inherit"
            onClick={handleClose}
          >
            посмотреть все...
          </Link>
        </CardContent>
      </Card>
    </PopoverMUI>
  );
};

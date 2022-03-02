import { ReactNode } from "react";
import { ButtonProps } from "@mui/material";

export interface IControlProps extends ButtonProps {
  className?: string;
  children?: ReactNode;
}

export interface IControlsProps {
  hasEvents: boolean;
  addEvent: (title: string) => void;
  markAllEventsRead: () => void;
  clearEvents: () => void;
  showEvents: () => void;
}

import React, { FC } from "react";
import { Typography } from "@mui/material";
import { getTimeFrom } from "../../utils/date";
import { IMessageProps } from "./types";

export const Message: FC<IMessageProps> = ({ title, time }) => {
  return (
    <div>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography gutterBottom variant="caption" display="block">
        {getTimeFrom(time)}
      </Typography>
    </div>
  );
};

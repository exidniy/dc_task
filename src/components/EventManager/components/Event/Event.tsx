import React, { FC, memo } from "react";
import { Typography } from "@mui/material";
import { getTimeFrom } from "../../../../utils/date";
import { IMessageProps } from "./types";

export const Event: FC<IMessageProps> = memo(({ title, time, isRead }) => {
  return (
    <div>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{ ...(!isRead && { fontWeight: "bold" }) }}
      >
        {title}
      </Typography>
      <Typography gutterBottom variant="caption" display="block">
        {getTimeFrom(time)}
      </Typography>
    </div>
  );
});

Event.displayName = "EventComponent";

import React, { useCallback, useState } from "react";
import { AppBar as AppBarMUI } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Popover } from "../Popover/Popover";
import { Message } from "../Message/Message";

const msgs = [
  { title: "Новый заголовок 1", time: new Date() },
  { title: "Новый заголовок 2", time: new Date() },
];

export const AppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [messages, setMessages] = useState(msgs);

  const toggle = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl]
  );

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit" onClick={toggle}>
              <Badge badgeContent={NaN} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Popover
              handleClose={toggle}
              id={id}
              open={open}
              anchorEl={anchorEl}
            >
              {messages.map((message) => (
                <Message
                  key={message.time.toUTCString()}
                  title={message.title}
                  time={message.time}
                />
              ))}
            </Popover>
          </Box>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
};

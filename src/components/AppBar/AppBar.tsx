import React, { useEffect, useRef } from "react";
import { AppBar as AppBarMUI } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Popover } from "../Popover/Popover";
import { Event } from "../EventManager/components/Event/Event";
import { useEvents } from "../EventManager/useEvents";
import { SHOWN_EVENTS_QUANITTY } from "./constants";

export const AppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const {
    events,
    unreadEvents,
    isEventsShown,
    handlers: { showEvents },
  } = useEvents();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const hasEvents = events.length > 0;

  useEffect(() => {
    setAnchorEl(isEventsShown ? buttonRef?.current : null);
  }, [isEventsShown]);

  const id = isEventsShown ? "transitions-popper" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              disabled={!hasEvents}
              size="large"
              color="inherit"
              ref={buttonRef}
              onClick={showEvents}
            >
              <Badge badgeContent={unreadEvents.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Popover
              handleClose={showEvents}
              id={id}
              open={isEventsShown}
              anchorEl={anchorEl}
            >
              {events
                .slice(-1 * SHOWN_EVENTS_QUANITTY)
                .reverse()
                .map((event) => (
                  <Event
                    key={event.time}
                    title={event.title}
                    time={event.time}
                    isRead={event.isRead}
                  />
                ))}
            </Popover>
          </Box>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
};

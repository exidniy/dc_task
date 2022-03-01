import React from "react";

import { AppBar } from "../components/AppBar/AppBar";
import { EventManager } from "../components/EventManager/EventManager";

export const Layout = () => {
  return (
    <section>
      <AppBar />
      <EventManager />
    </section>
  );
};

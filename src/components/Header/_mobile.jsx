import React, { useState, useRef } from "react";
import { IconButton, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "./Drawer";

const Mobile = () => {
  const [isOpen, setOpen] = useState(false);
  const container = useRef(null);
  const handleDrawerToggle = () => setOpen(!isOpen);
  return (
    <Hidden lgUp>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        container={container}
        open={isOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Hidden>
  );
};

export default Mobile;

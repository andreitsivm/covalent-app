import React from "react";
import { Button, Drawer, Box } from "@material-ui/core";
import { menuItems } from "constants/menu";
import { useStyles } from "./drawer.styles";

const MenuDrawer = ({ handleDrawerToggle, container, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box className={classes.list}>
        {menuItems.map(({ title, href }, index) => (
          <Box key={index} className={classes.menuItem}>
            <Button fullWidth onClick={() => {}}>
              {title}
            </Button>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;

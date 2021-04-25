import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { Link } from "components/common";
import { menuItems } from "constants/menu";

const Desktop = () => {
  return (
    <Hidden mdDown>
      <Box>
        {menuItems.map(({ title, href }, index) => (
          <Link
            variant="headerLink"
            style={{ marginRight: 16 }}
            key={index}
            to={href}
          >
            {title}
          </Link>
        ))}
      </Box>
    </Hidden>
  );
};

export default Desktop;

import React from "react";
import classes from "classnames";
import propTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@material-ui/core";
import useStyles from "./link-styles";

const Link = ({ to, variant, external, children, ...rest }) => {
  const styles = useStyles();

  return external ? (
    <MuiLink href={to} {...rest}>
      {children}s
    </MuiLink>
  ) : (
    <RouterLink
      className={classes(
        styles.gatsbyLink,
        variant === "headerLink" && styles.headerLink,
        variant === "footerLink" && styles.footerLink
      )}
      to={to}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  variant: propTypes.oneOf(["footerLink", "headerLink", ""]),
  children: propTypes.node.isRequired,
  to: propTypes.string.isRequired,
  external: propTypes.bool,
};
Link.defaultProps = {
  variant: "",
  external: false,
};
export default Link;

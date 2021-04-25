import React from "react";
import propTypes from "prop-types";
import classes from "classnames";
import { Container } from "@material-ui/core";
import { useStyles } from "./footer-styles";
import logo from "assets/images/covalent-logo.png";

const Footer = ({ className }) => {
  const styles = useStyles();

  return (
    <footer className={classes(styles.footer, className)}>
      <Container>
        <div>
          <img className={styles.image} src={logo} alt="Covalent" />
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  className: propTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;

import React from "react";
import propTypes from "prop-types";
import classes from "classnames";
import { AppBar, Container, Toolbar, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Link } from "components/common";
import logo from "assets/images/covalent-logo.svg";

import Mobile from "./_mobile";
import Desktop from "./_desktop";
import useStyles from "./header-styles";

const Header = ({ className }) => {
  const styles = useStyles();
  const router = useHistory();
  return (
    <div className={classes(className, styles.root)}>
      <AppBar position="fixed">
        <Container>
          <Toolbar className={styles.header}>
            <Box className={styles.logo}>
              <Link to="/">
                <img
                  className={styles.logo}
                  src={logo}
                  title="Incanto"
                  alt="logo"
                />
              </Link>
            </Box>
            <Desktop />
            <Button
              color="secondary"
              onClick={() => {
                router.push("/");
              }}
            >
              About Covalent
            </Button>
            <Mobile />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  className: propTypes.string,
};

Header.defaultProps = {
  className: "",
};

export default Header;

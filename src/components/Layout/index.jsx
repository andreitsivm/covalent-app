import * as React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { useStyles } from "./layout-styles";

const Layout = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;

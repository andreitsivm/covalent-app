import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import theme from "assets/theme";
import GetStarted from "pages/get-started";
import PricingEndpoints from "pages/pricing-endpoints";
import ClassAEndpoints from "pages/class-a-endpoints";
import ClassBEndpoints from "pages/class-b-endpoints";
import "assets/styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Route exact path="/" component={GetStarted} />
          <Route exact path="/pricing-endpoints" component={PricingEndpoints} />
          <Route exact path="/class-a-endpoints" component={ClassAEndpoints} />
          <Route exact path="/class-b-endpoints" component={ClassBEndpoints} />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

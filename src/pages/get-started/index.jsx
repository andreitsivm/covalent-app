import { Container, Typography, List, ListItem } from "@material-ui/core";
import React from "react";

const GetStarted = () => {
  return (
    <div>
      <Container>
        <Typography variant="h1">What is Covalent?</Typography>
        <Typography variant="body1">
          Covalent provides a unified API to bring full transparency and
          visibility to assets across all blockchain networks. Simply put, we
          have a single API which allows you to pull detailed, granular
          blockchain transaction data from multiple blockchains with no code.
        </Typography>
        <Typography variant="h1">What makes Covalent unique?</Typography>
        <Typography variant="body1">
          There are many elements of the Covalent which make us unique in the
          marketplace. However, our core differentiators from projects like the
          Graph are:
        </Typography>
        <List>
          <ListItem>
            1. Data availability We are the only project to fully index entire
            blockchains – this means every single contract, every single wallet
            address, and every single transaction. This is billions of rows of
            data and terabytes of data. Other projects only provide a small
            subset of the available data or only start collecting data once the
            appropriate query or filter is set up.
          </ListItem>
          ​
          <ListItem>
            2. Composability Composability is a critical piece of Decentralized
            Finance (DeFi) applications and allows developers to quickly and
            easily construct financial solutions leveraging 'Lego-like' building
            blocks from a multitude of projects. The multichain flexiblity and
            deep, granular data provided by our APIs means developers can
            quickly and easily build scalable and data rich applications with no
            query code.
          </ListItem>
          <ListItem>
            ​3. Multi-blockchain support Multichain is in our DNA. Covalent
            already indexes and has customers on 7 different blockchain networks
            with many more to announce soon.
          </ListItem>
          <ListItem>
            ​4. No code solution We believe in no-code solutions for our users.
            This means no complicated SQL queries, no subgraph development and
            maintenance, and no need to invest in highly-skilled (read
            expensive) developers to simply retrieve blockchain data, which is a
            monumental waste of engineering time. One API and you are done.
          </ListItem>{" "}
        </List>
      </Container>
    </div>
  );
};

export default GetStarted;

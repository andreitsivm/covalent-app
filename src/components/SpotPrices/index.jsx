import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseUrl } from "constants/api";

const SpotPrices = () => {
  const [fetchData, setFetchData] = useState([]);
  const [tickers, setTickers] = useState(["ETH"]);

  const addTicker = (value) => {
    setTickers([...tickers, value]);
  };

  useEffect(() => {
    axios.get(`${baseUrl}pricing/tickers/?tickers=BTC%2CETH" `);
  }, []);
  return (
    <div>
      <Container>
        <Typography variant="h2" color="#fff">
          Get spot prices
        </Typography>
      </Container>
    </div>
  );
};

export default SpotPrices;

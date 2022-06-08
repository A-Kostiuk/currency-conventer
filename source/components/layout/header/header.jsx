import React, { useEffect, useState } from 'react';
import Title from '../../ui/title/title';
import Form from '../form/form';
import { StyledHeader } from './styles';

const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const baseCurrency = { rate: 1, cc: 'UAH', txt: 'Українська гривня' };


function Header() {
  const [currenciesRate, setCurrenciesRate] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setCurrenciesRate([baseCurrency, ...result]);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <StyledHeader>
      <Title level={1} marginBottom={30}>Currency Converter</Title>
      <Form isLoaded={isLoaded} error={error} currenciesRate={currenciesRate}/>
    </StyledHeader>
  );
}

export default Header;

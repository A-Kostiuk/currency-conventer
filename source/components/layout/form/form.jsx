import React, { useState, useEffect } from 'react';
import Column from '../../ui/column/column';
import CurrencyList from '../../ui/currency-list/currency-list';
import Input from '../../ui/input/input';
import { StyledForm } from './styles';

const defaultExchange = 100;
const DefaultCurrencyTypeExchange = 'UAH';
const DefaultCurrencyTypeReceive = 'USD';

const mathRoundHundredth = (int) => Number(int).toFixed(2);

function Form({ currenciesRate, error, isLoaded }) {
  const getCurrencyRate = (type) =>
    currenciesRate.find((item) => item?.cc === type)?.rate;

  const [exchangeValue, setExchangeValue] = useState(defaultExchange);
  const [currencyRateExchange, setCurrencyRateExchange] = useState(null);
  const [currencyRateReceive, setCurrencyRateReceive] = useState(null);
  const [receiveValue, setReceiveValue] = useState(0);

  useEffect(() => {
    if (currenciesRate && currenciesRate.length) {
      const DefaultCurrencyRateExchange = getCurrencyRate(DefaultCurrencyTypeExchange);
      const DefaultCurrencyRateReceive = getCurrencyRate(DefaultCurrencyTypeReceive);
      setCurrencyRateExchange(DefaultCurrencyRateExchange);
      setCurrencyRateReceive(DefaultCurrencyRateReceive);
      setReceiveValue(mathRoundHundredth(defaultExchange * DefaultCurrencyRateExchange / DefaultCurrencyRateReceive));
    }
  }, [currenciesRate]);

  if (error) {
    return <div>Помилка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Завантаження...</div>;
  } else {
    return (
      <StyledForm>
        <Column>
          <Input
            name="exchange"
            text="Міняю"
            value={exchangeValue}
            onChange={(evt) => {
              const value = evt.target.value;
              setExchangeValue(value);
              setReceiveValue(
                mathRoundHundredth(value / currencyRateReceive * currencyRateExchange),
              );
            }}
          />
          <CurrencyList
            currencyRate={currenciesRate}
            defaultValue={DefaultCurrencyTypeExchange}
            onChange={(evt) => {
              const rate = getCurrencyRate(evt.target.value);
              setCurrencyRateExchange(rate);
              setReceiveValue(mathRoundHundredth(exchangeValue / currencyRateReceive * rate));
            }}
          />
        </Column>
        <Column>
          <Input
            name="receive"
            text="Отримую"
            value={receiveValue}
            onChange={(evt) => {
              const value = evt.target.value;
              setReceiveValue(value);
              setExchangeValue(
                mathRoundHundredth(value * currencyRateReceive / currencyRateExchange),
              );
            }}
          />
          <CurrencyList
            currencyRate={currenciesRate}
            defaultValue={DefaultCurrencyTypeReceive}
            onChange={(evt) => {
              const rate = getCurrencyRate(evt.target.value);
              setCurrencyRateReceive(rate);
              setReceiveValue(mathRoundHundredth(exchangeValue * currencyRateExchange / rate));
            }}
          />
        </Column>
      </StyledForm>
    );
  }
}

export default Form;

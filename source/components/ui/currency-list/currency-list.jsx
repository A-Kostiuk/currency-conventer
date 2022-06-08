import React from 'react';
import { List, Select } from './styles';

function CurrencyList({ currencyRate, ...props }) {
  return (
    currencyRate &&
    currencyRate.length && (
      <List>
        <label>Валюта:</label>
        <Select name="currency" {...props}>
          {currencyRate.map((currency) => (
            <option
              key={currency.cc}
              value={currency.cc}
            >
              {`${currency.cc} ${currency.txt}`}
            </option>
          ))}
        </Select>
      </List>
    )
  );
}

export default CurrencyList;

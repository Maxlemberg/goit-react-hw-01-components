import React from 'react';
import style from './Transactions.module.css';

const TransactionHistory = ({ transactions }) => {
  const arrTransactions = transactions.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td className={style.info}>{type}</td>
      <td className={style.info}>{amount}</td>
      <td className={style.info}>{currency}</td>
    </tr>
  ));
  return (
    <table className={style.transactionhistory}>
      <thead>
        <tr>
          <th className={style.head}>Type</th>
          <th className={style.head}>Amount</th>
          <th className={style.head}>Currency</th>
        </tr>
      </thead>

      <tbody>{arrTransactions}</tbody>
    </table>
  );
};
export default TransactionHistory;

import PropTypes from 'prop-types';
import { TransactionsTable } from './TransactionHistory.styled';
import TransactionItem from 'components/TransactionItem/TransactionItem';

// console.log(transactions);

export default function TransactionHistory(props) {
  const transactions = props.transactions;
  const transactionsList = transactions.map(
    ({ id, type, amount, currency }) => (
      <TransactionItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    )
  );
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <th>{props.type}</th>
          <th>{props.amount}</th>
          <th>{props.currency}</th>
        </tr>
      </thead>

      <tbody>{transactionsList}</tbody>
    </TransactionsTable>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

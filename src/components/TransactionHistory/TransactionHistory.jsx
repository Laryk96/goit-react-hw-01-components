import PropTypes from 'prop-types';

// style Component
import {
  Table,
  Header,
  TransactionHistory,
  HeaderColumn,
  HeaderLine,
  TransactionValue,
} from './TransactionHistory.styled';

// utils
import { normalizeType } from '../../utils';

function TransactionTable({ items }) {
  return (
    <Table>
      <Header>
        <HeaderLine>
          <HeaderColumn>Type</HeaderColumn>
          <HeaderColumn>Amount</HeaderColumn>
          <HeaderColumn>Currency</HeaderColumn>
        </HeaderLine>
      </Header>

      {items.map(item => {
        return (
          <TransactionHistory key={item.id}>
            <HeaderLine>
              <TransactionValue>{normalizeType(item.type)}</TransactionValue>
              <TransactionValue>{item.amount}</TransactionValue>
              <TransactionValue>{item.currency}</TransactionValue>
            </HeaderLine>
          </TransactionHistory>
        );
      })}
    </Table>
  );
}

TransactionTable.porpsTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionTable;

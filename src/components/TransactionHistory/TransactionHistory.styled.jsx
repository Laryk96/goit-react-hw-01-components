import styled from '@emotion/styled';

const Table = styled.table`
  box-shadow: 0 2px 5px rgb(0 0 0 / 20%), 0 4px 6px rgb(0 0 0 / 20%);
`;

const Header = styled.thead`
  background-color: ${props => props.theme.colors.blueTable};
  color: ${props => props.theme.colors.white};
`;

const HeaderLine = styled.tr`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.333;

  height: 50px;
`;

const HeaderColumn = styled.th`
  width: 160px;
`;

const TransactionHistory = styled.tbody`
  :nth-of-type(2n) {
    background-color: ${props => props.theme.colors.white};
  }
  :nth-of-type(2n + 1) {
    background-color: ${props => props.theme.colors.secondTableWhite};
  }
`;

const TransactionValue = styled.td`
  text-align: center;
`;
const TransactionLine = styled.tr`
  height: 40px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.333;

  transition: background-color 150ms ease-in;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondatyText};
  }
`;
export {
  Table,
  Header,
  HeaderColumn,
  HeaderLine,
  TransactionHistory,
  TransactionLine,
  TransactionValue,
};

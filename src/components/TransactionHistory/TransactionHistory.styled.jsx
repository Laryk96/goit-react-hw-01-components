import styled from "@emotion/styled";

const Table = styled.table`
  box-shadow: 0 2px 5px rgb(0 0 0 / 20%), 0 4px 6px rgb(0 0 0 / 20%);
`;

const Header = styled.thead`
  background-color: ${(props) => props.theme.colors.blueTable};
  color: ${(props) => props.theme.colors.white};
`;

const HeaderLine = styled.tr`
  height: 50px;
`;

const HeaderColumn = styled.th`
  width: 250px;
`;

const TransactionHistory = styled.tbody`
  :nth-of-type(2n) {
    background-color: ${(props) => props.theme.colors.white};
  }
  :nth-of-type(2n + 1) {
    background-color: ${(props) => props.theme.colors.secondTableWhite};
  }
`;

const TransactionValue = styled.td`
  text-align: center;
`;

export {
  Table,
  Header,
  HeaderColumn,
  TransactionHistory,
  HeaderLine,
  TransactionValue,
};

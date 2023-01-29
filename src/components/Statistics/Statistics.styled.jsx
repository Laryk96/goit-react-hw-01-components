import styled from '@emotion/styled';

const Section = styled.section`
  padding-top: 30px;

  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  display: block;
  margin-bottom: 15px;

  text-align: center;
  font-size: 22px;
  line-height: 2;
  font-weight: 500;
  letter-spacing: 0.5;
  text-transform: uppercase;
`;

const StatList = styled.ul`
  display: flex;
`;

const StatItem = styled.li`
  width: 80px;
  padding: 10px 0;

  text-align: center;
  background-color: ${props => props.backgroundColor};

  transition: transform 150ms ease-in;
  :hover {
    transform: translate(0px, -10px);
  }
`;

const StatLabel = styled.span`
  display: block;
  margin-bottom: 5px;

  color: ${props => props.theme.colors.white};
  font-size: 16px;
`;

const StatPercent = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;

export { Title, Section, StatList, StatItem, StatLabel, StatPercent };

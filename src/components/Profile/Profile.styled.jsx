import styled from '@emotion/styled';

const UserCard = styled.div`
  border: ${props => ` 1px solid ${props.theme.colors.grayBorder}`};
  border-radius: 7px;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  transition: transform 150ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

const Description = styled.div`
  padding: 30px 60px;

  text-align: center;
`;

const UserImage = styled.img`
  margin-bottom: 15px;

  background-color: ${props => props.theme.colors.secondatyText};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const UserName = styled.h2`
  margin-bottom: 5px;

  font-size: 18px;
  line-height: 1.333;
  font-weight: 700;
  letter-spacing: 0.5;
`;

const Info = styled.p`
  font-size: 14px;
  line-height: 1.333;
  color: ${props => props.theme.colors.secondatyText};

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${props => props.theme.colors.secondBgd};
`;

const Stats = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;

  border: ${props => ` 1px solid ${props.theme.colors.grayBorder}`};
  font-size: 16px;
  line-height: 1.333;
  font-weight: 700;
  letter-spacing: 0.5;
  text-align: center;
`;

const Label = styled.p`
  margin-bottom: 5px;

  font-size: 14px;
  line-height: 1.333;
  font-weight: 400;
  color: ${props => props.theme.colors.secondatyText};
`;
export {
  UserCard,
  Description,
  UserName,
  UserImage,
  Info,
  StatsList,
  Stats,
  Label,
};

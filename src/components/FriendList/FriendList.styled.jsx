import styled from '@emotion/styled';

// utils
import { getColorByFlag } from 'utils';

const Container = styled.ul``;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: 280px;
  height: 65px;
  gap: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    left: 51px;
    top: 10px;
    width: 55px;
    height: 55px;

    background-color: ${props => props.theme.colors.secondatyText};

    border-radius: 6px;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }

  transition: background-color 150ms ease-in, transform 150ms ease-in;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondatyText};

    transform: scale(1.03);
  }
`;

const FriendImage = styled.img`
  z-index: 1;
`;

const FriendName = styled.p`
  font-size: 18px;
  line-height: 1.333;
  font-weight: 700;
  letter-spacing: 0.5;
l
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => getColorByFlag(props.backgroundColor)};
`;

export { Container, FriendListItem, FriendImage, FriendName, Status };

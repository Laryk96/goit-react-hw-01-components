import PropTypes from 'prop-types';

// style Component
import {
  Container,
  FriendListItem,
  FriendImage,
  FriendName,
  Status,
} from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id}>
            <Status backgroundColor={isOnline}></Status>
            <FriendImage src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendListItem>
        );
      })}
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

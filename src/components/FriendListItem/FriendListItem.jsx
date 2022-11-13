import { BsFillCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ListItem, FriendName, StatusIcon, FriendAvatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <StatusIcon isOnline={isOnline} > <BsFillCircleFill /></StatusIcon>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </ListItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
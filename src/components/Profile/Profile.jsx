import PropTypes from 'prop-types';
import { UserProfile, UserDescription, UserAvatar, UserName, UserTag, UserLocation, Stats, StatsItem, Label, LabelQuantity
} from './Profile.styled'

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar
          src={avatar}
          alt="User avatar"
        />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <LabelQuantity>{stats.followers}</LabelQuantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <LabelQuantity>{stats.views}</LabelQuantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <LabelQuantity>{stats.likes}</LabelQuantity>
        </StatsItem>
      </Stats>
    </UserProfile>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
}
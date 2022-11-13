import { BsFillCircleFill } from 'react-icons/bs'
import PropTypes from 'prop-types'
import css from 'components/FriendListItem/FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.item}>
            <span className={css.status}>{isOnline} <BsFillCircleFill className={`${css.icon} ${css[isOnline]}`}/></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
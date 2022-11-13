import styled from '@emotion/styled';

export const ListItem = styled.li`
    background-color: #fff;
    width: 100%;
    display: flex;
    margin-top: 4px;
    margin-bottom: 4px;
    align-items: center;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px 4px 4px 4px;
`
export const FriendAvatar = styled.img`
    border-radius: 20%;
    padding-left: 8px;
    padding-right: 8px;
`;

export const StatusIcon = styled.span`
    size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    svg {
        color: ${(props =>
            (props.isOnline) ? 'green' : 'red')}
    }
`;

export const FriendName = styled.p`
    color: #000;
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.03em;
`;
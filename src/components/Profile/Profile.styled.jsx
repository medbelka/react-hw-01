import styled from '@emotion/styled';

export const UserProfile = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    display: flexbox;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 270px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px 4px 4px 4px;
`;

export const UserDescription = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
`;

export const UserAvatar = styled.img`
    width: 50%;
    margin: auto;
    display: block;
    border-radius: 50%;
    max-width: 50%;
    padding-bottom: 20px;
`;

export const UserName = styled.p`
    color: #212121;
    margin-top: 0;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0.03em;
    text-align: center;
`;

export const UserTag = styled.p`
    color: #757575;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.03em;
    text-align: center;
`;

export const UserLocation = styled.p`
    color: #757575;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.03em;
    text-align: center;
`;

export const Stats = styled.ul`
    padding: 0;
    background-color: #f3f6f9;
    display: flex;
    text-align: center;
    border-radius: 0px 0px 4px 4px;
`;
  
export const StatsItem = styled.li`
    border: 1px solid #e4e9f0;
    width: calc(100%/3);
    padding: 12px;

    &:first-child {
        border-radius: 0px 0px 0px 4px;
    }

    &:last-child {
        border-radius: 0px 0px 4px 0px;
    }
`;

export const Label = styled.span`
color: #757575;
display: block;
margin: auto;
margin-bottom: 4px;
font-weight: 400;
font-size: 12px;
line-height: 1;
letter-spacing: 0.03em;
`;

export const LabelQuantity = styled.span`
color: #212121;
display: block;
margin: auto;
font-weight: 600;
font-size: 14px;
line-height: 1;
letter-spacing: 0.03em;
`;
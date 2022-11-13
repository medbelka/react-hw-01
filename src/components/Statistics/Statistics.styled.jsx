import styled from '@emotion/styled';

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

export const StatSection = styled.section`
    background-color: #fff;
    box-sizing: content-box;
    display: flexbox;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 270px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px 4px 4px 4px;
    margin-top: 28px;
`;

export const StatTitle = styled.h2`
color: #4e5357;
text-transform: uppercase;
font-weight: 600;
margin-bottom: 4px;
font-size: 16px;
line-height: 1;
letter-spacing: 0.03em;
text-align: center;
padding-top: 8px;
padding-bottom: 8px;
`;

export const StatList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
`;

export const StatListItem = styled.li`
    width: 20%;
    background-color: ${generateColor};
    padding-top: 8px;
    padding-bottom: 8px;

    &:first-child {
        border-radius: 0px 0px 0px 4px;
    }

    &:last-child {
        border-radius: 0px 0px 4px 0px;
    }
`;

export const Label = styled.span`
    color: #fff;
    display: block;
    margin: auto;
    font-weight: 400;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.03em;
`;

export const Percentage = styled.span`
    color: #fff;
    display: block;
    margin: auto;
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.03em;
`;
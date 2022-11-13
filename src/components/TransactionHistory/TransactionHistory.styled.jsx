import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    width: 400px;
    background-color: #fff;
    margin: auto;
    margin-top: 24px;
`;

export const TableHead = styled.thead`
    background-color: #00bcd5;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    text-align: center;
`;

export const TableBody = styled.tbody`
    color: #8b8e91;
    text-align: center;
`;

export const TableRow = styled.tr`
    height: 40px;

    &:nth-child(even) {
        background-color: #ecf1f4;
    }
`;
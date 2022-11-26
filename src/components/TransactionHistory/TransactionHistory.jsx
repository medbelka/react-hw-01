import PropTypes from 'prop-types'
import { TransactionTable, TableHead, TableBody, TableRow
 } from './TransactionHistory.styled';

export const TransactionHistory =({ items }) => {
    return (
        <TransactionTable>
            <TableHead>
                <TableRow>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </TableRow>
            </TableHead>

            <TableBody>
                {items.map(({ id, type, amount, currency}) =>
                ( <TableRow key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </TableRow> ))}
            </TableBody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
    id: PropTypes.number.isRequired, 
    type: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired,
}
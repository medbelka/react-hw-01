import PropTypes from 'prop-types';
import { StatSection, StatTitle, StatList, StatListItem, Label, Percentage} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
      <StatSection>
        <StatTitle>{title}</StatTitle>

        <StatList>
            {stats.map(stat => (
                <StatListItem key={stat.id}>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                </StatListItem>
                )
             )}
        </StatList>
      </StatSection>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader) {
        return (
        <tr>
            <th colSpan="2">{textFirstCell}</th>
        </tr>
        );
    } else {
        return (
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

export default CourseListRow;
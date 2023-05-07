import React from 'react';
// import PropTypes from 'prop-types';
// import { Button } from './FeedbackOptions.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter contacts by name:
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

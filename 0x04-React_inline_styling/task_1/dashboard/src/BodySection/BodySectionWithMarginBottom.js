import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: "40px",
  },
});

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BodySectionWithMarginBottom;

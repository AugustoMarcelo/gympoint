import React from 'react';
import { MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  message: {
    color: '#00b894',
    fontWeight: 'bold',
  },
};

export default function CustomToast({ message }) {
  return (
    <div style={styles.container}>
      <span>
        <MdCheck size={20} color="#00b894" style={{ marginRight: 10 }} />
      </span>
      <div style={styles.message}>{message}</div>
    </div>
  );
}

CustomToast.propTypes = {
  message: PropTypes.string,
};

import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

export default function UnformAsyncSelect({ name, label, ...rest }) {
  const ref = useRef();
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'rest.value[value]',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <AsyncSelect
        name={fieldName}
        aria-label={fieldName}
        cacheOptions
        defaultOptions
        ref={ref}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

UnformAsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

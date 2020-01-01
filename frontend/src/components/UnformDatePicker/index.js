import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function UnformDatePicker({ name, label, ...props }) {
  const ref = useRef();
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <DatePicker
        name={fieldName}
        ref={ref}
        locale={ptBR}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        autoComplete="off"
        {...props}
      />
      {error && <span>{error}</span>}
    </>
  );
}

UnformDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

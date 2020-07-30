import React from 'react';
import PropTypes from 'prop-types';

function FormField({ type, label, name, value, onChange }) {
  function renderTagsFormField(label, children) {
    return (
      <div>
        <label>
          {label}:{children}
        </label>
      </div>
    );
  }
  function renderFormField(type, label, name, value, onChange) {
    var result = null;
    switch (type) {
      case 'textarea': {
        result = renderTagsFormField(
          label,
          <textarea name={name} onChange={onChange} value={value} />
        );
        break;
      }
      default: {
        result = renderTagsFormField(
          label,
          <input type={type} name={name} value={value} onChange={onChange} />
        );
      }
    }
    return result;
  }
  return renderFormField(type, label, name, value, onChange);
}

FormField.defaultProps = {
  type: 'text',
  label: 'default',
};

FormField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
import React from 'react';
// NOTE: Deprecated
import Validation from 'react-validation';
// From v2.10.0
// import { rules, Form, Input, Select, Textarea, Button } from 'react-validation/lib/build/validation.rc'
import validator from 'validator';

// Use Object.assign or any similar API to merge a rules
// NOTE: IE10 doesn't have Object.assign API natively. Use polyfill/babel plugin.
Object.assign(Validation.rules, {
  // Key name maps the rule
  required: {
    // Function to validate value
    // NOTE: value might be a number -> force to string
    rule: value => value.toString().trim(),
    // Function to return hint
    // You may use current value to inject it in some way to the hint
    hint: value => <span className="form-error is-visible">Required</span>,
  },
  email: {
    // Example usage with external 'validator'
    rule: value => validator.isNumeric(value),
    hint: value => <span className="form-error is-visible">{value} isnt an Email.</span>,
  },
  // This example shows a way to handle common task - compare two fields for equality
  password: {
    // rule function can accept argument:
    // components - components registered to Form mapped by name
    rule: (value, components) => {
      const password = components.password.state;
      const passwordConfirm = components.passwordConfirm.state;
      const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
      const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

      if (!isBothUsed || !isBothChanged) {
        return true;
      }

      return password.value === passwordConfirm.value;
    },
    hint: () => <span className="form-error is-visible">Passwords should be equal.</span>,
  },
  // Define API rule to show hint after API error response
  api: {
    // We don't need the rule here because we will call the 'showError' method by hand on API error
    hint: value => (
      <button
        className="form-error is-visible"
      >
                API Error on "{value}" value. Focus to hide.
      </button>
    ),
  },
  isPassword: {
    rule: (value) => {
      const reg = /^(?=.*\d)(?=.*[A-Za-z])(?!^[!@#$%^&*~`()_+\-=\[\]{};':"\\|,.<>\/?]*\$)([a-zA-Z0-9!@#$%^&*()~`_+\-=\[\]{};':"\\|,.<>\/?]{6,})$/;
      return reg.test(value);
    },
    hint: value => <span className="form-error is-visible">Passwords should minimum of 8 characters </span>,
  },

});

/* import React from 'react';

const Textarea = ({ placeholder, className, value, onChange, onKeyPress }) => (
  <textarea
    placeholder={placeholder}
    className={`p-2 border rounded ${className}`}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
);

export default Textarea; */


import React from 'react';

const Textarea = ({ placeholder, className, value, onChange, onKeyPress }) => (
  <textarea
    placeholder={placeholder}
    className={`p-2 border rounded resize-none ${className}`}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
);

export default Textarea;





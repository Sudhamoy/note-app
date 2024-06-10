/* import React from 'react';

const Avatar = ({ children, className }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${className}`}>
    {children}
  </div>
);

export default Avatar;
 */

import React from 'react';

const Avatar = ({ children, className }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${className}`}>
    {children}
  </div>
);

export default Avatar;


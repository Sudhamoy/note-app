/* import React from 'react';
import Avatar from './components/ui/Avatar';
import AvatarFallback from './components/ui/AvatarFallback';

const GroupItem = ({ group, onSelectGroup }) => (
  <div className="flex items-center mb-2 cursor-pointer" onClick={() => onSelectGroup(group)}>
    <Avatar className="bg-blue-500">
      <AvatarFallback>{group.initials}</AvatarFallback>
    </Avatar>
    <div className="pl-2">{group.name}</div>
  </div>
);

export default GroupItem; */

import React from 'react';
import Avatar from './components/ui/Avatar';
import AvatarFallback from './components/ui/AvatarFallback';

const GroupItem = ({ group, onSelectGroup }) => (
  <div className="flex items-center mb-2 cursor-pointer" onClick={() => onSelectGroup(group)}>
    <Avatar className={`${group.color}`}>
      <AvatarFallback>{group.initials}</AvatarFallback>
    </Avatar>
    <div className="pl-2">{group.name}</div>
  </div>
);

export default GroupItem;

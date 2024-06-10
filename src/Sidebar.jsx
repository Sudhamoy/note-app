import React from 'react';
import Button from './components/ui/Button';
import GroupItem from './GroupItem';

const Sidebar = ({ groups, onAddGroup, onSelectGroup }) => (
  <aside className="w-full lg:w-64 bg-gray-100 p-6 relative">
    <h1 className="text-2xl font-bold mb-4">Pocket Notes</h1>
    {groups.length === 0 ? (
      <button
        className="absolute bottom-6 right-6 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl"
        onClick={onAddGroup}
      >
        +
      </button>
    ) : (
      <>
        <Button className="bg-blue-500 text-white w-full mb-4" onClick={onAddGroup}>
          Create Notes Group
        </Button>
        <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
          {groups.map(group => (
            <GroupItem key={group.name} group={group} onSelectGroup={onSelectGroup} />
          ))}
        </nav>
      </>
    )}
  </aside>
);

export default Sidebar;

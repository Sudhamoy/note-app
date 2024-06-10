import React, { useState } from 'react';

const colors = [
  { id: 1, className: 'bg-red-500' },
  { id: 2, className: 'bg-green-500' },
  { id: 3, className: 'bg-blue-500' },
  { id: 4, className: 'bg-yellow-500' },
  { id: 5, className: 'bg-purple-500' },
  { id: 6, className: 'bg-pink-500' }
];

const NewGroupPopup = ({ onClose, onAddGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddGroup = () => {
    if (!groupName.trim() || !selectedColor) return;
    onAddGroup({ name: groupName, initials: groupName.split(' ').map(word => word[0]).join(''), color: selectedColor.className });
    setGroupName("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4">Create New Group</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
        />
        <div className="mb-4">
          <p className="mb-2">Choose color:</p>
          <div className="flex space-x-2">
            {colors.map(color => (
              <div
                key={color.id}
                className={`w-8 h-8 rounded-full cursor-pointer ${color.className} ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          onClick={handleAddGroup}
          disabled={!groupName.trim() || !selectedColor}
        >
          Create
        </button>
        <button
          className="mt-2 text-gray-500 w-full"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewGroupPopup;

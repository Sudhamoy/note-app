import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import NewGroupPopup from './NewGroupPopup';

export default function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState('sidebar');

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    setGroups(storedGroups);
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [groups, notes]);

  const handleAddGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
    setShowPopup(false);
    setCurrentPage('main');
    setSelectedGroup(newGroup);
  };

  const handleAddNote = (newNote) => {
    const updatedNotes = { ...notes, [selectedGroup.name]: [...(notes[selectedGroup.name] || []), newNote] };
    setNotes(updatedNotes);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setCurrentPage('main');
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex">
        <Sidebar groups={groups} onAddGroup={() => setShowPopup(true)} onSelectGroup={handleGroupSelect} />
        <MainContent group={selectedGroup} notes={notes[selectedGroup?.name] || []} onAddNote={handleAddNote} onBack={() => setCurrentPage('sidebar')} />
      </div>
      <div className="lg:hidden w-full">
        {currentPage === 'sidebar' ? (
          <Sidebar groups={groups} onAddGroup={() => setShowPopup(true)} onSelectGroup={handleGroupSelect} />
        ) : (
          <MainContent group={selectedGroup} notes={notes[selectedGroup?.name] || []} onAddNote={handleAddNote} onBack={() => setCurrentPage('sidebar')} />
        )}
      </div>
      {showPopup && <NewGroupPopup onClose={() => setShowPopup(false)} onAddGroup={handleAddGroup} />}
    </div>
  );
}

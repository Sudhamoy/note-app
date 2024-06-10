import React, { useState } from 'react';
import Avatar from './components/ui/Avatar';
import AvatarFallback from './components/ui/AvatarFallback';
import Textarea from './components/ui/Textarea';
import Button from './components/ui/Button';
import NoteItem from './NoteItem';

const MainContent = ({ group, notes, onAddNote, onBack }) => {
  const [newNoteContent, setNewNoteContent] = useState("");

  const handleAddNote = () => {
    if (!newNoteContent.trim()) return;
    const date = new Date();
    const newNote = {
      content: newNoteContent,
      time: date.toLocaleTimeString(),
      date: date.toLocaleDateString()
    };
    onAddNote(newNote);
    setNewNoteContent("");
  };

  return (
    <main className="main-content flex-1 p-6">
      <button onClick={onBack} className="lg:hidden mb-4 text-blue-500">Back to Groups</button>
      {group ? (
        <>
          <div className="flex items-center mb-6">
            <Avatar className={`${group.color}`}>
              <AvatarFallback>{group.initials}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold ml-4">{group.name}</h2>
          </div>
          <div className="space-y-6">
            {notes.map((note, index) => (
              <div key={index} className="note-container bg-gray-100 p-4 rounded-md">
                <div className="text-sm text-gray-500 mb-2">
                  {note.time}
                  <br />
                  {note.date}
                </div>
                <p>{note.content}</p>
              </div>
            ))}
            <div className="note-input-container bg-gray-100 p-4 rounded-md">
              <Textarea
                placeholder="Enter your text here..."
                className="note-input flex-1"
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && newNoteContent.trim() && handleAddNote()}
              />
              <Button
                className="ml-4 bg-blue-500 text-white p-2 rounded-full"
                onClick={handleAddNote}
                disabled={!newNoteContent.trim()}
              >
                &gt;
              </Button>
            </div>
          </div>
        </>
      ) : (
        <p>Please select a group to view notes.</p>
      )}
    </main>
  );
};

export default MainContent;

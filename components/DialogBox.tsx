import React, { useState } from 'react';

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (inputText: string) => void; // Added to handle form submission
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose, onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputText); // Use the onSubmit prop to handle form submission
    onClose(); // Close the dialog box after submission
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputText">Enter Text for Flowchart:</label>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>Generate Flowchart</button>
        <button type="button" onClick={onClose} style={{ padding: '8px 16px', cursor: 'pointer', marginLeft: '10px' }}>Cancel</button>
      </form>
    </div>
  );
};

export default DialogBox;

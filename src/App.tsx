import React from 'react';
import DragDropUpload from './DragDropUpload';

const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    console.log('Uploaded file:', file);
    // Perform further actions with the file
  };

  return (
    <div>
      <h1>Drag and Drop Upload</h1>
      <DragDropUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default App;

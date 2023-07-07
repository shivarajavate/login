import React, { useState } from 'react';
import './DragDropUpload.css';

interface DragDropUploadProps {
  onFileUpload: (file: File) => void;
}

const DragDropUpload: React.FC<DragDropUploadProps> = ({ onFileUpload }) => {
  const [highlight, setHighlight] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setHighlight(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setHighlight(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setHighlight(false);

    const file = event.dataTransfer.files[0];
    onFileUpload(file);
  };

  return (
    <div
      className={`drop-area ${highlight ? 'highlight' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop a file here, or click to select a file</p>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={(event) => {
          const file = event.target.files && event.target.files[0];
          if (file) {
            onFileUpload(file);
          }
        }}
      />
      <label htmlFor="file-input" className="file-input-label">
        Select File
      </label>
    </div>
  );
};

export default DragDropUpload;

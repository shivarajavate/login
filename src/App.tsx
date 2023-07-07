import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DragDropUpload from './DragDropUpload';
import './App.css';

const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    console.log('Uploaded file:', file);
    // Perform further actions with the file
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className='app'>
      <pre>
        <div className='code-snippet'>
          <label htmlFor="code" className='copy-code'>copy code</label>
          <code id="code">
            <div>
              npm install react-datepicker @types/react-datepicker
            </div>
            <div>
              import React from 'react';
            </div>
            <div>
              import DatePicker from 'react-datepicker';
            </div>
            <div>
              import 'react-datepicker/dist/react-datepicker.css';
            </div>
          </code>
        </div>
      </pre>
      <DatePicker
        selected={selectedDate} onChange={handleDateChange} />
      <h1>Drag and Drop Upload</h1>
      <DragDropUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default App;

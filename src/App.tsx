import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DatePickerDemo from './DatePickerDemo';
import DragDropUploadDemo from './DragDropUploadDemo';
import TaxCalculatorDemo from './TaxCalculatorDemo';
import ReactPDFViewerDemo from './ReactPDFViewerDemo';

const App: React.FC = () => {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragdropupload" element={<DragDropUploadDemo />} />
          <Route path="/datepicker" element={<DatePickerDemo />} />
          <Route path="/taxcalculator" element={<TaxCalculatorDemo />} />
          <Route path="/reactpdfviewer" element={<ReactPDFViewerDemo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

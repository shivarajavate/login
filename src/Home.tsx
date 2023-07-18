import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <div className='home'>
            <Link to='/datepicker'>Date Picker</Link>
            <Link to='/dragdropupload'>Drag Drop Upload</Link>
            <Link to='/taxcalculator'>Tax Calculator</Link>
            <Link to='/reactpdfviewer'>React PDF Viewer</Link>
        </div>
    );
};

export default Home;

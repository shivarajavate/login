import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerDemo: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div>
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
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default DatePickerDemo;

import React, { useState } from 'react';

const TaxCalculatorDemo: React.FC = () => {
    const [salary, setSalary] = useState(0);
    const [isOldRegimeDisabled, setIsOldRegimeDisabled] = useState(true);
    const [isNewRegimeDisabled, setIsNewRegimeDisabled] = useState(true);
    const [tax, setTax] = useState(0);

    const clearValues = () => {
        setSalary(0);
        setIsOldRegimeDisabled(true);
        setIsNewRegimeDisabled(true);
    };

    const onSalaryChange = (salary: number) => {
        setSalary(salary);
        setIsOldRegimeDisabled(!salary);
        setIsNewRegimeDisabled(!salary);
    };

    const calculateTaxOnOldRegime = () => {
        setTax(100);
    };

    const calculateTaxOnNewRegime = () => {
        setTax(200);
    };

    return (
        <div>
            <h1>Tax Calculator</h1>
            <button onClick={clearValues}>RESET</button>
            <input type="number" name="salary" id="salary" value={salary} onChange={(event) => onSalaryChange(Number(event.target.value))} />
            <button disabled={isOldRegimeDisabled} onClick={calculateTaxOnOldRegime}>OLD REGIME</button>
            <button disabled={isNewRegimeDisabled} onClick={calculateTaxOnNewRegime}>NEW REGIME</button>
            <label id="tax">{tax}</label>
        </div>
    );
};

export default TaxCalculatorDemo;

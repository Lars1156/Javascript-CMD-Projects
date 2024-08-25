import React, { useState } from 'react';

function ToggleButton() {
    // Initialize state to manage the button's on/off status
    const [isOn, setIsOn] = useState(false);

    // Function to handle the button click event
    const handleToggle = () => {
        setIsOn(prevState => !prevState); // Toggle the state
    };

    return (
        <button 
            id="toggle-button" 
            className="toggle-button" 
            onClick={handleToggle}
        >
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}

export default ToggleButton;
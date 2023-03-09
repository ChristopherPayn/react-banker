import React from "react";

export const PinInput = ({value, handleInputChange}) => {
    return (
        <>
        <label htmlFor='pin'>Pin (must be 4 digits):</label>
        <input
            id='pin'
            type="number"
            name='pin'
            value={value}
            min={0}
            required
            maxLength={4}
            onChange={handleInputChange}
        />
        </>
    );
};

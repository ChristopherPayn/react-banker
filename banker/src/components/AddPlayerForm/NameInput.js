import React from "react";

export const NameInput = ({value, handleInputChange}) => {
    return (
        <>
        <label htmlFor='name'>Name:</label>
        <input
            id='name'
            type="text"
            name="name"
            value={value}
            required
            onChange={handleInputChange}
            placeholder="Enter your name"
        />
        </>
    );
};

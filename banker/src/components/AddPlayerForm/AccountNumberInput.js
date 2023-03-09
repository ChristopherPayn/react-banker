import React from "react";

export const AccountNumberInput = ({inputRef, value, handleInputChange}) => {
    return (
        <>
        <label
            htmlFor='account-number'>Account number:
        </label>
        <input
            ref={inputRef}
            id='account-number'
            type="text"
            name='accountNumber'
            value={value}
            required
            onChange={handleInputChange}
            onFocus={(e) => e.target.select()}
            placeholder="Enter account number"
        />
        </>
    );
};

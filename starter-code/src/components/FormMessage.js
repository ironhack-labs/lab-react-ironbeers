import React from 'react';

export const FormMessage = ({ message, type }) => {
    return (
        <div className={`p-3 mb-2 text-${type} text-center`}>{message}</div>
    )
}
import React from 'react'

export default function SearchBar({handleChange}) {
    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Search for a beer"/>
        </div>
    )
}

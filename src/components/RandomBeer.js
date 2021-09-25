import React from 'react';
import { Link } from 'react-router-dom';

export default function RandomBeer() {
    return (
        <div>
            <Link to="/">
                <img src="../assets/header.png" width="300px" alt="header banner" />
            </Link>
        </div>
    )
}





// const addRandomContact = () => {
//     let ranCon =  contacts[Math.floor(Math.random()*contacts.length)];
//     if (contactsState.length === contacts.length) {
//       alert('No more contacts available');
//       return;
//     } else if (contactsState.includes(ranCon)) {
//       console.log(ranCon.name + 'is included already. Trying with other...');
//       addRandomContact();
//     } else {
//       setContactsState(contactsState => [ranCon, ...contactsState])
//     }
//   }
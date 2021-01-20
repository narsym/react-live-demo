import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

// const User = ( {match}) => {
//     return <h1> user {match.params.name} page </h1>; 
// }

const User = () => {

    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <h1> user {fname} {lname} page </h1>
            <p> My current location is {location.pathname} </p>
            {location.pathname === '/user/Narasimha/Vennelaganti' ? 
            <button onClick = {() => {history.push('/')}}> HomePage </button>: null
            }
        </>
    ); 
}

export default User
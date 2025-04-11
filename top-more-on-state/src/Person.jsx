import { useState } from 'react'

export function Person() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;

    return (
        <>
            <label htmlFor="fn">First Name: </label>
            <Input id="fn" name={firstName} onChange={(e)=> setFirstName(e.target.value)} /> <br />
            <label htmlFor="ln">Last Name: </label>
            <Input id="ln" name={lastName} onChange={(e)=> setLastName(e.target.value)} />
            <h1>{fullName}</h1>
        </>
    )
}

function Input({name, onChange}) {
    return (
        <>
            <input
                value={name}
                onChange={onChange}
            />
        </>
    )
}
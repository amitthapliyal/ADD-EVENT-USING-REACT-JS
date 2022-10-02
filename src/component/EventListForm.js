import React, { useState } from 'react'
import './EventListForm.css'

export default function EventListForm({addEvent}) {
    const [title, setTitle] = useState(' ')
    const [date, setDate] = useState(' ')

    const handleReset = (e) => {
        setDate('')
        setTitle('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event);
        addEvent(event)
        handleReset();
    }

    return (
        <form className='event-add-form' onSubmit={handleSubmit}>
            <label >
                <span>Event Title</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>
            <label>
                <span>Date :</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            </label>
            <button>Submit</button>
        </form>
    )
}

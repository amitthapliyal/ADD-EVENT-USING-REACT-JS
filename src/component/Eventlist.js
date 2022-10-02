import React from 'react'

import styles from './Eventlist.module.css'
export default function Event({ Event, handleDelete }) {
    return (
        <div>{
            Event.map((event) => {
                return (
                    <div className={styles.card} key={event.id}>
                        <h2>{event.title }-{event.id}</h2>
                        <p>{event.date}</p>
                        <button onClick={() => handleDelete(event.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

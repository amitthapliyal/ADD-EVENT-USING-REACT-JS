import React from 'react'

export default function Title({title, changeColor}) {
    return (
        <div>
            <h2 style={{
                color: 'white',
                backgroundColor: 'blue',
                border: '4px solid',
                borderColor: changeColor ? 'red' : 'yellow'
            }}>
                {title}
            </h2>
        </div>
    )
}

import React from 'react'

export default function Layout(props) {
    return (
        <>
            <div>
                Toolbar, sidedrawer, backdrop 
            </div>
            <main>{props.children}</main>
        </>
    )
}

// Aux components don't use hooks

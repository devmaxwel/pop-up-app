import React from 'react'
import classes from './todo.module.css'

const Backdrop =(props)=> {
    return (
        <div className={classes.backdrop} onClick={props.backdropClick}>
            
           {props.children} 
        </div>
    )
}

export default Backdrop;

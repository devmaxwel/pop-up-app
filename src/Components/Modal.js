import React from 'react';
import classes from './todo.module.css';

function Modal() {
    return (
        <div className={classes.modal}>
           <h3>Are You Sure?</h3> 
           <button className={`${classes.btn} ${classes.btnalt}`}>Cancel</button>
           <button className={classes.btn}>Confirm</button>
        </div>
    )
}

export default Modal;

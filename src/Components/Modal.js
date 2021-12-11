import React from 'react';
import classes from './todo.module.css';

function Modal(props) {
    const cancelHandler=()=>{
        props.onCancel();

    }

    const confirmHandler=()=>{
        props.onConfirm();

    }

    return (
        <>
        <div className={classes.modal}>
           <h3>Are You Sure?</h3> 
           <button onClick={cancelHandler} className={`${classes.btn} ${classes.btnalt}`}>Cancel</button>
           <button onClick={confirmHandler} className={classes.btn}>Confirm</button>
        </div>
         {props.children}
        </>
    )
}

export default Modal;

import React from 'react'
import classes from './todo.module.css';

const  Todo =(props)=>{
    function deleteHandler(){
        
    }
    

    return (
        <>

            <div className={classes.card}>
               
                <h4>{props.text}</h4>
                <di className={classes.actions}>
                    <button className={classes.btn} onClick={deleteHandler}>Delete</button>
                </di>

            </div>
       
        </> 
    )
}

export default Todo;

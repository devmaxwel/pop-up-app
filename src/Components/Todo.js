import React,{useState} from 'react'
import classes from './todo.module.css';
import Modal from './Modal';
import Backdrop from './Backdrop';

const  Todo =(props)=>{
    const [modalOpen, setModalOpen] = useState(false);

    function deleteHandler(){
        setModalOpen(true)
        
    }
    

    return (
        <>

            <div className={classes.card}>
               
                <h4>{props.text}</h4>
                <di className={classes.actions}>
                    <button className={classes.btn} onClick={deleteHandler}>Delete</button>
                </di>

            </div>
            { modalOpen ? <Backdrop /> : null}
            { modalOpen ? <Modal /> : null}
       
        </> 
    )
}

export default Todo;

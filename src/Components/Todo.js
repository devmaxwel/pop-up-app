import React,{useState} from 'react'
import classes from './todo.module.css';
import Modal from './Modal';
import Backdrop from './Backdrop';

const  Todo =(props)=>{
    const [modalOpen, setModalOpen] = useState(false);

    function deleteTodo(){
        setModalOpen(true)
        
    }
    function closeModalPopUp(){
        setModalOpen(false)
    }
    return (
        <>

            <div className={classes.card}>
               
                <h2>{props.text}</h2>
                <di className={classes.actions}>
                    <button className={classes.btn} onClick={deleteTodo}>Delete</button>
                </di>
            
            </div>

            { modalOpen && <Backdrop backdropClick={closeModalPopUp} />}

            { modalOpen && <Modal onCancel={closeModalPopUp} onConfirm={closeModalPopUp}/>}
       
        </> 
    )
}

export default Todo;

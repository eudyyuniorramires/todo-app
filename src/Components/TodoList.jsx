import React, { useState } from 'react';
import'./App.css';
import CreateTask from "../Modal/CreateTask";

const TodoList = () => {

    const [modal, setModal] = useState(false);
    
    const toggle = () =>{
        setModal(!modal);   
    }
    return (

        <>
        <div className='header  text-center'>
             <h1>Lista de tareas</h1>
             <button className='btn btn-primary' onClick={() => setModal(true)}>Crear Tarea</button>
        </div>

        <div className='tarea-container'>

        </div>

        <CreateTask toggle = {toggle } modal ={modal}/>
        </>
        
    );
};

export default TodoList;
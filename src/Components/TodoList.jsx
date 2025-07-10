import React, { useState } from 'react';
import'./App.css';
import CreateTask from "../Modal/CreateTask";

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () =>{
        setModal(!modal);   
    }


    const saveTask = (taskObject) =>{

        let tempList = taskList;
        tempList.push(taskObject);
        setTaskList(tempList);
        setModal(false);


    }
    return (

        <>
        <div className='header  text-center'>
             <h1>Lista de tareas</h1>
             <button className='btn btn-primary' onClick={() => setModal(true)}>Crear Tarea</button>
        </div>

        <div className='tarea-container'>
              {taskList.map((Object) => <li>{Object.Name} </li>)}
        </div>

        <CreateTask toggle = {toggle } modal ={modal} save = {saveTask}/>
        </>
        
    );
};

export default TodoList;
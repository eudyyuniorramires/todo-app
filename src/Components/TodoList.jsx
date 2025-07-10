import React, { useEffect, useState } from 'react';
import'./App.css';
import CreateTask from "../Modal/CreateTask";
import Card from './Card';


const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () =>{
        setModal(!modal);   
    }

       useEffect(()=> {
           
        let arr = localStorage.getItem("taskList")

        if(arr){

            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
       }, [])


    const saveTask = (taskObject) => {
    let tempList = [...taskList]; 
    tempList.push(taskObject);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
    }


    const deleteTask = (index) => {

        let tempList = [...taskList]
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        
    }

    const updateListArray = (obj,index) =>{
        
        let templist = [...taskList]
        templist[index] = obj
        localStorage.setItem("taskList",JSON.stringify(templist))
        setTaskList(templist)
        window.location.reaload()

    }

    return (

        <>
        <div className='header  text-center'>
             <h1>To Do List</h1>
             <button className='btn btn-primary' onClick={() => setModal(true)}>Create Task</button>
        </div>

        <div className='tarea-container'>
            <div className='row'>
               {taskList && taskList.map((obj, index) => (

                <div className='col-3 mb-5' key={index}>
                <Card  taskObject = {obj} index = {index}  deleteTask = {deleteTask} updateListArray = {updateListArray}/>
                </div>

                ))}

               </div>
            </div>

        <CreateTask toggle = {toggle } modal ={modal} save = {saveTask}/>
        </>
        
    );
};

export default TodoList;
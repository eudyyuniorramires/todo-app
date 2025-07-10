import React from 'react';
import {useState}from 'react';
import { Card as ReactstrapCard, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap';
import './App.css';
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";

const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8", "#6f42c1"];

const Card = ({ taskObject, index ,deleteTask,updateListArray}) => {

    const borderTopColor = colors[index % colors.length]
    const [modal, setModal] = useState(false);
    const [completed,setCompleted] = useState(false);


    const updateTask = (obj) =>{
         updateListArray(obj,index)

    }


    const handleDelete = () =>{

        deleteTask(index);

    }


    const taskComplete =() =>{

         setCompleted(!completed);

    }

    return (
        <div className="mb-3">
            <ReactstrapCard 
             className='card-cursor' 
             style={{
             width: '18rem', 
             height:'13rem', 
             margin:'8px' ,
             borderStyle:'solid',
             borderTopColor, 
             borderTopWidth:"4px",
             borderRadius:'10px',
             }}>

                <CardBody style={{margin:'5px'}}>

                    <div className='body-container'>
                        <CardTitle tag="h3" style={ completed ?{textDecoration:'line-through'} : {}}>{taskObject.Name}</CardTitle>
                    </div>

                    <div className='body-container'>
                         <CardText tag="h6" style={completed ? {textDecoration:"line-through"} : {}}>{taskObject.Description}</CardText>
                    </div>
                </CardBody>

                <CardFooter style={{display:"flex",
                    justifyContent:"flex-end",
                    alignItems: "center", 
                    height:'60px ' , 
                    borderTopColor }}>
                    
                    <BsFillTrash3Fill 
                    style={{width:'30px',
                    marginRight: '10px',
                    cursor: 'pointer'}}
                    onClick={handleDelete}/>

                    <BsPencilSquare 
                    style={{width:'30px',
                    marginRight: '10px', 
                    cursor: 'pointer'}}
                   
                    onClick={handleDelete}/>

                    <label
                     style={{marginRight:'7px'}}
                     >Complete</label>

                    <input 
                    type="checkbox" 
                    name={`radio-${index}`} 
                    checked ={completed}
                    onChange={taskComplete}/>

                </CardFooter>
            </ReactstrapCard>

        </div>
    );
};

export default Card;
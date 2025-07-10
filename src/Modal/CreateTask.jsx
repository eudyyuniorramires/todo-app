import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Style/CreateTask.css'
import '../Components/App.css'


const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "taskDescription") {
      setTaskDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = taskDescription;
    save(taskObj);
    setTaskName('');
    setTaskDescription('');
  };

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="ModalHeader" toggle={toggle} close={closeBtn}>
          Create Task
        </ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label id='nombre'>Name</label>
              <input type='text' className='form-control' id='name' value={taskName} onChange={handleChange} name='taskName' />
            </div>
            <div className='form-group mt-3'>
              <label id='descripcion'>Description</label>
              <textarea id='description' className='form-control' type='text' value={taskDescription} onChange={handleChange} name='taskDescription'></textarea>
            </div>
          </form>
          <div className='Estados'></div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Confirmar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
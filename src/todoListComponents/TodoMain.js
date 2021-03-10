import React, { useState, useCallback } from 'react'
import { Row, Col, Input, Button, Alert, Card } from 'reactstrap';
import { immutablePush, quickAdd, removeItemFromArr } from '../utils/utils';
import { TaskItem } from './TaskItem';
import { v4 as uuidv4 } from 'uuid';

export const TodoMain = () => {

const initObject = {
    id:0, 
    content:''
};

const [ TaskWiter, setTaskWiter ] = useState({ newTask:initObject });

const [ TaskList, setTaskList ] = useState([]);

const inputChangeHandler = ({ target }) => 
setTaskWiter({...TaskWiter, 
                [target.name]:{ 
                                id: uuidv4(),
                                content:target.value 
                                }});

const saveTask = () => {
    if ( TaskWiter.newTask.content ) {
        setTaskList( immutablePush( TaskList, TaskWiter.newTask ) );
        setTaskWiter({ newTask:initObject });
    }
};


const editThis = useCallback(
    ( element ) => {
        let tempArr = TaskList.filter( e => e.id !== element.id );
        tempArr.unshift( element );
        setTaskList( tempArr );
    }, 
    [ TaskList ],
);

const deleteThis = useCallback(
    (e) => {
        setTaskList( 
                    ste => ( removeItemFromArr(ste,e) )
                    );  
    },
    [],
);


    return (
    <Card>
        <h2>To Do List</h2>
        <Row>
            <Col md="6" className="offset-md-3 mt-4">
                <Row>
                    <Col md="10">
                        <Input 
                            type="text"
                            name="newTask"
                            onChange= { inputChangeHandler }
                            value={ TaskWiter.newTask.content }
                            onKeyPress={ e => quickAdd( e, saveTask ) }
                            placeholder="Type a task here"
                        />
                    </Col>
                    <Col  md="2">
                        <Button
                            color="info"
                            onClick= { saveTask }
                        >Add</Button>
                    </Col>
                    

                    <Col md="12" className="mt-4">
                        {
                            TaskList.length > 0 ?
                            TaskList.map( e => <TaskItem 
                                                key = { e } 
                                                item = { e } 
                                                editThis = { editThis }
                                                deleteThis = { deleteThis }
                                                
                                                /> ) :
                            <Alert color="info">No Task Selected.</Alert>
                        }
                    </Col>

                    
                </Row>
            </Col>
        </Row>
    </Card>
    )
}

import React, { useState } from 'react';
import { Button, Col, Row, Input, Alert } from 'reactstrap';
import { quickAdd } from '../utils/utils';

export const TaskItem = ( { item, deleteThis, editThis } ) => {

    const [ Editable, setEditable ] = useState( false );

    const [ InputVal, setInputVal ] = useState({
        id: item.id,
        content: item.content 
    } );

    const saveElement = () => {
        setEditable( false );
        editThis( InputVal )
    };

    return (
        <div className="my-3">
            {
                Editable ?
                <Row>
                    <Col md="10">
                        <Input 
                            name="editable"
                            type="text"
                            value = { InputVal.content }
                            onChange = { ( { target } ) => setInputVal( { ...InputVal, content:target.value } ) }
                            onKeyPress={ e => quickAdd( e, saveElement )}
                        />
                    </Col>

                    <Col md="2">
                        <Button
                        color="success"
                            onClick={ saveElement }
                        >Save</Button>
                    </Col>
                </Row>
                :
                <Row>
                    <Col md="8">
                        <Alert color="success" className="my-0">
                            { item.content }
                        </Alert>
                    </Col>
                    <Col md="2">
                        <Button
                        color="warning"
                            onClick= { () => setEditable(true) }
                        >Edit</Button>
                    </Col>
                    <Col md="2">
                        <Button
                        color="danger"
                            onClick={() => deleteThis( item ) }
                        >Delete</Button>
                    </Col>
                </Row>
            }


            
        </div>
    )
}

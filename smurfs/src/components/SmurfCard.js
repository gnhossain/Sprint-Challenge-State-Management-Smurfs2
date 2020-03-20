import React from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

export default function SmurfCard(props){

    console.log(props);
    const smurf = props.smurf;

    return(

        <Card>
            <Card.Content>
                <Card.Header>{smurf.name}</Card.Header>
                <Card.Meta>
                    <span>Age: {smurf.age}</span>
                </Card.Meta>
                <Card.Description>
                    Height: {smurf.height}
                </Card.Description>
            </Card.Content>
        </Card>
    )
 
}
import React from 'react'
import { Card, Icon, Image, Button, Header, Segment } from 'semantic-ui-react'
import TokyoPic from '../images/tokyo.jpg';
import Toronto from '../images/toronto.jpg';
import London from '../images/london.jpg';
import Korea from '../images/korea.jpg';
import Rome from '../images/rome.jpeg';
import Paris from '../images/paris.jpg';
import Amsterdam from '../images/amsterdam.jpg';
import Kyoto from '../images/kyoto.jpg';
import Singapore from '../images/singapore.jpg';

let locationNames = [
    'London', 
    'Toronto', 
    'South Korea', 
    'Rome', 
    'Berlin',
    'Tokyo'
]
    
const VysitorPortal = () => (
    <div style={{margin: '20px'}} class='card'>
        <Segment color='teal' clearing>
            <Header as='h2' textAlign='center'>
                Find Your Destination
            </Header>
        </Segment>
        <Header as='h3'>Popular</Header>
        <Card.Group itemsPerRow={3}>
            <Card color='teal' >
                <Image src={London} wrapped ui={false} size='small' />
                <Card.Content>
                    <div className='ui'>
                        <Button basic color='teal'>
                            Select city
                        </Button>
                    </div>
                    <Card.Header>London</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
                <Image src={Toronto} wrapped ui={false} size='small' />
                <Card.Content>
                    <Card.Header>Toronto</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
            <Image src={Korea} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>South Korea</Card.Header>
                </Card.Content>
            </Card>
        </Card.Group>

        <Header as='h3'>New</Header>
        <Card.Group itemsPerRow={3}>
            <Card color='teal' >
            <Image src={Rome} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>Rome</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
            <Image src={Paris} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>Paris</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
            <Image src={TokyoPic} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>Tokyo</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
            <Image src={Amsterdam} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>Amsterdam</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
            <Image src={Singapore} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>Singapore</Card.Header>
                </Card.Content>
            </Card>

            <Card color='teal' >
            <Image src={Kyoto} wrapped ui={false} size='small'/>
                <Card.Content>
                    <Card.Header>Kyoto</Card.Header>
                </Card.Content>
            </Card>
        </Card.Group>
    </div>
)

export default VysitorPortal 
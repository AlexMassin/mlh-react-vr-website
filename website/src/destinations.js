import React from 'react'
import { Card, Icon, Image, Header, Segment } from 'semantic-ui-react'
import TokyoPic from './images/tokyo.jpg';
import Toronto from './images/toronto.jpg';
import London from './images/london.jpg';
import Korea from './images/korea.jpg';
import Rome from './images/rome.jpeg';
import Berlin from './images/berlin.jpg';

let locationNames = [
    'London', 
    'Toronto', 
    'South Korea', 
    'Rome', 
    'Berlin',
    'Tokyo'
]
    
const VacationImageCard = () => (
    <div>
        <Segment clearing>
            <Header as='h2'>
                Find Your Destination
            </Header>
        </Segment>

        <Header as='h3'>Popular</Header>
        <Card.Group itemsPerRow={3}>
            <Card color='blue' >
                <Image src={London} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>London</Card.Header>
                </Card.Content>
            </Card>

            <Card color='blue' >
                <Image src={Toronto} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Toronto</Card.Header>
                </Card.Content>
            </Card>

            <Card color='blue' >
            <Image src={Korea} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>South Korea</Card.Header>
                </Card.Content>
            </Card>
        </Card.Group>

        <Header as='h3'>New</Header>
        <Card.Group itemsPerRow={3}>
            <Card color='blue' >
                <Image src={Rome} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Rome</Card.Header>
                    </Card.Content>
                </Card>

                <Card color='blue' >
                <Image src={Berlin} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Berlin</Card.Header>
                    </Card.Content>
                </Card>

                <Card color='blue' >
                <Image src={TokyoPic} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Tokyo</Card.Header>
                    </Card.Content>
            </Card>
        </Card.Group>

    </div>


)

export default VacationImageCard 
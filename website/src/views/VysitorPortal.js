import React from 'react'
import { Card, Icon, Statistic, Image, Header, Segment, Button, CardContent } from 'semantic-ui-react'
import TokyoPic from '../images/tokyo.jpg';
import Toronto from '../images/toronto.jpg';
import London from '../images/london.jpg';
import Korea from '../images/korea.jpg';
import Rome from '../images/rome.jpeg';
import Paris from '../images/paris.jpg';

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
        <div style={{textAlign:'center'}}>
            <div style={{display:'inline-flex'}}>
            <div>
            <Header as='h1' color='black' style={{margin: '20px'}}>Trending</Header>
                <Card.Group itemsPerRow={3}>
                    <Card color='teal' style={{width: '374px', height: '431px'}} >
                        <Image src={London} wrapped ui={false} size='small' />
                        <Card.Content style={{opacity: '0.5'}}>
                        <Statistic>
                            <Statistic.Value>London</Statistic.Value>
                            <Statistic.Label>United Kingdom</Statistic.Label>
                        </Statistic>
                        </Card.Content>
                        <Card.Content extra>
                        <Button basic color='grey'>
                            Select City
                        </Button>
                        </Card.Content>
                    </Card>

                    <Card color='teal' style={{width: '374px', height: '431px'}}>
                        <Image src={Toronto} wrapped ui={false} size='small' />
                        <Card.Content style={{opacity: '0.5'}}>
                        <Statistic>
                            <Statistic.Value>Toronto</Statistic.Value>
                            <Statistic.Label>Canada</Statistic.Label>
                        </Statistic>
                        </Card.Content>
                        <Card.Content extra>
                        <Button basic color='grey'>
                            Select City
                        </Button>
                        </Card.Content>

                    </Card>

                    <Card color='teal' style={{width: '374px', height: '431px'}}>
                    <Image src={Korea} wrapped ui={false} size='small'/>
                    <Card.Content style={{opacity: '0.5'}}>
                        <Statistic>
                            <Statistic.Value>Seoul</Statistic.Value>
                            <Statistic.Label>South Korea</Statistic.Label>
                        </Statistic>
                        </Card.Content>
                        <Card.Content extra>
                        <Button basic color='grey'>
                            Select City
                        </Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
                </div>
            </div> 
        </div>
        <div style={{textAlign:'center'}}>
            <div style={{display:'inline-flex'}}>
                <div>
                <Header as='h1' color='black' style={{margin: '20px'}}>New</Header>
                <Card.Group itemsPerRow={3}>
                    <Card color='teal' style={{width: '374px', height: '431px'}}>
                        <Image src={Rome} wrapped ui={false} size='small'/>
                        <Card.Content style={{opacity: '0.5'}}>
                            <Statistic>
                                <Statistic.Value>Rome</Statistic.Value>
                                <Statistic.Label>Italy</Statistic.Label>
                            </Statistic>
                            </Card.Content>
                        <Card.Content extra>
                        <Button basic color='grey'>
                            Select City
                        </Button>
                        </Card.Content>
                        </Card>

                        <Card color='teal' style={{width: '374px', height: '431px'}}>
                        <Image src={Paris} wrapped ui={false} size='small'/>
                        <Card.Content style={{opacity: '0.5'}}>
                        <Statistic>
                            <Statistic.Value>Paris</Statistic.Value>
                            <Statistic.Label>France</Statistic.Label>
                        </Statistic>
                        </Card.Content>
                        <Card.Content extra>
                        <Button basic color='grey'>
                            Select City
                        </Button>
                        </Card.Content>
                        </Card>

                        <Card color='teal' style={{width: '374px', height: '431px'}}>
                        <Image src={TokyoPic} wrapped ui={false} size='small'/>
                        <Card.Content style={{opacity: '0.5'}}>
                        <Statistic>
                            <Statistic.Value>Tokyo</Statistic.Value>
                            <Statistic.Label>Japan</Statistic.Label>
                        </Statistic>
                        </Card.Content>
                        <Card.Content extra>
                        <Button basic color='grey'>
                            Select City
                        </Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
                </div>
            </div>
        </div>
    </div>


)

export default VysitorPortal 
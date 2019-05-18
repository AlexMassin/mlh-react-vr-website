import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"
import { compose, withProps, lifecycle } from 'recompose'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    center={{ lat: props.lat, lng: props.long }}
  > 
    {console.log(props)}
    {props.isMarkerShown && <Marker directions = {props.directions} position={{ lat: props.lat, lng: props.long }} />}
  </GoogleMap>
))

  
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCnT-HMSk3ssOWuSkXdpMhy-3NCga39wFM'
  });

const styles = {
    card: {
        margin: '14px',
        width: '210px'
    },
    paginator: {
        marginTop: '24px',
        marginLeft: '20%'
    }
}


class TravellerDashboard extends Component{
    state = {lat: 0.0, long: 0.0}
    sendRoute = (l, lo) => {
        this.setState({lat: l, long: lo}, () => {console.log(this.state)});
    }

    getDirections = () => {
        const DirectionsService = new googleMapsClient.maps.DirectionsService();
    }

    render() {
        return(
            <div>
                <head>
                <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnT-HMSk3ssOWuSkXdpMhy-3NCga39wFM&callback=initMap"
    type="text/javascript"></script>
                </head>
                <Header style={{margin: '30px', fontSize: '48px'}} color='teal' textAlign='center'>Traveller Dashboard</Header>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card.Group>
                            <Card style={styles.card}>
                            <Card.Content>
                                <Card.Header>Matthew Harris</Card.Header>
                                <Card.Meta>Co-Worker</Card.Meta>
                                <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                            </Card.Content>
                            </Card>

                            <Card style={styles.card} onClick={() => {this.sendRoute( -34.397, 150.644 )}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>

                            <Card style={styles.card} onClick={() => {this.sendRoute(12.1, -122.1212)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(1.1, 12.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            <Card style={styles.card} onClick={() => {this.sendRoute(120.1, 120.4)}}>
                            <Card.Content
                                header='Elliot Baker'
                                meta='Friend'
                                description='Elliot is a music producer living in Chicago.'
                            />
                            </Card>
                            
                        </Card.Group>
                        <Pagination style={styles.paginator} defaultActivePage={1} totalPages={10} />
                    </Grid.Column>
                    <Grid.Column>
                    <MyMapComponent
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnT-HMSk3ssOWuSkXdpMhy-3NCga39wFM&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `600px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                lat = {this.state.lat}
                                long = {this.state.long}
                                directions = {this.state.getDirections}
                                />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default TravellerDashboard


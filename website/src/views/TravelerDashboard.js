import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"
import { compose, withProps, lifecycle } from 'recompose'
import { geolocated } from "react-geolocated";
import alexPic from '../images/alex.jpeg';
import shayanaPic from '../images/shyana.jpeg';
import julisaPic from '../images/julisa.png';
import edPic from '../images/ed.png';
import ethanPic from '../images/ethan.jpeg';
import gomesPic from '../images/alexgomes.jpeg';

/*global google*/

  
const styles = {
    card: {
        margin: '14px',
        width: '210px'
    },
    paginator: {
        marginTop: '24px',
        marginLeft: '15%'
    }
}


const MapWithADirectionsRenderer = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      zoom={props.zoom}
      center={new google.maps.LatLng(props.latO, props.longO)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  ));


class TravelerDashboard extends Component{
    state = {latD: 0, longD:0, directions:null}
    
    sendRoute = (ltD, lngD) => {
        this.setState({latD:ltD, longD:lngD}, () => this.getDirection())
    }

    getDirection = () => {
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
          origin: new google.maps.LatLng(this.props.coords.latitude, this.props.coords.longitude),
          destination: new google.maps.LatLng(this.state.latD,  this.state.longD),
          travelMode: google.maps.TravelMode.WALKING,
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
                <Header style={{margin: '30px', fontSize: '48px'}} color='teal' textAlign='center'>Traveler Dashboard</Header>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                    <Header style={{margin: '30px', fontSize: '24px'}} color='grey' textAlign='center'>Requests</Header>
                        <Card.Group>
                            <Card style={styles.card}>
                            <Card.Content onClick={() => {this.sendRoute(43.678062,-79.409437)}}>
                                <Image floated='right' size='mini' src={alexPic} />
                                <Card.Header>Alexander Massin</Card.Header>
                                <Card.Meta>Vysitor from London</Card.Meta>
                                <Card.Description>
                                 I've been wanting to visit Toronto forever! I know they have so many famous landmarks, but I want to explore Casa Loma the most. 
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Route render={({history}) => (
                                <Button basic color='green' onClick={() => {history.push('/camera-setup')}}>
                                    Approve
                                </Button>)} />
                                <Button basic color='red'>
                                    Decline
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content onClick={() => {this.sendRoute(43.767187,-79.292563)}}>
                                <Image floated='right' size='mini' src={shayanaPic} />
                                <Card.Header>Shyana Srikanthalingam</Card.Header>
                                <Card.Meta>Vysitor from Sri Lanka</Card.Meta>
                                <Card.Description>
                                 Toronto has always fascinated me, and I since marrying a torontonian, I would love to explore the BAPS Shri Swaminarayan Mandir
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content onClick={() => {this.sendRoute(43.653563,-79.392563)}}>
                                <Image floated='right' size='mini' src={julisaPic} />
                                <Card.Header>Julisa Blaszkow</Card.Header>
                                <Card.Meta>Vysitor from Poland</Card.Meta>
                                <Card.Description>
                                 I'm visiting somewhere else in the province, and won't have the time to stop by Toronto, but as a lover of art I've always wanted to visit the AGO
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content onClick={() => {this.sendRoute(43.678062,-79.345562)}}>
                                <Image floated='right' size='mini' src={edPic} />
                                <Card.Header>Edwardo Rodriguez</Card.Header>
                                <Card.Meta>Vysitor from Italy</Card.Meta>
                                <Card.Description>
                                 I heard Toronto has a really vibrant cultural scene, and I would love a tour of Greektown!
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content onClick={() => {this.sendRoute(43.736937,-79.371063)}}>
                                <Image floated='right' size='mini' src={ethanPic} />
                                <Card.Header>Ethan Lac</Card.Header>
                                <Card.Meta>Vysitor from Hong Kong</Card.Meta>
                                <Card.Description>
                                 I'll soon be moving to Toronto and would love a tour of the Bridal Path to see if it would be a suitable neighbourhood for my family. 
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                            <Card style={styles.card}>
                            <Card.Content onClick={() => {this.sendRoute(43.637562,-79.388438)}}>
                                <Image floated='right' size='mini' src={gomesPic} />
                                <Card.Header>Alex Gomes</Card.Header>
                                <Card.Meta>Vysitor from Bangledesh</Card.Meta>
                                <Card.Description>
                                 I've heard Canada is a great Country and I would love to visit Toronto's famous waterfront and islands!
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                                </div>
                            </Card.Content>
                            </Card>
                        </Card.Group>
                        <Pagination style={styles.paginator} defaultActivePage={1} totalPages={10} />
                    </Grid.Column>
                    <Grid.Column>
                        <MapWithADirectionsRenderer
                             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnT-HMSk3ssOWuSkXdpMhy-3NCga39wFM&v=3.exp&libraries=geometry,drawing,places"
                             loadingElement={<div style={{ height: `100%` }} />}
                             containerElement={<div style={{ height: `650px` }} />}
                             mapElement={<div style={{ height: `100%` }} />}
                             latO={this.props.coords.latitude}
                             longO={this.props.coords.longitude}
                             directions={this.state.directions}
                             zoom={8}
                        />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}


export default geolocated({
positionOptions: {
enableHighAccuracy: true,
},
userDecisionTimeout: 5000,
})(TravelerDashboard);



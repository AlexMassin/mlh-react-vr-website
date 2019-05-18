import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"
import { compose, withProps, lifecycle } from 'recompose'
/*global google*/

  
const styles = {
    card: {
        margin: '20px',
        width: '210px'
    },
    paginator: {
        marginTop: '24px',
        marginLeft: '20%'
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


class TravellerDashboard extends Component{
    state = {latO:0, longO: 0, latD: 0, longD:0, directions:null}
    
    sendRoute = (ltO, lngO, ltD, lngD) => {
        this.setState({latO:ltO, longO:lngO, latD:ltD, longD:lngD}, () => this.getDirection())
    }

    getDirection = () => {
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
          origin: new google.maps.LatLng(this.state.latO, this.state.longO),
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
        return(
            <div>
                <Header style={{margin: '30px', fontSize: '48px'}} color='teal' textAlign='center'>Traveller Dashboard</Header>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                    <Header style={{margin: '30px', fontSize: '24px'}} color='grey' textAlign='center'>Requests</Header>
                        <Card.Group>
                            <Card style={styles.card} onClick={() => {this.sendRoute(41.8507300,  -87.6512600, 41.8525800, -87.6514100)}}>
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
                        <MapWithADirectionsRenderer
                             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnT-HMSk3ssOWuSkXdpMhy-3NCga39wFM&v=3.exp&libraries=geometry,drawing,places"
                             loadingElement={<div style={{ height: `100%` }} />}
                             containerElement={<div style={{ height: `650px` }} />}
                             mapElement={<div style={{ height: `100%` }} />}
                             latO={this.state.latO}
                             longO={this.state.longO}
                             directions={this.state.directions}
                             zoom={Boolean(this.state.directions) ? 8 : 2}
                        />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default TravellerDashboard


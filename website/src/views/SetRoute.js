import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"
import { compose, withProps, lifecycle } from 'recompose'
import { geolocated } from "react-geolocated";

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


class TravellerDashboard extends Component{
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
                <Header style={{margin: '30px', fontSize: '48px'}} color='teal' textAlign='center'>Traveller Dashboard</Header>
                <Grid divided='vertically'>
                    <Grid.Row>
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
})(TravellerDashboard);



import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"
import { compose, withProps, lifecycle } from 'recompose'

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
      <Marker position={{ lat: props.latO, lng: props.longO}} draggable={true} ref={props.onMarkerMounted} onDragend={(t, map, coord) => props.onMarkerDragEnd(coord, "first")}
 />    
      <Marker position={{ lat: props.latD, lng: props.longD}} draggable={true} ref={props.onMarkerMounted} onDragend={(t, map, coord) => props.onMarkerDragEnd(coord, "second")}
 />    

      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  ));


class SetRoute extends Component{
    state = {latO: 0, longO: 0, latD: 0, longD:0, directions:null}
    
    onMarkerDragEnd = (coord, name) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        if(name == "first"){
            this.setState({latO:lat, longO:lng})
        } else {
            this.setState({latD:lat, longD:lng})

        }
        console.log(this.state)
    }

    sendRoute = (ltD, lngD) => {
        this.setState({latD:ltD, longD:lngD}, () => this.getDirection())
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
        return (
            <div>
                <Header style={{margin: '30px', fontSize: '48px'}} color='teal' textAlign='center'>Set Route for Traveler</Header>
                <Header style={{margin: '30px', fontSize: '24px'}} color='grey' textAlign='center'>Drag the two markers to the desired locations</Header>
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column>
                            <MapWithADirectionsRenderer
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnT-HMSk3ssOWuSkXdpMhy-3NCga39wFM&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `650px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                latO={this.state.latO}
                                longO={this.state.longO}
                                latD={this.state.latD}
                                longD={this.state.longD}
                                directions={this.state.directions}
                                zoom={Boolean(this.state.latO == 0 && this.state.longO == 0) ? 2 : 8}
                                onMarkerDragEnd = {this.onMarkerDragEnd}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Route render={({history}) => (<Button onClick={() => {history.push('/find')}} attached='bottom' color='green'>Set & Continue</Button>)} />
            </div>
        )
    }
}


export default SetRoute



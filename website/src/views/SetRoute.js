import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps"
import { compose, withStateHandlers, withProps, lifecycle } from 'recompose'
import {key} from '../key.json';

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


const MapWithADirectionsRenderer = compose(
    withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        })
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            defaultZoom={props.zoom}
            defaultCenter={{ lat: props.latO, lng: props.longO }}
            onClick={props.onMapClick}
        >
            {props.isMarkerShown && <Marker position={props.markerPosition} />}

        </GoogleMap>
    );
    


class SetRoute extends Component{
    state = {latO: 43.678062, longO: -79.345562, latD: 0, longD:0, directions:null}
    
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
                                googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+key+"&v=3.exp&libraries=geometry,drawing,places"}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `650px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                latO={this.state.latO}
                                longO={this.state.longO}
                                zoom={8}
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



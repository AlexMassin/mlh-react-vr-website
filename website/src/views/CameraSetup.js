import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ReactPlayer from 'react-player'
class CameraSetup extends Component{
    render() {
        return(
            <div>
                <div style={{textAlign: 'center'}}><Header style={{display: 'inline-block'}} color = 'teal' textAlign='center' style={{marginTop: '30px', display: 'inline-block', fontSize: '50px'}}>Setup your Camera Before you Continue</Header><Icon style={{display: 'inline-block', margin: '10px', marginTop: '-10px'}} color='teal' size='large' inverted circular name='video camera' /></div>
                <div style={{textAlign: 'center'}}>
                    <ReactPlayer style={{display: 'inline-flex'}} width='1200px' height='700px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                </div>
                <Button>Continue</Button>
            </div>
        )
    }
}

export default CameraSetup
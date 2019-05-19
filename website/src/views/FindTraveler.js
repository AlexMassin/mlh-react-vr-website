import React, { Component } from 'react'
import { Button, Form, Grid, Header, Placeholder, Image, Card, Segment, Tab, Icon, Pagination } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ReactPlayer from 'react-player'
import './CameraSetup.css';
class FindTraveler extends Component{
    render() {
        return(
            <div>
                <div style={{textAlign: 'center'}}>
                    {//<ReactPlayer style={{display: 'inline-flex'}} width='1200px' height='700px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />}
                    }
                    <div style={{textAlign: 'center'}}>
                        <Header color = 'green' textAlign='center' style={{marginTop: '15%', display: 'inline-block', fontSize: '35px'}}>
                            Finding your traveler now...
                        </Header>
                        <div class='loading'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindTraveler
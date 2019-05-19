import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Tab, Icon } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

var styles = {
    loginForm: {
        height: '100%'
    },
    loginHeader: {
        marginBottom: '10px'
    }
}

const panes = [
    { menuItem: 'Buyer', render: () => 
    <Tab.Pane attached={false}>
        <Icon circular inverted color='teal' name='globe' />
        <Header style={{marginTop: '10px'}} as='h2' color='teal' textAlign='center'>Log-in as Vysitor</Header>
    </Tab.Pane> },
    { menuItem: 'Seller', render: () => 
    <Tab.Pane attached={false}>
        <Icon circular inverted color='teal' name='users' />
        <Header  style={{marginTop: '10px'}} as='h2' color='teal' textAlign='center'>Log-in as Traveler</Header>
    </Tab.Pane> },
  ]
  

class Login extends Component{
    state = { activeIndex: 0 }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

    getNewRoute = (history) =>{ 
        if (this.state.activeIndex === 0){
            history.push('/vysitor-destinations')
        }
        if(this.state.activeIndex === 1){
            history.push('/Traveler-dashboard')
        }
    }

    render() {
        const { activeIndex } = this.state
        return(
            <div style={styles.loginForm}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, marginTop:  '10%'}}>
                    <Tab style={styles.loginHeader} activeIndex={activeIndex} onTabChange={this.handleTabChange} menu={{ secondary: true, pointing: true}} panes={panes}/>
                    <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        />
                        <Route render={({history}) => (
                            <Button onClick={() => {this.getNewRoute(history)}} animated color='teal' fluid>
                            <Button.Content visible>Login</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                        )} />
                    </Segment>
                    </Form>
                    <Message>
                    New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
                </Grid>
            </div> 
        )
    }
}

export default Login

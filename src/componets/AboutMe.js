import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardText, CardMenu } from 'react-mdl';

class AboutMe extends Component {
  render() {
    return (
      <Card shadow={0} style={{ width: '512px', margin: 'auto', marginTop: '20px' }}>
        <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://i1.sndcdn.com/avatars-000616825032-xj10lk-t500x500.jpg) center / cover' }}>Bryan Guilas</CardTitle>
        <CardText>
          Hi there! my name is Bryan Guilas am currently enrolled at the UC Berkeley Extension Coding Boot Camp.
          I will be graduating in January of 2021 and I hope to use my new skills
          to become a Web Developer. I consider himself a "forever student" and
          I am eager to build my academic foundations in computer programming and
          stay in tune with the fast pace evolution of the tech industry. I enjoy
          reading anything that keeps me curious, a good cup of coffee, I am an
          avid cyclist and of course I love to code! I thrive in a team environment
          and I have a team-oriented personality. I am fueled by my passion and I
          am extremply inspired to be the best I can be.
      </CardText>
        <CardActions border>
          <Button colored>Get Started</Button>
        </CardActions>
      </Card>
    );
  }
}

export default AboutMe;
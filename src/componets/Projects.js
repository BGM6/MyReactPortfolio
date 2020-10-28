import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardText, CardMenu } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{
            color: '#fff',
            height: '176px',
            background: `url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&w=1000&q=80) center / cover`
          }} ></CardTitle>
          <CardText>
            Search for recipes and the drinks to go alongside your meal with The Home Chef.
          </CardText>
          <CardActions border>

            <a href="https://github.com/huqian301/project-api"
              target="_blank">
              <Button colored style={{ marginLeft: '25px' }}>Github</Button>
            </a>
            <a href="https://huqian301.github.io/project-api/"
              target="_blank">
              <Button colored style={{ marginLeft: '75px' }}>Live Demo</Button></a>

          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg) center / cover' }}></CardTitle>
          <CardText>
            Movie information at a click of a button using the OMDB API.
        </CardText>
          <CardActions border>
            <a href="https://github.com/BGM6/movieFinderApp"
              target="_blank">
              <Button colored style={{ marginLeft: '25px' }}>Github</Button>
            </a>
            <a href="https://bgm6.github.io/movieFinderApp/"
              target="_blank">
              <Button colored style={{ marginLeft: '75px' }}>Live Demo</Button></a>

          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card >
      );
    }
    else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.connectionsacademy.com/wp-content/uploads/note-taking-1.jpg) center / cover' }}></CardTitle>
          <CardText>
            A simple web app to take your notes.
        </CardText>
          <CardActions border>
            <a href="https://github.com/BGM6/noteTaker"
              target="_blank">
              <Button colored style={{ marginLeft: '25px' }}>Github</Button>
            </a>
            <a href="https://notetakerexercise.herokuapp.com/"
              target="_blank">
              <Button colored style={{ marginLeft: '75px' }}>Live Demo</Button></a>

          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
  }



  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>The Home Chef</Tab>
          <Tab>Movie Info Finder</Tab>
          <Tab>My Note Taker</Tab>
          <Tab>Project 2 Coming Soon</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid ClassName="project-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

        </section>
      </div>
    );
  }
}

export default Projects;
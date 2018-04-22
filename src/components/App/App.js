import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Add from '../Add/Add.js'
import Reflections from '../Reflections/Reflections'
import { Jumbotron, Grid, Row, Col, Image, Button, Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap'


// import Navbar from '../Nav/CustomNavbar.js'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Oh, the places you've been</h1>
          <h4><i>Reflection Board</i></h4>
        </header>
        

        <Router>
            <div>

                <Navbar default collapseOnSelect>
                  <Navbar.Collapse>
                    <Nav>
                      <NavItem eventKey={1} to="/">
                        <Button><Link to="/">View Reflections</Link></Button>
                      </NavItem>
                      <NavItem eventKey={2} to="/add">
                        <Button><Link to="/add">Add</Link></Button>
                      </NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>

              <Route path="/add" component={Add}/>
              <Route exact path="/" component={Reflections}/>
            </div>
          </Router>

      </div>
    );
  }
}

export default App;

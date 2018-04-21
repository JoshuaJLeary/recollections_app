import React, { Component } from 'react';
import axios from 'axios';
import './Reflections.css'
// import Card, { CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button'; 
import ReflectionsCard from './ReflectionsCard/ReflectionsCard'

class Reflections extends Component {
  constructor(props) {
    super(props) 

    this.state = ({
      reflections: []
    })
  }


//Axios GET for reflections from db
  getReflections = () => {
    console.log('in GET /api/reflections');
    axios.get('/api/reflections')
    .then((response) => {
      console.log('GET response: ', response);
      this.setState({
        reflections: response.data
      })
    })
    .catch((error) => {
      console.log('error in GET /api/reflections', error);
    })
  }

  deleteReflection = (id) => {
    console.log('reached deleteReflection, id: ', id);
    axios.delete('/api/reflections/' + id)
    .then((response) => {
      console.log('sucessful DELETE /api/reflections');
      this.getReflections(); 
    })
    .catch((error) => {
      console.log('error in DELETE /api/reflections', error);
    })
    
  }

  componentDidMount() {
    this.getReflections();
  }

  render() {

    let reflectionsArray = this.state.reflections.map((reflection) => {
      return <ReflectionsCard key={reflection.id}
                              reflection={reflection}
                              deleteReflection={this.deleteReflection}/>
    })


    return (
      <div className="container">
        <h1>Reflections VIEW</h1>
        
        {reflectionsArray}


      </div>
    );
  }
}

export default Reflections;

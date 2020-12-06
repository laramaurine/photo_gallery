import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
  state = {
    galleryItems: []
  }

  componentDidMount(){
    this.getGallery();
  }
  
  getGallery = () => {
    axios.get('/gallery')
      .then( ( response )  => {
        //console.log('response', response.data);
        this.setState({
          galleryItems: response.data,
        })
      })
      .catch( (error) => {
        console.log('error in getGallery', error);
        alert('error in getGaller, stay tuned for details')
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList 
        listOfPics={this.state.galleryItems}
        getGallery={this.getGallery}/>
        
      </div>
    );
  }
}

export default App;

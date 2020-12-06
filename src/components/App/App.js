import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
 
state = {
  galleryItems: []
}



componentDidMount() {
this.getGallery();
}

getGallery = () => {
axios({
  method: 'GET',
  url: '/gallery',
})
.then((response) => {
  this.setState({
  galleryItems: response.data,
});
})
.catch((error) => {
console.log('Error in getGallery', error);
alert('Error in getGallery');
});
};
render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of my life</h1>
      </header>
      <br />
      <p></p>
      <GalleryList
        listOfPics={this.state.galleryItems}
        getGallery={this.getGallery}/>
    </div>
  );
}
}

export default App;

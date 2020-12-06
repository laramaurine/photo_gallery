import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
 
    render(){
        return(
            <>
            <p>Just a small town girl</p>
            <p>Livin in a lonely world</p>
            <p>I like pandas, fashion, baking,</p>
            <p>adn the Oxford comma</p>
            {this.props.listOfPics.map( (pic)=>{
                return(
                    <GalleryItem key={pic.id}pic={pic}
                    getGallery={this.props.getGallery} />
            
                )
            })}
            </>
        )
    }
}
    
export default GalleryList;
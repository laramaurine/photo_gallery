import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    state = {
        desc: false,
    };
        showDescription = () => {
        this.setState({
        desc: !this.state.desc,
        });
        };
        
        likePic = () => (event) => {
            axios({
                method: 'PUT',
                url: 'gallery/like/' + this.props.pic.id,
        })
        .then((response) => {
       
            this.props.getGallery();
        })
        .catch((error) => {
            console.log('error in itemjs like', error);
            alert('error in likes no one likes');
        });
        }
    
    render(){
        return(
            <>
            {this.state.desc ? 
              <div onClick={this.showDescription}><h4>{this.props.pic.description}</h4></div> 
            : <div onClick={this.showDescription}><img src={this.props.pic.path}/></div>}

            <div className="divdisplay">
            
            <button onClick={this.likePic(this.props.pic.id)}>Like</button>
            
            <p>{this.props.pic.likes} likes</p>
            
            </div>
            </>
        )
    }
}

export default GalleryItem;
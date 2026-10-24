
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRating: 0,
    
        handleLikes: () => {
            this.setState((previousState) =>({
                likes: previousState.likes + 1,
                totalRating: previousState.totalRating + 1
            }))
        },
        handleDislikes: () => {
            this.setState(
                (previousState) => (
                    {dislikes: previousState.dislikes + 1,
                        totalRating: previousState.totalRating + 1}
                )
            )
        }
    
    };
    
  }
  render() {
    return (
     <>
     <div className="content-rating">
        <p>Total Rating {this.state.totalRating}</p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLikes}> Like {this.state.likes}</button>
            <button className='dislike-button' onClick={this.state.handleDislikes}>Dislike {this.state.dislikes}</button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;

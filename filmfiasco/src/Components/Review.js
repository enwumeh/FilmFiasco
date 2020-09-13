import React, { Component } from 'react'

class Review extends Component {
  constructor(props) {
    super() 
  }
  


  render() {

    const {reviews, title, rating, review, postData} = this.props

    return (
      <div>
        
        {reviews.map((review, index) => {
          return (
            <>
              <div className="reviews">
                <h6>
                  {" "}
                = {review.fields.title}: {review.fields.review}{" "}
                  {review.fields.rating}
                </h6>
              </div>

            </>
          )
          })}  

              <h2>Post your Own Movie!</h2>
              <div className="userMovie">
                <label htmlFor="title">Movie Title</label>
                <input
                  type="text"
                  id="title"
                  onSubmit={(e) => this.state.title(e.target.value)}
                />
              </div>
                  
              <div className="userMovie">

                <label htmlFor="title">How would You Rate this movie?</label>
                <input
                  type="text"
                  id="rating"
                  onSubmit={(e) => this.state.rating(e.target.value)}
                />
              </div>
                  
              <div className="userMovie">
                <label htmlFor="text">Review this Movie</label>
                <input
                  type="text"
                  id="review"
                  onSubmit={(e) => this.state.review(e.target.value)}
                />
              </div>
              <button onClick={() => this.postData(title, rating, review)}>
                Post
              </button>
    </div>
    )
  }
}
export default Review

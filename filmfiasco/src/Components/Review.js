import React, { Component } from "react";

class Review extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { reviews, title, rating, review, postData } = this.props;

    return (
      <div>
        <div className="reviews">The Creator's Faves</div>
        {reviews.map((review, index) => {
          return (
            <>
              <div className="review-map">
                <br></br>
                <br></br>
                <br></br>
                {/* <h6> */}
                <div>{review.fields.title}</div>
                <div>{review.fields.review}</div>
                <div>{review.fields.rating}</div>
                {/* </h6> */}
              </div>
            </>
          );
        })}

        <h2>Post your Own Movie!</h2>
        <form>
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
          <button onClick={() => postData(title, rating, review)}>Post</button>
          </form>
      </div>
    );
  }
}
export default Review;

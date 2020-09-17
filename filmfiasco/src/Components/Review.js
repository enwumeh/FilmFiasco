import React, { Component } from "react";

class Review extends Component {
  render() {
    const { reviews, title, review, postData, handleChange } = this.props;

    return (
      <div>
        <div className="reviews">The Creator's Faves</div>
        {reviews.map((r, index) => {
          return (
            //getting review fields objects. React.Fragment needed to render multiple elements
            <React.Fragment key={index}>
              <div className="review-map">
                <br></br>
                <br></br>
                <br></br>
                <div>{r.fields.title}</div>
                <div>{r.fields.review}</div>
              </div>
            </React.Fragment>
          );
        })}

        <h2>Post your Own Movie!</h2>
        {/* form for user review input. using POST  */}
        <form className="form" onSubmit={(e) => postData(e)}>
          <div className="userMovie">
            <label htmlFor="title">Movie Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="userMovie">
            <label htmlFor="review">Review this Movie</label>
            <input
              type="text"
              name="review"
              value={review}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="post" />
        </form>
      </div>
    );
  }
}
export default Review;

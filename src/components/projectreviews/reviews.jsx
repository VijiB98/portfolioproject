/** @format */
import React from "react";
import reviewimg from "../../assets/images/review.jpeg";
import rating from "../../assets/images/rating.png";
import "./reviews.css";
const Review = () => {
  const Reviewlist = [
    {
      Icon: reviewimg,
      Bio: "Understanding the components of a projects review and ways to organize one could help you or your company with this process.In article we explore what a project reviews is why it's imporntant for tracking a business sucess",
      Image: rating,
    },
    {
      Icon: reviewimg,
      Bio: "Understanding the components of a projects review and ways to organize one could help you or your company with this process.In article we explore what a project reviews is why it's imporntant for tracking a business sucess",
      Image: rating,
    },
    {
      Icon: reviewimg,
      Bio: "Understanding the components of a projects review and ways to organize one could help you or your company with this process.In article we explore what a project reviews is why it's imporntant for tracking a business sucess",
      Image: rating,
    },
    {
      Icon: reviewimg,
      Bio: "Understanding the components of a projects review and ways to organize one could help you or your company with this process.In article we explore what a project reviews is why it's imporntant for tracking a business sucess",
      Image: rating,
    },
    {
      Icon: reviewimg,
      Bio: "Understanding the components of a projects review and ways to organize one could help you or your company with this process.In article we explore what a project reviews is why it's imporntant for tracking a business sucess",
      Image: rating,
    },
    {
      Icon: reviewimg,
      Bio: "Understanding the components of a projects review and ways to organize one could help you or your company with this process.In article we explore what a project reviews is why it's imporntant for tracking a business sucess",
      Image: rating,
    },
  ];
  const Renderreview = Reviewlist.map((reviewtype) => {
    return (
      <div className="hero_review">
        <img src={reviewimg} alt="" />
        <p>{reviewtype.Bio}</p>
        <img src={rating} alt="" />
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="review_cards">
        <h1>REVIEWS</h1>
        <div className="review_herocards">{Renderreview}</div>
      </div>
    </React.Fragment>
  );
};
export default Review;

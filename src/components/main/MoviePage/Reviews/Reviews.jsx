import Review from "./Review/Review";
import * as constants from "../../../../constants";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Reviews(props) {
  const reviews = props.reviews;
  const [numOfReviews, setNumOfReviews] = useState(props.reviews.length);
  const [numOfReviewsToShow, setNumOfReviewsToShow] = useState(3);
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="text-gray-500 flex flex-col my-6">
      <div className="mt-2">
        <h3 className="text-white font-bold font-lato text-lg mb-2">Reviews</h3>
        <div className="relative">
          <div className="absolute bg-black inset-0 blur-sm rounded-md"></div>
          <ul className="relative rounded-lg bg-neutral-900">
            {reviews.map((review, i) => {
              if (i < numOfReviewsToShow) {
                let avatarPath = "";
                let hasAvatar = false;
                if (review.author_details.avatar_path) {
                  avatarPath = review.author_details.avatar_path.substring(1);
                  if (!avatarPath.includes("https")) {
                    avatarPath = `${constants.IMAGES_BASE_PATH}original/${avatarPath}`;
                  }
                  hasAvatar = true;
                }
                return (
                  <li className="odd:bg-slate-1000 rounded-lg">
                    <Review
                      key={i}
                      author={review.author}
                      avatarPath={avatarPath}
                      content={review.content}
                      rating={review.author_details.rating}
                      createdAt={review.created_at.slice(0, 10)}
                      url={review.url}
                      hasAvatar={hasAvatar}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center text-sm self-end text-secondary mt-2 mb-2">
        <Link to={`/reviews/${props.movieId}`}>
          <button className=" font-bold  py-1 px-2 rounded-md">
            Show all reviews
          </button>
        </Link>
      </div>
    </div>
  );
}

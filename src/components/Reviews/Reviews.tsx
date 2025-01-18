import React from 'react';

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <h3>{review.author}</h3>
            <div className="rating">{'★'.repeat(review.rating)}</div>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails, fetchProductReviews } from '../services/api';
import Reviews from '../components/Reviews/Reviews';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = React.useState<any>(null);
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productData = await fetchProductDetails(productId);
        const reviewsData = await fetchProductReviews(productId);
        setProduct(productData);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <h2>Customer Reviews</h2>
      <Reviews reviews={reviews} />
      {/* Add personalized recommendations component here */}
    </div>
  );
};

export default ProductDetail;
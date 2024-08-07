import { useState, useEffect } from "react";
import api from "../service/api";
import { Link, useParams } from "react-router-dom";
import { CommentForm } from "./CommentForm";

export function RestaurantDetail() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await api.get(`/restaurants/${id}/`);
                setRestaurant(response.data);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };

        fetchRestaurant();
    }, [id]);

    const handleCommentAdded = (newComment) => {
        setRestaurant((prevRestaurant) => ({
            ...prevRestaurant,
            comments: [...prevRestaurant.comments, newComment],
        }));
    };

    if (!restaurant) {
        return <div className="container mt-4">Loading...</div>;
    }

    return (
        <div className="container mt-4 border p-2">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <img
                src={restaurant.image}
                alt={restaurant.name}
                className="img-fluid"
            />
            <p>{restaurant.rating}</p>
            <h3>Comments:</h3>
            <ul className="list-group">
                {restaurant.comments.map(comment => (
                    <li key={comment.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <strong>{comment.name}:</strong> {comment.description}
                        </span>
                    </li>
                ))}
            </ul>

            <CommentForm restaurantId={restaurant.id} onCommentAdded={handleCommentAdded} />
            <Link to={`/edit-restaurants/${restaurant.id}/`} className="btn btn-primary mt-4">
                Edit Restaurant
            </Link>
        </div>
    );
}

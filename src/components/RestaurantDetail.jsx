import { useState, useEffect } from "react";
import api from "../service/api";
import { useParams } from "react-router-dom";

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

    if (!restaurant) {
        return <div className="container mt-4">Loading...</div>;
    }

    return (
        <div className="container mt-4 border p-2">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
                <img
                    src={restaurant.image}
                    alt=''
                    className="img-fluid"
                />
            <h3 className="mt-4">Comments</h3>
        </div>
    );
}

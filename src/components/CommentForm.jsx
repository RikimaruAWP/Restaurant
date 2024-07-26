import { useState, useEffect } from "react";
import api from "../service/api";
import { useParams } from "react-router-dom";

export function CommentForm() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState([])
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState([])

    const fetchRestaurant = async () => {
        try {
            const response = await api.get(`/restaurants/${id}`);
            setRestaurant(response.data);
        } catch (error) {
            console.log(error, error.message);
        }
    }

    const fetchComments = async () => {
        try {
            const response = await api.get('/comments/');
            setComment(response.data);
        }catch(error){
            console.log(error, error.message);
        }
    }

    useEffect(() =>{
        fetchRestaurant()
    }, [id]);

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log('Se previno la accion por defecto');

        console.log(id, restaurant, name, description, rating);
        const comment = new FormData();
        comment.append('restaurant', restaurant.id)
        comment.append('name',name);
        comment.append('description',description);
        comment.append('rating',rating);

        try {
            await api.post(`/comments/`, comment, {
                headers: {
                    'Content-Type':'application/json'
                }
            }, fetchComments());
            alert('Restaurante editado')
        } catch (error) {
            console.log(error, error.message);
        }
    };

    return (
        <form className="container mt-4" onSubmit={handleSubmit}>
            <h3>Add a Comment</h3>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input 
                type="text" 
                    className="form-control"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} 
                    required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea 
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                required></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Rating:</label>
                <input 
                type="number" 
                min="1" max="5" 
                className="form-control"
                value={rating} 
                onChange={(e)=> setRating(e.target.value)}
                required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}


import { useParams } from "react-router-dom";
import api from "../service/api";
import { useState } from "react";


export function CommentForm(){
    const {id} =useParams();
    const [name, setName] = useState('')
    const [description, setDescription]=useState('')
    const [rating, setRating] =useState(null)

    const handleSumbit = async (evento) =>{
        evento.preventDefault()
        const comment = new FormData();
        comment.appende('name',name)
        comment.appende('description',description)
        comment.appende('rating',rating)
    }

    return(
        <form className="mt-4">
        <h3>Add a Comment</h3>
        <div className="mb-3" onSubmit={handleSumbit}>
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea className="form-control" required></textarea>
        </div>
        <div className="mb-3">
            <label className="form-label">Rating:</label>
            <input type="number" min="1" max="5" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        
    </form>
    )
}
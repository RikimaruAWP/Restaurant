import api from "../service/api";
import { useState } from "react";


export function CommentForm(){
    const [names, setNames] = useState('')
    const [description, setDescription]=useState('')
    const [rating, setRating] =useState(null)

    return(
        <form className="mt-4">
        <h3>Add a Comment</h3>
        <div className="mb-3">
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

    </form>

  
   
    )
}
import api from "../service/api";
import { useState } from "react";

export function RestaurantCreate() {
    const [name, setName] = useState('');
    const [address, setaddress] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log("Se previno la acción por defecto");

        console.log(name, address, image);
        const restaurante = new FormData();
        restaurante.append('name', name);
        restaurante.append('address', address);
        restaurante.append('image', image);

        try {
            await api.post('/restaurants/', restaurante, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Restaurant agregado');
        } catch (error) {
            console.log(error.message);
        }
    };
return(
    <div className="container mt-4 border p-2">
    <h2>Create Restaurant</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="mb-3">
            <label className="form-label">Address:</label>
            <input type="text" className="form-control" onChange={(e) => setaddress(e.target.value)} required/>
        </div>
        <div className="mb-3">
            <label className="form-label">Image:</label>
            <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
)
}
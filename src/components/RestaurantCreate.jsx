import { useState } from "react";
import api from "../service/api";

export function RestaurantCreate() {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [imagenes, setImagenes] = useState(null);

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log("Se previno la acción por defecto");
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('direccion', direccion);
        formData.append('imagenes', imagenes); // Esto es un archivo de tipo file


        try {
            await api.post('/restaurants/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Restaurante agregado correctamente');
        } catch (error) {
            console.error('Error al crear el restaurante:', error.message);
            if (error.message.includes('imagenes')) {
                console.error('Error al cargar la imagen. Asegúrate de que sea un archivo válido.');
            } else {
                console.error('Verifica que todos los campos estén correctamente llenados.');
            }
        }
    };

    return (
        <div className="container mt-4 border p-2">
            <h2>Create Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImagenes(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
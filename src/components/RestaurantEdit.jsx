import { useParams } from "react-router-dom";
import api from "../service/api";

export function RestaurantEdit(){
    const {id} = useParams();

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
            await api.put(`/restaurants/${id}/`, restaurante, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Restaurant agregado');
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <div className="container mt-4 border p-2">
        <h2>Edit Restaurant</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">{restaurante.name}</label>
                <input type="text" className="form-control" required />
            </div>
        </form>
    </div>
    )
}
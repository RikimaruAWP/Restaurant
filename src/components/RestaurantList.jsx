import { useEffect, useState } from "react";
import api from "../service/api";
import { Link } from "react-router-dom";

export function RestaurantList(){
    const [listadoRestaurant, setListadoRestaurant] = useState([]);

    const fetchRestaurant = async () => {
        try {
            const response = await api.get('/restaurants/');
            setListadoRestaurant(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchRestaurant();
    },[listadoRestaurant])

    async function deleteRestaurant(id){
        console.log(id);
        try{
            await api.delete(`/restaurants/${id}/`)
            alert('Se elimino artista');
            fetchRestaurant()
        }catch(error){
            console.log(error.message);
        }
    }

    return(
    <div className="container mt-4">
        <h1 className="mb-4">Restaurants</h1>
        <ul className="list-group">{listadoRestaurant.map((restaurante)=>
            <li key ={restaurante.id} className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`/detail-restaurants/${restaurante.id}/`}>{restaurante.name}</Link>
                <button className="btn btn-danger btn-sm" onClick={()=> deleteRestaurant(restaurante.id)}>
                    Delete
                </button>
            </li>)}
        </ul>
    </div>
    );
}
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = (  ) => {

    const {id_param} = useParams();
    const [ data, setData] = useState( [] );
    //LA FUNCION SE PONE DENTRO DEL USE EFFECT PARA EVITAR EL PROBLEMA DE LA 'MISSING DEPENDENCY

    useEffect(() => {
        const  getIdParam = async () => {
            const data = await fetch( `https://jsonplaceholder.typicode.com/users/${id_param}` );
            const res = await data.json();
            console.log(res)
            setData(res)
        }
        getIdParam()
    }, [ id_param ])

       
    return (
        <div className="container">
            <div>
                    <Link to="/user.mini_app/" className="button">Back home</Link>
            </div>
            <p className="title">User info</p>
            <p className="greet-user">
                <span className="id">Welcome back,</span>
                {data.name}<span className="id">!</span>
            </p>
        </div>
    )
}

export default UserDetails;
import { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";


function App() {
        const [ info, setInfo ] = useState( [] )

        useEffect(() => {
                getData()
        }, [])

        const getData = () => {
                fetch( 'https://jsonplaceholder.typicode.com/users' )
                        .then(response => response.json())
                        .then(data => {
                                console.log(data)
                                setInfo(data)
                });     
        } 

        return (
          <div className="container">
                <p className="title">User</p>
                <div>
                    {
                        info.map(data => {
                            return (
                                <div className="text-holder" key={data.id}>
                                    <div className="user-holder">
                                    <p className="text-name id">{ data.name }</p>
                                        <small>
                                            <p className="text">
                                                <span className="id">Email:</span> { data.email }
                                            </p>
                                        </small>
                                        <small>
                                            <p className="text">
                                                <span className="id">City:</span> { data.address.city }
                                            </p> 
                                        </small>
                                    </div>
                                    <div className="button-holder">
                                            <Link to={ `/user/${data.id}` } className="button">Más info</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
          </div>
        );
}

export default App;

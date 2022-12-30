import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const HobbyList = () => {
    const [hobbies, setHobbyList] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`http://localhost:8080/HobbyList`, requestOptions)
            .then((response) => response.json() )
            .then((data) => {
                setHobbyList(data);
            } )
            .catch(err => {
                console.log(err);
            })


    },[]);


    return (
      
        <div className="text-center">
            <h2> List of all hobby items </h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                {hobbies.map((m) => (
                    <tr key={m.id}>
                    <td>{m.id} </td>
                    <td>{m.Category} </td>
                    <td>
                        <Link to={'/HobbyItem/${m.id}'}>
                        {m.Name}
                        </Link>
                    </td>
                    <td>{m.Cost} </td>
                </tr>




                ))}
        
                </tbody>
            </table>
        </div>
      
    )
}

export default HobbyList;
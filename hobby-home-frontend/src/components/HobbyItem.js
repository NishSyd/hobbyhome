import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HobbyItem = () => {
    
    const [hobbylist, setHobbyList] = useState({});
    let { id } = useParams();

    useEffect(() =>{
        let myHobby = {

            id: 1,
            Name: "Chicken Biriyani",
            Category : "Cooking",
            Cost : 18,
            Description : "Freshy made Hyderbadi with spices",
        }
        setHobbyList(myHobby);
    }, [id]
    )
    return (
        <div className="text-center">
            <h2> This is the hobby item to take home </h2>
            <h3>Hobby: {hobbylist.Name} </h3>
            <hr/>
            <p>Hobby: {hobbylist.Description}</p>
  

            <hr/>
          
        
        </div>
        
        
    )
}

export default HobbyItem;
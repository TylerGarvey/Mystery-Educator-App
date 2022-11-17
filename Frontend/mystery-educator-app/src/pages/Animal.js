import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Animal =() => {
    
const [animal, setAnimal] = useState(null);
const [ loading, setLoading] = useState(true);


useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(Response => Response.json())
    .then(json => setAnimal(json));

    if (animal) {
        setLoading(false);
    }
})

return (
    <div> 
        {animal.name}
    </div>
)


}

export default Animal;
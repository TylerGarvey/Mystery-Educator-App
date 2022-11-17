import React, { useEffect, useState} from "react";


const Animal =() => {
    
const [animal, setAnimal] = useState(null);
const [ loading, setLoading] = useState(true);


useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(Response => Response.json())
    .then(json => {setLoading(false);setAnimal(json)});

    if (animal) {
        setLoading(false);
    }
},[])

return (
    <div> 
       {loading ?  <h1> loading.. </h1> : 
       
       <div>
       <p> name : {animal.name} </p>
       <p> animal type: {animal.animal_type} </p>
       <p> animal lifespan: {animal.lifespan} </p> 
       <p> animal diet: {animal.diet} </p> 
       <p> animal geo range: {animal.geo_range} </p>
       <button onClick="window.location.reload()"> new animal data</button>
       </div>
       }
    </div>
    
    

    
)


}

export default Animal;
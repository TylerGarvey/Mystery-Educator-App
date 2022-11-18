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

function refreshPage() {
    window.location.reload(false);
}

return (
    <div className="animalApi"> 
     { loading ?  <h1> loading.. </h1> : 
       
        <div>
            <p> Name : {animal.name} </p>
            <p> Animal type: {animal.animal_type} </p>
            <p> Animal lifespan: {animal.lifespan} </p> 
            <p> Animal diet: {animal.diet} </p> 
            <p> Animal geo range: {animal.geo_range} </p>
            <button onClick= {refreshPage}> New Animal Data</button>
        </div>
       }
    </div>
    
    

    
)


}

export default Animal;
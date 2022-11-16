import React, { useEffect, useState } from 'react';

const BoredPage =() => {
 
    const [ loading, setLoading ] = useState(true);
    const [ activities, setActivities ] = useState([]);
 
   function loadActivity() {
        setLoading(true);
        fetch(`http://www.boredapi.com/api/activity/`)
            .then(response => response.json())
            .then(data => {
                setActivities([...activities, data]);
                setLoading(false);
            });
    }
       
    useEffect(() => {loadActivity();}, []);
        
    if(activities.length === 0)  {
        return <p>Loading...how boring...</p>
    }

//     let audio = new Audio("fartSound.mp3")

//     const start = () => {
//     audio.play()
//   }


//     document.getElementById("boredButton").onclick = (ev) => {
//        loadActivity();
//        start()
//     }


    return(
                 
                    <div className="boredApiContainer">
                            <div className='title'>
                                <h1>The Bored API</h1>
                               <img src='checkItOut'></img>
                                <ul className='activitesList'>
                                    {activities.map((activity) => {
                                        return<li key={activity.key}>{activity.activity}</li>
                                    })}
                                </ul>
                            </div>
                             <div className='boredButtonContainer'>       
                                <button disabled={loading} onClick={loadActivity} type="text" class="boredButton">Sounds boring, try something else</button>
                            </div>         
                    </div>
                  
                
            )
        
    
}
    
 
export default BoredPage;
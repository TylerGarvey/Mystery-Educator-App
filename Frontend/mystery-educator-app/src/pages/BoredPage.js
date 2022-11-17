import React, { useEffect, useState } from 'react';
import checkItOut from '../assets/checkItOut.png'
import audio from '../assets/fartSound.mp3'
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

    let playAudio = () => {
        new Audio(audio).play();
    }

    return(
        <div className="boredApiContainer">
            <div className='title'>
                <h1>The Bored API</h1>
                <h2>Tired of farting around? Press the button and Bored API will give you some crap to do!</h2>
                <img src={checkItOut} className='checkItOutImg'></img>
                <ul className='activitesList'>
                    {activities.map((activity) => {
                        return<li key={activity.key} className="boredActivity">{activity.activity}</li>
                    })}
                </ul>
            </div>
            <div className='boredButtonContainer'>       
                <button disabled={loading} onClick={() => {loadActivity(); playAudio()}} type="text" className="boredButton">Sounds boring, try something else</button>
            </div>         
        </div>        
    ) 
}
    
export default BoredPage;
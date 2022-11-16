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
    
    return(
       
                 
                    <div className="boredApiContainer">
                        <div>
                            <div className='title'>
                                <h1>The Bored API: Let's find you something to do</h1>
                                <ul>
                                    {activities.map((activity) => {
                                        return<li key={activity.key}>{activity.activity}</li>
                                    })}
                                </ul>
                            </div>
                            <button disabled={loading} onClick={loadActivity} type="text" class="boredButton">Click me if you're bored!</button>
                        </div>
                    </div>
                  
                
            )
        
    
}
    
 
export default BoredPage;
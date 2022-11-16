import React, { useEffect, useState } from 'react';
 
 
const BoredPage =() => {
 
    const [ loading, setLoading ] = useState(true);
    const [ activity, setActivity ] = useState([]);
 
   function loadActivity() {
        setLoading(true);
        fetch(`http://www.boredapi.com/api/activity/`)
            .then(response => response.data())
            .then(json => {
                setActivity([...activity, data.activity]);
                setLoading(false);
            });
    }
       
    useEffect(() => {loadActivity();}, []);
        
    if(loading)  {
        return <p>Loading...how boring</p>
    }
    
    return(
       
                ( 
                    <div className="boredApiContainer">
                        <div>
                            <div className='title'>
                                <h1>The Bored API: Let's find you something to do</h1>
                                <h2>{activity}</h2>
                            </div>
                            <button onClick={loadActivity} type="text" class="boredButton">Click me if you're bored!</button>
                        </div>
                    </div>
                  
                )
            )
        
    

        // <div className="boredContainer">
        //     <div className="boredBodyContainer">
        //         <p className="aboutBored">
        //         The Bored API
        //     Let's find you something to do
        //         </p>
        //     </div>
        //     <div className="boredButtonContainer">
        //         <div className="boredButton">
        //             
        //         </div>
        //     </div>
            
    
   
}
    
 
export default BoredPage;
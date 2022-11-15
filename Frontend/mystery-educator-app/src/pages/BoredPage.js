import React, { useEffect, useState } from 'react';
 
 
const BoredPage =() => {
 
    const [ loading, setLoading ] = useState(true);
    const [ pageContent, setPageContent ] = useState(null);
 
    useEffect(() => {
        fetch(`http://www.boredapi.com/api/activity/`)
        .then(response => response.json())
            .then(json => setPageContent(json));
        
        if(pageContent) {
            setLoading(false);
            }
        })
        
    
 
 
   
    return(
        (loading ? <h3>Loading...</h3> :
                (
                    <div className="boredApiContainer">
                        <div>
                            <div className='title'>
                                <h3>{pageContent.title}</h3>
                                <h4>{pageContent.body}</h4>
                            </div>
                        </div>
                    </div>
                )
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
        //             <button type="text" class="boredButton">
        //                 Click me when you're bored
        //             </button>
        //         </div>
        //     </div>
            
    
   
}
    
 
export default BoredPage;
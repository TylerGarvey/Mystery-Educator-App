import React, { useEffect, useState } from 'react';
 
 
const BoredPage =() => {
 
    const [ isLoading, setLoading ] = useState(true);
    const [ pageContent, setPageContent ] = useState(null);
 
    useEffect(() => {
        fetch(`http://www.boredapi.com/api/activity/`)
        .then((res) => res.json())
        .then((data) => {
            setPageContent(data);
            setLoading(false);
        })
    });
 
    console.log(data);
 
   
    return(
        <div class="boredContainer">
            <div class="boredBodyContainer">
                <p class="aboutBored">
                The Bored API
            Let's find you something to do
                </p>
            </div>
            <div class="boredButtonContainer">
                <div class="boredButton">
                    <button type="text" class="boredButton">
                        Click me when you're bored
                    </button>
                </div>
            </div>
            {/* A section for what is returned from the api
             that only shows and changes when the API button is clicked */}
            (isLoading ? <h2>Loading...</h2> :
                (
                    <div class="boredApiContainer">
                        <div>
                            <div className='title'>
                                {data.title}
                            </div>
                            <div>
                                {data.body}
                            </div>
                        </div>
                    </div>
                )
            )
        </div>
    )
   
}
 
export default BoredPage;
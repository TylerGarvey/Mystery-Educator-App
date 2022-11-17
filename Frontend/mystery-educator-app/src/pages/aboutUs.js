// import Ayanle from "";
// import Zekariye from "";
// import Jacob from "";
import Corey from '../assets/Corey 2019.jpg';
// import Tyler from "";
// import Michael from "";
import './homePage.css'
import gitHub from '../assets/gitHub.png'
import linkedIn from '../assets/linkedIn.png'
// ^ just place holders for later

const About = () => (
  
<div class="container"> 
    <h1 class="margin" id="title">ABOUT US</h1>
    <main class="biogrophies">
    
        <section id="Ayanle">
            <h2>Ayanle Dahir</h2>
            <img class="photo" src="" alt="photo" />
             <p class> uncomment the p element and write about your your bios 
             </p>
            <a id="github" href="">
            <img  id="github" src={gitHub} alt="github" />
                </a>
            <a id="linkedin" href="">
             <img id="linkedin" src={linkedIn} alt="linkedin" />
            </a>
            </section>
        
         <section id="Zekariye">
             <h2>Zekariye Isse</h2>
             <img class="photo" src="" alt="photo" />
              <p class> uncomment the p element and write about your your bios 
            </p>
            <a id="github" href="">
            <img  id="github" src={gitHub} alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
            </a>
        </section>

        <section id="Jacob">
            <h2>Jacob Davis</h2>
            <img class="photo" src="" alt="photo" />
             <p class> uncomment the p element and write about your your bios
            </p>
            <a id="github" href="">
            <img  id="github" src={gitHub} alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
            </a>
        </section>

        <section id="Corey">
            <h2>Corey Dickerson</h2>
            <img className="photo" src={Corey} alt="photo" />
            <p class> Since I was a kid I've been a creative explorer. Always spending most of my day exploring the woods, drawing, listening to music or taking things apart to see how they worked. I have a strong passion for writing and recording music and have done so since the age of 13. 
            I like to spend my free time traveling with my partner Alex, and hiking with our two dogs Beck & Charlie.
            </p>
             <a id="github" href="https://github.com/CoreyMichael92">
            <img  id="github" src={gitHub} alt="github" />
             </a>
            <a id="linkedin" href="https://www.linkedin.com/in/corey-dickerson-614cb/">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
             </a>
        </section>

        <section id="Tyler">
            <h2>Tyler Garvey</h2>
            <img className='photo' src="" alt='photo' />
              <p>I am a budding software developer and soon to be father. Weather permitting, you can usually find me in the outdoors kayaking, fishing, or bushwhacking through the Ohio landscape. I also hold certification as a dog trainer, so you can usually find my trusty (and well behaved) dogs right behind me. </p>
            <a id="github" href="https://github.com/TylerGarvey">
            <img  id="github" src={gitHub} alt="github" />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/tygarvey/">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
             </a>
        </section>

        <section id="Michael">
            <h2>Michael Diodore</h2>
            <img class="photo" src="" alt="photo" />
             <p class> uncomment the p element and write about your your bios  
            </p>
            <a id="github" href="">
            <img  id="github" src={gitHub}alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
             </a>
        </section>
    </main>
</div>
)


export default About
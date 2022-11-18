// import Ayanle from "";
// import Zekariye from "";
// import Jacob from "";
import Corey from '../assets/Corey 2019.jpg';
<<<<<<< HEAD
// import Tyler from "";
// import Michael from "";
=======
import Tyler from '../assets/Tyler.jpg'
import Michael from "../assets/michael.jpg";
import Jacob from "../assets/jacob.png"
>>>>>>> 51009ca5c7b47fc3d301f8f9fd221f12c86c8fd3
import './homePage.css'
import gitHub from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
// ^ just place holders for later

const About = () => (
  
<div class="container"> 
    <h1 class="margin" id="title">ABOUT US</h1>
    <main class="biogrophies">
    
        <section id="Ayanle">
            <h2>Ayanle Dahir</h2>
            <img class="photo" src="" alt="photo" />
             <p class> I've always loved computers so that is why I wanted to become a software developer. I also love playing and watching sports in my free time.
             </p>
            <a id="github" href="https://github.com/Ayanle6">
            <img  id="github" src={githubpic} alt="github" />
                </a>
            <a id="linkedin" href="https://www.linkedin.com/in/ayanle-dahir-770b30250/">
<<<<<<< HEAD
             <img id="linkedin" src={linkedIn} alt="linkedin" />
=======
             <img id="linkedin" src={linkedinpic} alt="linkedin" />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/ayanle-dahir-770b30250/">
             <img id="linkedin" src={linkedinpic} alt="linkedin" />
             </a>

            <img className='photo' src="" alt="photo" />
              <p class> uncomment the p element and write about your your bios 
             </p> 
            <a id="github" href="">
            <img  id="githubpic" src={githubpic} alt="github" />
>>>>>>> 51009ca5c7b47fc3d301f8f9fd221f12c86c8fd3
            </a>
            </section>
        
        <section id="Zekariye">
             <h2>Zekariye Isse</h2>
<<<<<<< HEAD
             <img class="photo" src="" alt="photo" />
              <p class> uncomment the p element and write about your your bios 
            </p>
=======
             <img className='photo' src="" alt="photo" />
              <p className='bios'> uncomment the p element and write about your your bios 
            </p> 
>>>>>>> 51009ca5c7b47fc3d301f8f9fd221f12c86c8fd3
            <a id="github" href="">
            <img  id="github" src={gitHub} alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
            </a>
        </section>

        <section id="Jacob">
            <h2>Jacob Davis</h2>
<<<<<<< HEAD
            <img class="photo" src="" alt="photo" />
             <p class> uncomment the p element and write about your your bios
            </p>
            <a id="github" href="">
            <img  id="github" src={gitHub} alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
=======
            <img className='photo' src={Jacob} alt="photo" />
             <p className='bios'>I grew up loving video games and computers 
             and now enjoy coding on my free time. I also like to explore 
             new places and go out to drink coffee with my wife. 
             </p>
            <a id="github" href="https://github.com/JDavis01">
            <img  id="githubpic" src={githubpic} alt="github" />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/jacob-davis-6bb4ab75/">
            <img id="linkedinpic" src={linkedinpic}  alt="linkedin" />
>>>>>>> 51009ca5c7b47fc3d301f8f9fd221f12c86c8fd3
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
<<<<<<< HEAD
            <a id="github" href="">
            <img  id="github" src={gitHub}alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedIn} alt="linkedin" />
=======
            <a id="github" href="https://github.com/michaeldiodore">
            <img  id="githubpic" src={githubpic} alt="github" />
            </a>
            <a id="linkedin" href="">
            <img id="linkedin" src={linkedinpic} alt="linkedin" />
>>>>>>> 51009ca5c7b47fc3d301f8f9fd221f12c86c8fd3
             </a>
        </section>
    </main>
</div>
)


export default About
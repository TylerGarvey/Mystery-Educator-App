import './homePage.css'
import mouse from '../assets/mouse.mp3'

let playMouse = () => {
    new Audio (mouse).play();
}

const DinoQuiz = () => (
    <div>
        <h1>Dino Quiz!</h1>
        <h3>Name that dinosaur!</h3>
        <section className='quiz'>
            
            <button onClick={playMouse}>A.</button>
            <button onClick={playMouse}>B.</button>
            <button onClick={playMouse}>C.</button>
            <button onClick={playMouse}>D.</button>
        </section>
            
            <img></img>
            <h2>Display Name</h2>
            <p>Description</p>
        
    </div>
    
)

export default DinoQuiz
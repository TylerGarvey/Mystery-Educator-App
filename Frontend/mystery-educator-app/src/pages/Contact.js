import './homePage.css'

const Contact = () => (

  <div className="container"> 
    <h1 className="suggestions"> Have a suggestion? </h1>
    <p> Let us know how we are doing, or if you have any suggestions for us, Please feel free to let us know!
    </p>
      <div className="boxContain">
        <div class="box">
          <input type="text" className="Contactbox Contactbox1" name="firstName" placeholder="First Name"/>
          <input type="text" className="Contactbox Contactbox2" name="lastName" placeholder="Last Name"/>
          <input type="text" className="Contactbox Contactbox3" name="email" placeholder="Email"/>
          <textarea name="thoughts" className="Contactbox Contactbox4" placeholder="Write your suggestions here." cols="35" rows="15"></textarea>
          <input className="Contactbox Contactbox5" type="submit" value="Submit"/>
        </div>
      </div>
  </div>
    
)

export default Contact
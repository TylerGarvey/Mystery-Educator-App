export default function Contact() {
    return ` 
    <div class="container"> 
        <h1 class="suggestions"> Have a suggestion? </h1>
        <p class=  > Let us know how we are doing, or if you have any suggestions for us, Please feel free to let us know!
        </p>
        <div class="boxContain">
          <div class="box">
          <div class="contact">
            <input type="text" class="Contactbox Contactbox1" name="firstName" placeholder="First Name">
            <input type="text" class="Contactbox Contactbox2" name="lastName" placeholder="Last Name">
            <input type="text" class="Contactbox Contactbox3" name="email" placeholder="Email"/>
            <textarea name="thoughts" class="Contactbox Contactbox4" placeholder="Write your suggestions here." cols="35" rows="15"></textarea>
            <input class="Contactbox Contactbox5" type="submit" value="Submit"/>
          </div>
          </div>
          
    </div>
    `;
}
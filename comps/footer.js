//MUST HAVE - CREATE A TEMPLATE TAG
var template_footer = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_footer.innerHTML = `
<style>
    .container_2 {
        display: flex;
        background-color: #C4C4C4;
        height: 20vh;
    }

    .copyright {
        flex: 1;
        margin-top: 5vh;
        margin-left: 15vh;
        font-size: 2.5vh;
    }

    .social_Media_Container {
        margin-top: 2vh;
        flex: 1;
        font-size: 4vh;
    }

    .icon {
        width: 7vh;
        height: 7vh;
        margin-right: 5vh;
        margin-left: 5vh;
    }

    .icons {
        display: flex;
    }
    
</style>

<div class="container_2">
<div class="copyright"> 2022 CDN GROUP </div>
<div class="social_Media_Container">
    <div> Follow us through social media</div>
    <div class="icons" id="demo" >   
        <div> <img class="icon"  src="https://cdn.icon-icons.com/icons2/2566/PNG/512/facebook_icon_153518.png" alt="" srcset=""> </div>
        <div> <img class="icon"  src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png" alt="" srcset=""> </div>
        <div> <img class="icon"  src="images/instagram.jpg" alt="" srcset=""> </div>
    </div>
</div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFooter extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_footer.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-footer", TheFooter)
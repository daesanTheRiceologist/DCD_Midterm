//MUST HAVE - CREATE A TEMPLATE TAG
var template_fullimage = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_fullimage.innerHTML = `

<style>
    img {
        width: 100%;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
</style>

<div>
    <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" alt="" srcset="">
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFullimage extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_fullimage.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("image")){
            this.shadowRoot.querySelector("img").src = this.getAttribute("image")
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-fullimage", TheFullimage)
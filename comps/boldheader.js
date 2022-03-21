//MUST HAVE - CREATE A TEMPLATE TAG
var template_boldheader = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_boldheader.innerHTML = `
<style>
    .top1 {
        font-size: 50px;
        display: flex;
        justify-content: center;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
</style>

<div class="top1">FAST FASHION</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBoldheader extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_boldheader.content.cloneNode(true)); //use the template to make a clone
        console.log(this.getAttribute("header"))
        this.shadowRoot.querySelector(".top1").innerText = this.getAttribute("header")
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-boldheader", TheBoldheader)
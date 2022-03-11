//MUST HAVE - CREATE A TEMPLATE TAG
var template_storycontent = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_storycontent.innerHTML = `
<style>
    .content_container {
        display: flex;
        flex-direction: column;
        align-items: center;}

    .title {
        font-size: 3.5vw;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
    }

    .text {
        font-size: 1.5vw;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        width: 65vw;
    }

    img {
        width: 60vw;
    }
</style>

<div class="content_container">
<div class="title"> Fast Fasihon Origins</div>
<div class="text"> Before the industrial revolution, clothing was made to order and usually took weeks or even months in terms of time.</div>
<div class="image"> <img src="https://images.unsplash.com/photo-1576666735112-87a8ea71671c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80" alt="" srcset=""> </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheStorycontent extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_storycontent.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("title")){
            this.shadowRoot.querySelector(".title").innerText = this.getAttribute("title")
        }
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".text").innerText = this.getAttribute("text")
        }
        if(this.getAttribute("image")){
            this.shadowRoot.querySelector("img").src = this.getAttribute("image")
        }
    }
    
    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-storycontent", TheStorycontent)
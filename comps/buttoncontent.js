//MUST HAVE - CREATE A TEMPLATE TAG
var template_buttoncontent = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_buttoncontent.innerHTML = `
<style>
    .content_icon {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: white;
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

    .content_icon {
        display: flex;
    }
    .issue_text {
        display: flex;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
    }
</style>


<div class="content_icon" >
    <div class="icon_with_text">
        <div> <img class="icon icon1"  src="https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg" alt="" srcset=""> </div>
        <div class = "issue_text issue1"> bruh </div>
    </div>  
    <div class="icon_with_text">
        <div> <img class="icon icon2"  src="https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg" alt="" srcset=""> </div>
        <div class = "issue_text issue2"> bruh </div>
    </div>
    <div class="icon_with_text">
        <div> <img class="icon icon3"  src="https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg" alt="" srcset=""> </div>
        <div class = "issue_text issue3"> bruh </div>
    </div>    
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButtoncontent extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_buttoncontent.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("issue1")){
            this.shadowRoot.querySelector(".issue1").innerText = this.getAttribute("issue1")
        }
        if(this.getAttribute("issue2")){
            this.shadowRoot.querySelector(".issue2").innerText = this.getAttribute("issue2")
        }
        if(this.getAttribute("issue3")){
            this.shadowRoot.querySelector(".issue3").innerText = this.getAttribute("issue3")
        }
        if(this.getAttribute("icon1")){
            this.shadowRoot.querySelector(".icon1").src = this.getAttribute("icon1")
        }
        if(this.getAttribute("icon2")){
            this.shadowRoot.querySelector(".icon2").src = this.getAttribute("icon2")
        }
        if(this.getAttribute("icon3")){
            this.shadowRoot.querySelector(".icon3").src = this.getAttribute("icon3")
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-buttoncontent", TheButtoncontent)
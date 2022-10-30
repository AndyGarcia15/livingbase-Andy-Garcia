
import { Dom } from "../../scripts/render.js";
import { Request } from "../../scripts/request.js";



function btnHome(){
    const homeBtn = document.querySelector('#home')

    homeBtn.addEventListener('click',()=>{
        window.location.href='../home/index.html'
    })
}
Dom.renderLocalStorage()
btnHome()

function btnContainer(){
    let dados = Request.cards(1)
    Dom.renderBtnContainer(dados)
}
btnContainer()

import { Dom } from "./render.js";
import { Request } from "./request.js"
let page = 0
let test = []

const main = document.querySelector('main')
export const footer = document.querySelector('footer')


const observer = new IntersectionObserver(async (entries)=>{
    
    let  data = await Request.cards(page)
    if(test.includes(data.nextPage) != true){
        data.news.forEach(element => {
            
            Dom.renderNewsCard(element)
        });
        page++
        test.push(data.previusPage)
    }
})

export const btnAll = ()=>{
    let btn =document.querySelector('#btnAll')
    btn.addEventListener('click',(e)=>{
        main.innerHTML=''
        
        observer.observe(footer)
    })
}
export const homepage = async ()=>{
    let  data = await Request.cards(page)
    Dom.renderBtnContainer(data)
    observer.observe(footer)   
}





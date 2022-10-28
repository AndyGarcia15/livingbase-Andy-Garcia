import { Dom } from "./render.js";
import { Request } from "./request.js"
let page = 0
let test = []

export const observer = new IntersectionObserver(async (entries)=>{
    
    let  data = await Request.cards(page)
    if(test.includes(data.nextPage) != true){
        data.news.forEach(element => {
            Dom.renderNewsCard(element)
        });
        page++
        test.push(data.previusPage)
    }
})




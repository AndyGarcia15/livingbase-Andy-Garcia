import { Dom } from "./render.js";


export class Request{
    static baseUrl = 'https://m2-api-living.herokuapp.com/news?page='

    static async cards(page){
    const api =await fetch(`${this.baseUrl}${page}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
        
    })
    .then(resp => resp.json())
    return api
    } 
}
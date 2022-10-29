import { Request } from "./request.js"


export class Dom {
    static main = document.querySelector('main')
    
    static renderNewsCard(obj){
        let li = document.createElement('li')
            li.id=obj.id
        let img = document.createElement('img')
            img.src=obj.image
        let divInfo = document.createElement('div')
            divInfo.id='info'
        let h3Title = document.createElement('h3')
            h3Title.innerText=obj.title
            h3Title.classList.add('font3/semibold')
        let pDescription = document.createElement('p')
            pDescription.innerText=obj.description
            pDescription.classList.add('font4/regular')

        let btn = document.createElement('button')
            btn.classList.add('link-green')
            btn.innerText='Acessar conteúdo'
            btn.addEventListener('click',(e)=>{
                e.preventDefault()
                localStorage.setItem('@Living:Post',JSON.stringify(obj))
                window.location.href='../post/index.html'
            })

        divInfo.append(h3Title,pDescription,btn)
        li.append(img,divInfo)
        this.main.append(li)
    }

    static async renderBtnContainer(arr){
        const btnContainer = document.querySelector('#btn-container')
        
        const dados = await arr
        dados.news.forEach(element => {
           
            let btn = document.createElement('button')
            btn.innerText= element.category
            btn.classList.add('btn-gray')
            btnContainer.append(btn)
            
            btn.addEventListener('click',(e)=>{
                this.main.innerHTML=''
                let filter = dados.news.filter((e)=>e.category ==element.category)
                filter.forEach((obj)=>{
                    Dom.renderNewsCard(obj)
                })  
            })
        
        });
        
    }

    static renderPost(obj){
        
        let headerPost = document.createElement('section')
            headerPost.id='headerPost'
        let divContainer = document.createElement('div')
            divContainer.id='headerContainer'
        let h1title = document.createElement('h1')
            h1title.classList.add('font1/semibold')
            h1title.innerText = obj.title
        let pDescription = document.createElement('h5')
            pDescription.classList.add('font4/regular')
            pDescription.innerText=obj.description 
        let img = document.createElement('img')
            img.src= obj.image
            img.id='imgPost'
        let content = document.createElement('p')
            content.id='content'
            content.innerText=obj.content
        
        divContainer.append(h1title,pDescription)
        headerPost.append(divContainer)
        this.main.append(headerPost,img,content)
    }
    static async renderLocalStorage(){
        let storage = JSON.parse(localStorage.getItem('@Living:Post'))
        console.log(storage)
        await Dom.renderPost(storage)
        
    }

    static btnBacktoTop(){
        let btn = querySelector('#backToTop')
        btn.addEventListener('click',(e)=>{
            
        })
    }

}


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
            pDescription.innerText=obj.pDescription
            pDescription.classList.add('font4/regular')

        let btn = document.createElement('button')
            btn.classList.add('link-green')

        divInfo.append(h3Title,pDescription,btn)
        li.append(img,divInfo)
        this.main.append(li)
    }

    static renderBtnContainer(arr){
        const btnContainer = document.querySelector('btn-container')
        obj.forEach(element => {
        });
        let btn = document.createElement('button')
            btn.innerText= obj.category
            btn.classList.add('btn-gray')
            btn.addEventListener('click',(e)=>{
                e.preventDefault()
                
            })
        btnContainer.append(btn)
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
}
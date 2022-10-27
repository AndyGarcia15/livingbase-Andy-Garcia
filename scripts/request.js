

class Request{
    static baseUrl = 'https://m2-api-living.herokuapp.com/news?'

    static all = fetch(`${this.baseUrl}`)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}
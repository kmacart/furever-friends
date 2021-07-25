import Router from './Router'
import Auth from './Auth'
import Toast from './Toast'


class App {
  constructor(){
    this.name = "Furever"
    this.version = "1.0.0"
    this.apiBase = 'https://git.heroku.com/furever-friends-backend.git'
    this.rootEl =  document.getElementById("app")
    this.version = "1.0.0"
  }
  
  init() { 
    console.log("App.init")
    
    // Toast init
    Toast.init()   
    
    Router.init()
    // Authentication check    
    Auth.check(() => {
      // authenticated! init Router
      Router.init()
    })    
  }
}

export default new App()
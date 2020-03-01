recomendado
'use strict'
//regex.test(variable)
//https://mailboxlayer.com/product <<<.... validar email per domini
//https://github.com/dropbox/zxcvbn <<<--- validar complexitat password
//https://codepen.io/kathykato/pen/dzdgPJ <--- formulario flexbox
//https://www.edamam.com/ <--- api menjars i valros calorics
//https://github.com/public-apis/public-apis#food--drink <--- apis food
//https://world.openfoodfacts.org/cgi/search.pl  <----api 
//https://en.wiki.openfoodfacts.org/Main_Page <---documentacion api 
//https://documenter.getpostman.com/view/8470508/SVtN3Wzy?version=latest#f564abb6-b306-4f8c-aa32-80c37f3d7fca

//wireframes ---> figma
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesatemos.wordpress.com%2F2018%2F07%2F10%2F9-danos-que-la-comida-procesada-esta-haciendo%2F&psig=AOvVaw1q5TZovXqNszz9Ucfx8FfM&ust=1582920096433000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjo7orD8ucCFQAAAAAdAAAAABAD
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Fsocial-media-icons_3578695.html&psig=AOvVaw1SBxlCMqSHxxbxOAFeFCT6&ust=1582920333604000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiRxfPD8ucCFQAAAAAdAAAAABAI
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fadveischool.com%2Fpie-de-pagina-de-tu-sitio-web%2F%3Ffb_ref%3DlHgDoCESno-Pinterest%26utm_source%3DPinterest%26utm_medium%3DShareButton%26utm_campaign%3DGetSocial&psig=AOvVaw32ZBvrZbbiQzYS0E_aHsL4&ust=1582920197033000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDDmrLD8ucCFQAAAAAdAAAAABAM
//https://adveischool.com/wp-content/uploads/2016/11/Pie-de-Pagina-sitio-web.png
//https://github.com/statickidz/bedca-api
class User {
    constructor(name, email, phone, password) {
        this.name = name
        this.email = email
        this.phone = phone
        this.password = password
    }
}
class Validator {
    constructor(name) {
        this.name = name
    }
    errorCreator(message, location) {
        let div = document.createElement("div");
        div.setAttribute("class", "error");
        div.innerHTML = message
        Form.insertBefore(div, loation)
    }
    deleteError(){
        let errors =[...document.getElementsByClassName("error")]
        errors ? errors.forEach(error =>error.remove()):null;
    }

}
class SignInValidator extends User {
    constructor() {

    }
}

class LogInValidator extends Validator {
    constructor() {

    }

}



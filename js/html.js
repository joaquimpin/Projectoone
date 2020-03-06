let mainHtml = document.getElementsByClassName("borrar")[0]
let botonPrincipal = document.getElementById("Home")
let botonLogIn = document.getElementById("Login")
let botonBusqueda = document.getElementById("Search")
let botonContacto = document.getElementById("Contact")
let botonFaq = document.getElementById("FaQ")
let submmitButton = document.getElementById("submit")
let searchbar = document.getElementById("searchtext")
let spin = ["borrar", "<div class='loader'>Loading...</div>"] //
let paginaActualVisualitzada = 0
let ultimaBusqueda =""
let actualUserLogged
let elementosPorPagina = 20
let principal = ["h-50 d-flex align-items-center borrar", " <div class= 'container '> <div class= 'row ' id= 'fasdfsd '> <div class= 'mx-auto text-center col-md-6 '> <h1 class= 'display-4 text-dark '>FoodSearch</h1> <p class= 'lead text-primary '>Lead paragraph -&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> </div> </div>"]
let login = ["py-5 text-center text-white borrar", "<div class='container'> <div class='row'> <div class='p-5 col-lg-6 col-10 mx-auto border'> <h1 class='mb-4 text-secondary'>Login</h1> <form> <div class='form-group'> <input type='email' class='form-control email' placeholder='Email' id='form14'> </div> <div class='form-group'> <input type='password' class='form-control password' placeholder='Password' id='form15'> <small class='form-text text-muted text-right'>  <a class='Register btn'>Don't have account? Register now</a> </small> </div> <a class='btn btn-primary login'>Enter</a> </form> </div> </div>"]
let resultadosbusqueda = ["h-50 d-flex align-items-center ", "<div>future advanced search</div> "]
let contacto = ["py-3 text-center borrar", " <div class='container'><div class='row'><div class='mx-auto p-4 col-md-7'><h1 class='mb-4'>I am so happy</h1><form><div class='form-group'> <input type='email' class='form-control' id='form33' placeholder='Your Email'> </div><div class='form-group'> <input type='text' class='form-control' id='form34' placeholder='Subject'> </div><div class='form-group'> <textarea class='form-control' id='form35' rows='3' placeholder='Your message'></textarea> </div> <button type='submit' class='btn btn-block btn-outline-info'>Send</button></form></div></div></div>"]
let faq = ["py-5 borrar", "<div class='container'> <div class='row'> <div class='col-md-12'> <h1 class='display-4 text-center'>FaQ's</h1> </div> </div> </div> <div class='container'> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> </div>"]
let register = ["py-5 text-center", '<div class="container"> <div class="row"> <div class="mx-auto col-lg-6 col-10"> <h1>Register</h1> <p class="mb-3">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.</p> <form class="text-left"> <div class="form-group "> <label for="form16">Your Name</label> <input type="text" class="form-control name" id="form16" placeholder="You IronHacker name" required> </div> <div class="form-group "> <label for="form17">Second Name</label> <input type="text" class="form-control secondname" id="form17" placeholder="Werther Inc." required> </div> <div class="form-row"> <div class="form-group col-md-6 "> <label for="form18">Your email</label> <input type="email" class="form-control email" id="form18" placeholder="j.goethe@werther.com" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"> </div> <div class="form-group col-md-6 "> <label for="form19" required>Confirm email</label> <input type="email" class="form-control confirmemail" id="form24" placeholder="j.goethe@werther.com" required> </div> </div> <div class="form-row"> <div class="form-group col-md-6 "> <label for="form24" required>Password</label> <input type="password" class="form-control password" id="form20" placeholder="••••" required pattern=[a-zA-Z0-10]{5,} title="Five or more characters"> </div> <div class="form-group col-md-6 "> <label for="form20">Confirm Password</label> <input type="password" class="form-control confirmpassword" id="form26" placeholder="••••" required> </div> </div> <div class="form-group"> <div class="form-check "> <input class="form-check-input termandconditions" type="checkbox" id="form21"> <label class="form-check-label" for="form22"> I Agree with <a class="btn conditions">Term and Conditions</a> of the service </label> </div> </div> <a class="btn btn-primary signup">Sign Up</a> </form> </div> </div> </div>']
let product = ["py-5 borrar", "<div class='container'> <div class='row'> <div class='px-lg-5 d-flex flex-column justify-content-center col-lg-6'> <h1 contenteditable='true'>Nutella</h1> <p class='mb-3 lead' contenteditable='true'>Código de barras: 3017620422003 (EAN / EAN-13)</p> </div> </div> </div> <div class='container'> <div class='row'> <div class='col-md-12'> <div class='table-responsive'> <table class='table table-striped table-dark'> <thead> <tr> <th scope='col'> </th> <th scope='col'>${element.name}</th> <th scope='col'>Last</th> </tr> </thead> <tbody> <tr> <th scope='row'>1</th> <td>Mark</td> <td>Otto</td> </tr> <tr> <th scope='row'>2</th> <td>Jacob</td> <td>Thornton</td> </tr> <tr> <th scope='row'>3</th> <td>Larry</td> <td>the Bird</td> </tr> </tbody> </table> </div> </div> </div> </div>"]
botonPrincipal.addEventListener("click", function () { cargarHtml(principal) })
botonLogIn.addEventListener("click", function () { eventobotonlogin(botonLogIn.querySelector("a").innerText) })
botonBusqueda.addEventListener("click", function () { cargarHtml(resultadosbusqueda); crearEventosArticle() })
botonContacto.addEventListener("click", function () { cargarHtml(contacto) })
botonFaq.addEventListener("click", function () { cargarHtml(faq) })
searchbar.addEventListener("input", function () { search(searchbar.value, elementosPorPagina, 1) })

cargarHtml(principal)
let arrayProductosRespuesta = []
function eventobotonlogin(contenido) {
    // console.log("logginn")
    if (contenido === "Login") {
        cargarHtml(login); crearEventosLogin()
    } else {
      //  console.log("Account mode")
    }
}

function cargarHtml(elemento) {
    //console.log("carregant nou HTMl")
    mainHtml.innerHTML = ""
    mainHtml.classList = elemento[0]
    mainHtml.innerHTML = elemento[1]

}

function crearEventosArticle() {
    let arrayarticle = mainHtml.getElementsByClassName("col-lg-3 col-md-1 p-3")
    try {
        document.getElementById("prev").addEventListener("click", function () { search(ultimaBusqueda, elementosPorPagina, paginaActualVisualitzada - 1) })
        document.getElementById("menos1").addEventListener("click", function () { search(ultimaBusqueda, elementosPorPagina, paginaActualVisualitzada - 1) })

    } catch (error) {

    }
    try {
        document.getElementById("mas1").addEventListener("click", function () { elementosPorPagina,paginaActualVisualitzada; search(ultimaBusqueda, elementosPorPagina, paginaActualVisualitzada + 1) })

    } catch (error) {

    }
    try {
        document.getElementById("mas2").addEventListener("click", function () { search(ultimaBusqueda, elementosPorPagina, paginaActualVisualitzada + 2) })

    } catch (error) {

    }
    try {
        document.getElementById("mas3").addEventListener("click", function () { search(ultimaBusqueda, elementosPorPagina, paginaActualVisualitzada + 3) })

    } catch (error) {

    }
    try {
        document.getElementById("next").addEventListener("click", function () { search(ultimaBusqueda, elementosPorPagina, paginaActualVisualitzada + 1) })

    } catch (error) {

    }


    for (let i = 0; i < arrayarticle.length; i++) {
        arrayarticle[i].addEventListener("click", function () { cargarProducto(i) });

    }

}

function crearEventosLogin() {
    try {
        document.getElementsByClassName("Register")[0].addEventListener("click", function () { cargarHtml(register); crearEventosRegister() })

    } catch (error) {
        
    }
    try {
        document.getElementsByClassName("login")[0].addEventListener("click", function () { loginaccount() })

    } catch (error) {
        
    }
}

function crearEventosRegister() {
    document.getElementsByClassName("signup")[0].addEventListener("click", function () { registerUser() })

}
function loginaccount() {
    let email = document.getElementsByClassName("email")[0]
    let password = document.getElementsByClassName("password")[0]
    let actualLogin = new LoginValidator
    actualLogin.validarUsuario(email.value, password.value)


}
function registerUser() {
    let nombre = document.getElementsByClassName("name")[0]
    let apellido = document.getElementsByClassName("secondname")[0]
    let email = document.getElementsByClassName("email")[0]
    let verifymail = document.getElementsByClassName("confirmemail")[0]
    let password = document.getElementsByClassName("password")[0]
    let verifypassword = document.getElementsByClassName("confirmpassword")[0]
    let termsandconditions = document.getElementsByClassName("termandconditions")[0]
    let user = new SignupValidator
    user.crearUsuario(nombre.value, apellido.value, email.value, verifymail.value, password.value, verifypassword.value, termsandconditions.checked)

}
function generarHtmlBusqueda(arrayelements, totalelements, paginaactual) {
    let article = []


    piePaginacion = generarPiePagina(totalelements, paginaactual)

    for (let i = 0; i < arrayelements.length; i++) {
        const element = arrayelements[i];
        let base = `<div class="col-lg-3 col-md-1 p-3"> <div class="row"> <div class="col-3 p-0"> <img class="img-fluid d-block" src="${element.image_url}"> </div> <div class="col-9"> <p class="lead mb-1"> <b>${i}</b> </p> <p class="mb-0">${element.product_name}</p> </div> </div></div>`
        article += base
    }
    resultadosbusqueda = [`py-5 `, `<div class="container"> <div class="row"> <div class="col-md-12 text-center"> <h1>Search result:</h1> </div> </div> <div class="row justify-content-center"> ${article}</div>${piePaginacion}</div>`]

    cargarHtml(resultadosbusqueda)
    crearEventosArticle()
}


function generarPiePagina(total, actual) {
    let botonespie = '<div class="row justify-content-center"> <div ><ul class="pagination">'
    actual = Number(actual)
    let numeroDePaginasTotals = Math.floor(total / 20)
    if (actual - 1 > 0) { botonespie += `<li class="page-item "> <a class="page-link prev" id=prev>Prev</a> </li> <li class="page-item prev"> <a class="page-link" id=menos1 >${actual - 1}</a> </li>` }
    botonespie += `<li class="page-item active"> <a class="page-link actual" id=actual>${actual}</a> </li>`
    if (actual + 1 <= numeroDePaginasTotals) { botonespie += `<li class="page-item "> <a class="page-link plus1"id=mas1 >${actual + 1}</a> </li>` }
    if (actual + 2 <= numeroDePaginasTotals) { botonespie += `<li class="page-item "> <a class="page-link plus2"id=mas2 >${actual + 2}</a> </li>` }
    if (actual === 1 && actual + 3 <= numeroDePaginasTotals) {
        botonespie += `<li class="page-item "> <a class="page-link plus3" id=mas3 >${actual + 3}</a> </li>`
    }
    if (actual + 1 <= numeroDePaginasTotals) {
        botonespie += `<li class="page-item "> <a class="page-link next"id=next >next</a> </li>`
    }
    return botonespie + '</ul></div></div>'
}


function cargarProducto(posicionArray) {
    searchbar.value =""
    let element = arrayProductosRespuesta[posicionArray]
    product[1] = `<div class="container"> <div class="row"> <div class="px-lg-5 d-flex flex-column justify-content-center col-lg-6"> <h1 >${element.product_name}</h1><p class="mb-3 lead" ><img alt='Barcode Generator TEC-IT'
    src='https://barcode.tec-it.com/barcode.ashx?data=${element.code}&code=Code128&dpi=96&dataseparator='/> <p class="mb-3 lead" > Ingredients :${filterUndefined(element.ingredients_text_with_allergens_en)}</p> </div> <div class="col-lg-6"><img class="img-fluid d-block" src=${element.image_url}></div> </div> </div> <div class="container"><div class="row"> <div class="col-md-12"><div class="table-responsive"> <table class="table table-striped table-light "><thead> <tr> <th scope="col">Nutrition facts	</th><th scope="col">As sold for 100 g / 100 ml</th></tr> </thead> <tbody> <tr> <th scope="row">Energy		</th><td>${element.nutriments.energy_value}${element.nutriments.energy_unit}</td></tr><tr> <th scope="row">Fat	</th> <td>${element.nutriments.fat_value}${element.nutriments.fat_unit}</td> </tr></tr> <tr> <th scope="row">Carbohydrates	</th> <td>${element.nutriments.carbohydrates_value}${element.nutriments.carbohydrates_unit}</td></tr> <tr> <th scope="row">-sugars	</th> <td>${element.nutriments.sugars_value}${element.nutriments.sugars_unit}</td> </tr> <tr> <th scope="row">Proteins	</th> <td>${element.nutriments.proteins_100g}${element.nutriments.proteins_unit}</td> </tr><tr> <th scope="row">Salt	</th> <td>${element.nutriments.salt_100g}${element.nutriments.salt_unit}</td> </tr><tr> <th scope="row"> Sodium	</th> <td>${element.nutriments.sodium_100g}${element.nutriments.sodium_unit}</td> </tr> </tbody> </table> </div> </div> </div> </div>`
    cargarHtml(product)
}

function filterUndefined(value) {
    if (value == undefined || value == null) {
        return "information not available"
    }

    return value
}

// const fetch = require("node-fetch");
function search(query, numberperpagina, paginaactual) {
    // console.log(query, numberperpagina, paginaactual)
    fetch(`https://es.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=${numberperpagina}&page=${paginaactual}&search_simple=1&json=true`)
        .then(response => response.json())
        .then(data => {
            arrayProductosRespuesta = data.products
            paginaActualVisualitzada = Number(data.page)
            ultimaBusqueda = query
            generarHtmlBusqueda(data.products, data.count, data.page)
            return data; // no consigo capturar el return me da undefined a causa de la promise, le he puesto await al llamar a la funcion y tampoco me funciona.
        })
        .catch(error => console.error(error));

}


class Usuario {
    constructor(nombre, apellido, email, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.password = password
    }
}

class LoginValidator {
    constructor() {

    }
    validarUsuario(usuario, password) {
        let objecteUsuari = JSON.parse(leerUsuarioBDD(usuario))
      //  console.log(objecteUsuari)
        if (objecteUsuari != null) {
            if (password != null) {
                if (objecteUsuari.password === password) {
                    if (objecteUsuari.email === usuario) {
                        mensajeError(window, document, jQuery, "success", "User loged in");
                        console.log("logedin")
                        userlogged(objecteUsuari)
                        return
                    }
                } else {
                    mensajeError(window, document, jQuery, "error", "Password error");
                   // console.log("Password error")
                }

            }
        } else {
            mensajeError(window, document, jQuery, "error", "User does not exist"); //console.log("usuari no existent a la bdd")
        }

    }

}
class SignupValidator {

    crearUsuario(nombre, apellido, email, verifymail, password, verifypassword, termandconditions) {

        if (nombre != "") {
            if (apellido != "") {
                if (email != "") {
                    if (verifymail != "") {
                        if (password != "") {
                            if (verifypassword != "") {
                                if (termandconditions) {
                                    if (this.verifymail(email, verifymail)) {
                                        if (this.emailNotExistInDB(email)) {
                                            if (this.verifypassword(password, verifypassword)) {
                                                mensajeError(window, document, jQuery, "success", "User created");
                                                cargarHtml(spin)
                                                let createNewUser = new Usuario
                                                createNewUser.nombre = nombre
                                                createNewUser.apellido = apellido
                                                createNewUser.password = password
                                                createNewUser.email = email
                                                this.grabrarUsuario(email, JSON.stringify(createNewUser))
                                                setTimeout(function () {
                                                    cargarHtml(login);
                                                    eventobotonlogin()
                                                }, 2000);

                                            }
                                        } else {
                                            let mensaje = "User already registred"
                                            mensajeError(window, document, jQuery, "error", mensaje);
                                           // console.log(mensaje)
                                        }
                                    }
                                } else {
                                    let mensaje = "Accept terms and conditions"
                                    mensajeError(window, document, jQuery, "error", mensaje);
                                    //console.log(mensaje)
                                }
                            } else {
                                let mensaje = "Verify mail not be blank"
                                mensajeError(window, document, jQuery, "error", mensaje);
                                //console.log(mensaje)
                            }
                        } else {
                            let mensaje = "Verify password not be blank"
                            mensajeError(window, document, jQuery, "error", mensaje);
                           // console.log(mensaje)
                        }
                    } else {
                        let mensaje = "Enter your password"
                        mensajeError(window, document, jQuery, "error", mensaje);
                       // console.log(mensaje)
                    }

                } else {
                    let mensaje = "Enter your email"
                    mensajeError(window, document, jQuery, "error", mensaje);
                   // console.log(mensaje)
                }
            } else {
                let mensaje = "Enter your second name"
                mensajeError(window, document, jQuery, "error", mensaje);
               // console.log(mensaje)
            }
        } else {
            let mensaje = "Enter your name"
            mensajeError(window, document, jQuery, "error", mensaje);
          //  console.log(mensaje)
        }
    }
    emailNotExistInDB(value) {
        if (leerUsuarioBDD(value) === null) {
            return true
        }
        return false
    }
    grabrarUsuario(email, data) {
        localStorage.setItem(email, data)

    }

    verifypassword(password, verifypassword) {
        let passwordRegex = RegExp("[a-zA-Z0-10]{5,}")
        if (password === verifypassword) {

            if (passwordRegex.test(password)) {
                return true
            } else {
                let mensaje = "Passwords minium lenth 5 digits"
                mensajeError(window, document, jQuery, "error", mensaje);
              //  console.log(mensaje)
            }


        } else {
            let mensaje = "Passwords does not match"
            mensajeError(window, document, jQuery, "error", mensaje);
          //  console.log(mensaje)
            return false

        }
    }
    verifymail(email, verifymail) {
        let emailRegex = RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")
        if (email === verifymail) {
            if (emailRegex.test(email)) {
                return true

            } else {
                let mensaje = "Email does not match"
                mensajeError(window, document, jQuery, "error", mensaje);
               // console.log(mensaje)
                return false

            }
        } else {
            let mensaje = "Email not valid"
            mensajeError(window, document, jQuery, "error", mensaje);
          //  console.log(mensaje)
            return false

        }
    }
}
function leerUsuarioBDD(usuario) {
    return localStorage.getItem(usuario)
}
function userlogged(userobject) {
    actualUserLogged = userobject
    cargarHtml(spin)
    setTimeout(function () {
        document.getElementsByClassName("iconuser")[0].innerHTML = `<a><i class= 'fa d-inline fa-lg fa-user '> ${userobject.nombre} ${userobject.apellido}</i></a>`
        writeStatusLogin(userobject.email)
        let logedin = ["h-50 d-flex align-items-center borrar", " <div class= 'container '> <div class= 'row ' id= 'fasdfsd '> <div class= 'mx-auto text-center col-md-6 '> <h1 class= 'display-4 text-dark '>Loged In</h1> <p class= 'lead text-primary '>Lead paragraph -&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> </div> </div>"]
        botonLogIn.querySelector("a").innerText = "Account"
        eventobotonlogin(botonLogIn.querySelector("a").innerText)
        document.getElementsByClassName("iconuser")[0].addEventListener("click", function () {
            logout()
        })
        cargarHtml(logedin)
        setTimeout(function () {
            cargarHtml(principal);
        }, 2000);
    }, 2000);

}

function writeStatusLogin(user) {
   // console.log(user)
    localStorage.setItem("logged", user)
}
function readStatusLogin() {
    if (localStorage.getItem('logged') != undefined) {
        //console.log("recuperando usuario loginado")
        userlogged(JSON.parse(leerUsuarioBDD(localStorage.getItem('logged'))))
        document.getElementsByClassName("iconuser")[0].addEventListener("click", function () {
            logout()
        })
        mensajeError(window, document, jQuery, "success", "User loged in");

        crearEventosLogin()

    }

}
function logout() {
    localStorage.removeItem("logged");
    mensajeError(window, document, jQuery, "success", "Logout");
    document.getElementsByClassName("iconuser")[0].innerHTML = "";
    botonLogIn.querySelector("a").innerText = "Login"
    // document.getElementsByClassName("login")[0].addEventListener("click", function () { loginaccount() })


}
readStatusLogin()
let tempuserdemo = new Usuario("Joaquim","pineda","a@a.com","aaaaaa")
localStorage.setItem(tempuserdemo.email,JSON.stringify(tempuserdemo))

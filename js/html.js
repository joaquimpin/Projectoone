let mainHtml = document.getElementsByClassName("borrar")[0]
let botonPrincipal = document.getElementById("Home")
let botonLogIn = document.getElementById("Login")
let botonBusqueda = document.getElementById("Search")
let botonContacto = document.getElementById("Contact")
let botonFaq = document.getElementById("FaQ")
let submmitButton = document.getElementById("submit")
let searchbar = document.getElementById("searchtext")
let elementoAcargar = []
let principal = ["h-50 d-flex align-items-center borrar", " <div class='container'>  <div class='row' id='fasdfsd'>  <div class='mx-auto text-center col-md-6'>  <h1 class='display-1 text-dark'>FoodSearch</h1>  <p class='lead text-primary'>Lead paragraph -&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  </div>  </div> </div>"]
let login = ["py-5 text-center text-white borrar", "<div class='container'> <div class='row'> <div class='p-5 col-lg-6 col-10 mx-auto border'> <h1 class='mb-4 text-secondary'>Login</h1> <form> <div class='form-group'> <input type='email' class='form-control' placeholder='Email' id='form14'> </div> <div class='form-group'> <input type='password' class='form-control' placeholder='Password' id='form15'> <small class='form-text text-muted text-right'> <a href='#'> Already have an account?</a> </small> </div> <button type='submit' class='btn btn-primary'>Enter</button> </form> </div> </div>"]
let resultadosbusqueda = ["h-50 d-flex align-items-center ", "<div>nothing to show</div> "]
let contacto = ["py-3 text-center borrar", " <div class='container'>      <div class='row'>        <div class='mx-auto p-4 col-md-7'>          <h1 class='mb-4'>I am so happy</h1>          <form>            <div class='form-group'> <input type='email' class='form-control' id='form33' placeholder='Your Email'> </div>            <div class='form-group'> <input type='text' class='form-control' id='form34' placeholder='Subject'> </div>            <div class='form-group'> <textarea class='form-control' id='form35' rows='3' placeholder='Your message'></textarea> </div> <button type='submit' class='btn btn-block btn-outline-info'>Send</button>          </form>        </div>      </div>    </div>"]
let faq = ["py-5 borrar", "<div class='container'> <div class='row'> <div class='col-md-12'> <h1 class='display-4 text-center'>FaQ's</h1> </div> </div> </div> <div class='container'> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> <div class='row'> <div class='mx-auto col-md-8'> <h1 class='mb-3'>I lie close to the earth, a thousand unknown plants are noticed by me.</h1> <p class='lead'>When, while the lovely valley teems with vapour around me. </p> </div> </div> </div>"]
let product = ["py-5 borrar", "<div class='container'>       <div class='row'>         <div class='px-lg-5 d-flex flex-column justify-content-center col-lg-6'>           <h1 contenteditable='true'>Nutella</h1>           <p class='mb-3 lead' contenteditable='true'>Código de barras: 3017620422003 (EAN / EAN-13)</p>         </div>         <div class='col-lg-6'> <img class='img-fluid d-block' src='https://static.pingendo.com/cover-moon.svg'> </div>       </div>     </div>     <div class='container'>       <div class='row'>         <div class='col-md-12'>           <div class='table-responsive'>             <table class='table table-striped table-dark'>               <thead>                 <tr>                   <th scope='col'>#</th>                   <th scope='col'>${element.name}</th>                   <th scope='col'>Last</th>                 </tr>               </thead>               <tbody>                 <tr>                   <th scope='row'>1</th>                   <td>Mark</td>                   <td>Otto</td>                 </tr>                 <tr>                   <th scope='row'>2</th>                   <td>Jacob</td>                   <td>Thornton</td>                 </tr>                 <tr>                   <th scope='row'>3</th>                   <td>Larry</td>                   <td>the Bird</td>                 </tr>               </tbody>             </table>           </div>         </div>       </div>     </div>"]
botonPrincipal.addEventListener("click", function () { elementoAcargar = principal; cargarHtml() })
botonLogIn.addEventListener("click", function () { elementoAcargar = login; cargarHtml() })
botonBusqueda.addEventListener("click", function () { elementoAcargar = resultadosbusqueda; cargarHtml() })
botonContacto.addEventListener("click", function () { elementoAcargar = contacto; cargarHtml() })
botonFaq.addEventListener("click", function () { elementoAcargar = faq; cargarHtml() })
submmitButton.addEventListener("click", function () { generarHtmlBusqueda(search(searchbar.value)) })
// searchbar.value
// submmitButton.addEventListener("click",function(){search(searchbar.value)})
elementoAcargar = principal
cargarHtml()
let arrayProductosRespuesta = []
generarHtmlBusqueda(search("nutella"))

function cargarHtml() {
    console.log("carrgant nou HTMl")
    mainHtml.innerHTML = ""
    mainHtml.classList = elementoAcargar[0]
    mainHtml.innerHTML = elementoAcargar[1]

}

function crearEventosArticle() {
    let arrayarticle = mainHtml.getElementsByClassName("col-lg-3 col-md-1 p-3")
    for (let i = 0; i < arrayarticle.length; i++) {
        arrayarticle[i].addEventListener("click", function () { cargarProducto(i) });

    }
}
function generarHtmlBusqueda(arrayelements) {
    let article = []
    for (let i = 0; i < arrayProductosRespuesta.length; i++) {
        const element = arrayProductosRespuesta[i];
        let base = `<div class="col-lg-3 col-md-1 p-3"> <div class="row"> <div class="col-3 p-0"> <img class="img-fluid d-block" src="${element.image_url}"> </div> <div class="col-9"> <p class="lead mb-1"> <b>${i}</b> </p> <p class="mb-0">${element.product_name}</p> </div> </div>
        </div>`
        article += base

    }
    resultadosbusqueda = [`py-5 `, `<div class="container"> <div class="row"> <div class="col-md-12 text-center"> <h1>Search result:</h1> </div> </div> <div class="row justify-content-center"> ${article} </div></div>`]
    elementoAcargar = resultadosbusqueda

    cargarHtml()
    crearEventosArticle()
}

function cargarProducto(posicionArray) {
    let element = arrayProductosRespuesta[posicionArray]
console.log(element)
    product[1] = `<div class="container"> 
    <div class="row"> 
    <div class="px-lg-5 d-flex flex-column justify-content-center col-lg-6"> 
    <h1 >${element.product_name}</h1>
     <p class="mb-3 lead" > Barcode :${element.code}</p> 
     <p class="mb-3 lead" > Ingredients :${element.ingredients_text_with_allergens_en}</p> 
     </div> <div class="col-lg-6">
      <img class="img-fluid d-block" src=${element.image_url}>
       </div> </div> </div> 
       <div class="container">
        <div class="row"> 
        <div class="col-md-12">
         <div class="table-responsive"> 
         <table class="table table-striped table-light ">
          <thead> <tr> <th scope="col">Nutrition facts	</th>
           <th scope="col">As sold for 100 g / 100 ml</th>
            </tr> </thead> <tbody> <tr> <th scope="row">Energy		</th>
             <td>${element.nutriments.energy_value}${element.nutriments.energy_unit}</td></tr>
              <tr> <th scope="row">Fat	</th> 
              <td>${element.nutriments.fat_value}${element.nutriments.fat_unit}</td> </tr>
               </tr> <tr> <th scope="row">Carbohydrates	</th> <td>${element.nutriments.carbohydrates_value}${element.nutriments.carbohydrates_unit}</td>
                </tr> <tr> <th scope="row">-sugars	</th> <td>${element.nutriments.sugars_value}${element.nutriments.sugars_unit}</td> </tr> 
                <tr> <th scope="row">Proteins	</th> <td>${element.nutriments.proteins_100g}${element.nutriments.proteins_unit}</td> </tr>
                 <tr> <th scope="row">Salt	</th> <td>${element.nutriments.salt_100g}${element.nutriments.salt_unit}</td> </tr> 
                 <tr> <th scope="row"> Sodium	</th> <td>${element.nutriments.sodium_100g}${element.nutriments.sodium_unit}</td> </tr> 
                 </tbody> </table> </div> </div> </div> </div>`
    console.log(product)
    elementoAcargar = product
    cargarHtml()
}


function generarHtmlProductos(respuesta) {
    console.log(respuesta)
    let stringproductes = ""
    respuesta.forEach(element => {
        console.log(element.product_name)
        let html = `<article> <img src="${element.image_url}" alt="${element.product_name}"></img> 
        Nombre: ${element.product_name}</article>`
        stringproductes += html
    })
    cargarHtml(stringproductes)
    crearEventosArticle()
}
// const fetch = require("node-fetch");

function search(query) {
    console.log(query)
    fetch(`https://es.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=true`)
        .then(response => response.json())
        .then(data => {
            arrayProductosRespuesta = data.products
            generarHtmlBusqueda()
            return data; // no consigo capturar el return me da undefined a causa de la promise, le he puesto await al llamar a la funcion y tampoco me funciona.
        })
        .catch(error => console.error(error));

}

//buscar per codi de barras
// https://world.openfoodfacts.org/api/v0/product/${barcode}.json

//restultats random per carrusel
//https://robotoff.openfoodfacts.org/api/v1/questions/random?country=en:united-states&lang=en&count=5&insight_types=category
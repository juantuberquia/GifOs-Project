const api_key = "TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ"

window.onload = function() 
{
    suggestionsGif()
    topVideos()

}

//escuchar click del boton search
document.getElementById("button").addEventListener("click", function (  ){

    let resul = document.getElementById("search-gif").value

    if(resul === ""){

        noShowTitleGif()
        getData(data)
        showHistorySearch(data)
        noShowInputText()

    }
   
    // localStorageSearch(resul)
    
    noShowTitleGif()
    getData(resul)
    showHistorySearch(resul)
    noShowInputText()

  })

// clic a boton ver mas y realizar busqueda
  document.getElementById("boton-1").addEventListener("click", function (){

    console.log ( "este es el vector " + vectorTitle[0])

     noShowTitleGif()
    getData( vectorTitle[0])
    showHistorySearch( vectorTitle[0])
    noShowInputText()
    
  })

  document.getElementById("boton-2").addEventListener("click", function (){

    console.log ( "este es el vector " + vectorTitle[1])

     noShowTitleGif()
    getData( vectorTitle[1])
    showHistorySearch( vectorTitle[1])
    noShowInputText()
    
  })

  document.getElementById("boton-3").addEventListener("click", function (){

    console.log ( "este es el vector " + vectorTitle[2])

     noShowTitleGif()
    getData( vectorTitle[2])
    showHistorySearch( vectorTitle[2])
    noShowInputText()
    
  })

  document.getElementById("boton-4").addEventListener("click", function (){

    console.log ( "este es el vector " + vectorTitle[3])

     noShowTitleGif()
    getData( vectorTitle[3])
    showHistorySearch( vectorTitle[3])
    noShowInputText()
    
  })


//  seleccionar tema, COMO HACERLO MAS RAPIDO, hAY QUE CAMBIAR SON MUCHOS TEMAS?
  document.getElementById("dropDown"),addEventListener("click", function(){

    let tag = document.getElementById("content-Themes")
    let themeBody = document.getElementById("themeBody")
    let themeBodyNight = document.getElementById("themeNight")
    let themeBodyDay = document.getElementById("themeDay")
    let text, changeThemeLogo;


    if ( tag.style.display === "none" ){
        
        tag.style.display= "block"

         themeBodyNight.addEventListener
            ("click", function () {

                themeBody.style.backgroundColor = "#110038"

                text = document.getElementById("colorTextGuifos") 
                text.style.color = "#FFFFFF"

                changeThemeLogo = document.getElementById("themeLogo")
                changeThemeLogo.setAttribute("src", "./img/gifOF_logo_dark.png")

            } )      
            
            themeBodyDay.addEventListener("click", function(){

                themeBody.style.backgroundColor = "#fff4fd"
                text = document.getElementById("colorTextGuifos")
                text.style.color = "black"

            })
    
    }

    else{
        tag.style.display = "none"
    }
  
  })

//  mostrar historial de busqueda
function showHistorySearch(dataSearch){

    let newDiv = document.createElement("div")
    let newP = document.createElement("p")
    let newContentP= document.createTextNode("#" +  dataSearch)

    newP.appendChild(newContentP)
    newDiv.appendChild(newP)


    newDiv.className += " historySearch"   
    newP.className += " elementChild"
   
    let list = document.getElementById("divParent");   
    list.insertBefore(newDiv, list.childNodes[1]); 
    
}

// function localStorageSearch (valueSearch){
//     let cont = 1

//     let objSearch = {

//         getSearch : valueSearch
    
//     }

    
//     localStorage.setItem( cont,  JSON.stringify(objSearch))

//     cont++
// }

// peticion videos tendencias
async function topVideos (){

    let urlTrendEndpoint  = "//api.giphy.com/v1/gifs/trending?api_key=TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ&limit=8"

    let stateRequest = await fetch(urlTrendEndpoint)
    let responseJson = await stateRequest.json()

    // console.log("onjeto del trending :" + responseJson)
    // console.log(responseJson)

    let arrayUrl =[], index=0;
    responseJson.data.map(function (item) {
    arrayUrl[index]= item.images.fixed_height_still.url
        index++
    }) 

    console.log(responseJson)

    showTredingGIf(arrayUrl)
   
}

// mostrar videos trend
function showTredingGIf( arrayUrlData ){

    let vectorTrending = document.getElementsByClassName("gifTrending")

     for(let i  =0 ; i <= vectorTrending.length; i++ ){
                
        vectorTrending[i].setAttribute('src', arrayUrlData[i])

    }  
}

// obtener gif random
var vectorTitle = []
async function suggestionsGif(){

    let urlRandom = "https://api.giphy.com/v1/gifs/random?api_key=TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ&limit=4"
    let  stateRequest, responseJson,vectorSuggestions = [],
     datoA;

    let newVector
    for( let i=0; i <=3 ; i++ ){

    stateRequest = await fetch(urlRandom)
     responseJson = await stateRequest.json()

        vectorSuggestions[i] = responseJson.data.images.fixed_height_still.url

        vectorTitle[i] = responseJson.data.title
    }

    // console.log(vectorTitle)
    
    addTitleSuggestion(vectorTitle)
    showSuggetionsGif(vectorSuggestions)

}

// inserta title al sugerencias gif
function addTitleSuggestion(valueTitle) {

    let item =0
    let dato = document.getElementsByClassName("contentValue")
    let datoToString 


     for( item =0; item < valueTitle.length; item++){

        datoToString = valueTitle[item]

        dato[item].textContent = "#" + datoToString.substr(0,13)

    }

}


// no mostrar title, cuando haga peticion
function noShowTitleGif(){

    let  tag=[]

    tag = document.getElementsByClassName("ValueSuggestionGif")

    for (let i = 0; i < tag.length; i++)

    {
        console.log( tag[i].style.display= "none")
    }
     
}

// muestra gifs tendencias
function showSuggetionsGif(Urlsuggestions){

    let tagIdGif= document.getElementsByClassName("gif-suggetions")

    for(let i = 0; i <= tagIdGif.length; i++){

    tagIdGif[i].setAttribute('src', Urlsuggestions[i]) 

    }

}

// no mostrar placeholder de los inputs
function noShowInputText (){

    let showInput = document.getElementById("Results")
    showInput.style.display = "block"

    let noShow= document.getElementsByClassName('content-text')

    for(let e=0; e<=noShow.length; e++){    
   
    if( noShow[e].style.display = "inline-block"    ){

        noShow[e].style.display = "none"      

        }    
  
    }

}

// obtener datos del search
async function getData (resul) { 
    
    try{
        let URL=[], con=0;

    let res = await fetch ('http://api.giphy.com/v1/gifs/search?q='+resul+"&api_key="+api_key+"&limit=12")

     let dato =  await res.json()

     console.log( dato)

        dato.data.map(function(elemento){

        // URL[con]= elemento.images.downsized_large.url
        // data.images.downsized_medium.url
        URL[con]=elemento.images.fixed_height_still.url;
        
        // console.log("este es el data tamaño fixed "  + URL[con])

        con++;

        })  

        showGif(URL) 
    }     
    
    catch ( error ){
        console.log("error")
    }
}

// muestra consulta de gif (search)
function showGif(URL){

        let vectorGif = document.getElementsByClassName("gif")

        
    console.log("entro al show gif")
    console.log(typeof(URL))

    for(let i  =0 ; i <= vectorGif.length; i++ ){
        
        if( typeof(URL) === "string" ) {

            vectorGif[i].setAttribute('src', URL)

        }

        else{

            vectorGif[i].setAttribute('src', URL[i])

        }
        
        

    }  
 
}




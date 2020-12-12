var input = document.querySelector(".input-box")
var output = document.querySelector(".output-box")
var button = document.querySelector(".translate-btn")
var url = "https://api.funtranslations.com/translate/ferb-latin.json"

button.addEventListener("click",eventHandler);

function contructURL(text){
    var encodedURI = encodeURI(text);
    console.log("url done")
    return url + "?text=" + encodedURI;
    
}
function eventHandler() {
    console.log("button");
    var text = input.value;

    fetch(contructURL(text))
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        output.innerText = json.contents.translated;
    })
    .catch((error)=>alert("error occured"))
}
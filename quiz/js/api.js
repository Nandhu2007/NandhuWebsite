var c = ""
function fetching() {
    let url = "https://api.mathjs.org/v4/?expr="
    var exp =  document.getElementById("expression").value ;
    console.log(url+exp)
    fetch (url+exp)
    .then(x => x.text())
    .then(y => document.getElementById("output").innerHTML = y);
}
function clearing() {
    document.getElementById('expression').value = '' ;
    
    document.getElementById("output").innerHTML = "";

    
}
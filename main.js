function getParagraph(){
    var inputs = [];
    for(var i = 1; i <=6 ; i++){
        inputs.push(document.getElementById("input_" + i).value);
    }
    document.getElementById("hidden").innerHTML = inputs.join(". ");
}

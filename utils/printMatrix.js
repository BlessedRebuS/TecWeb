//dimensione matrice
var x=4; 
var y=4;

function printMatrix(){
    
	//nel div matrix stampo le text area
    var div=myGetElementById('matrix');
    //var str='<input type="text" id="'+i+j+'" value="1" onchange="calcola()">';
    div.innerHTML="";

    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            div.innerHTML+=('<input type="text" id="'+i+j+'" value="1" onchange="calcola()">');
        }
        div.innerHTML+='<br>';
    }
}


function calcola(){
    var ok=true;
    var res="";

    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            var el=myGetElementById(i+''+j);
            if (isNaN(el.value)) ok=false;
            res=res+el.value+" ";
        }
    }

    alert(res);
    request("http://localhost:8080/TW_Esame_201223_2/calcola?matrix="+res, myGetElementById('res'));
	//in res salvo il risultato
}
var count=0;
function incrementing(){
    count+=1;
    document.getElementById("count").innerHTML=count;
}

function saving(){
    document.getElementById("count").innerHTML=0;
    var history = document.getElementById("prev").outerHTML;
    document.getElementById("prev").innerHTML=history+" "+count;
    count=0
}
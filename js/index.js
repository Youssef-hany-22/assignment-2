var qoute =[
    {qoute:"“Be yourself; everyone else is already taken.”",name:"― Oscar Wilde"},
    {qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",name:"― Albert Einstein"},
    {qoute:"“So many books, so little time.”",name:"― Frank Zappa"},
    {qoute:"“You only live once, but if you do it right, once is enough.”",name:"― Mae West"},
    {qoute:"“If you tell the truth, you don't have to remember anything.”",name:"― Mark Twain"},

];
var z=0; 
function randomQoute(){
      
    var random =Math.floor(Math.random() * qoute.length);

   var x = qoute[random].qoute ;
   var y = qoute[random].name;   
 
if (z!=random){
    document.getElementById("qoute").innerHTML=x;  
    document.getElementById("qouteName").innerHTML=y;  
   
    z=random
}
else{
    randomQoute()
}


}



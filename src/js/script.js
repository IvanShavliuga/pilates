let comments=function(n,i,d){
   this.name=n;
   this.img=i;
   this.data=d;
   
}

var com=[
{
  name:"Дарья Прокопенко",
  img:"test-1.png",
  data:"Я уже три месяца хожу на пилатес и сбросила 20 килограмм. И получила коллоссальное удовольствие"
},
{
  name:"Денис Федоров",
  img:"../images/test-2.png",
  data:"Я уже два месяца хожу на пилатес и выпровил себе осанку. И получил коллоссальное удовольствие"
},
{
  name:"Евгения Кипелова",
  img:"../images/test-3.png",
  data:"Я уже два месяца хожу на пилатес и сбросила 10 килограмм. И получила коллоссальное удовольствие"
}  ];
var  ind=0;
function slide(indimg,indbtn){
   switch(indbtn){
       case "next":
           if(ind < 2){
           	   $("#com"+(ind+1)).removeClass("active");
               $("#com"+(ind+2)).addClass("active");
               ind++;
           }else{
           	   $("#com3").removeClass("active");
               $("#com1").addClass("active");
               ind=0;
           }
           
           break;
       case "prev":
           if(ind > 0) {
               $("#com"+(ind+1)).removeClass("active");
               $("#com"+ind).addClass("active");
               ind--;
           }
           else{
           	    $("#com1").removeClass("active");
               $("#com3").addClass("active");
               ind=2;
           } 
           
           break;
   }  
   $(".comments__box__text").text(com[ind].data);
   $(".comments__box__name").text(com[ind].name);
   
   $(".comments__box__photo").attr("id","comimg"+(ind+1));   
   $(".comments__box__photo").attr("data-id", "comimg"+(ind+1))
   
}
$(document).ready(function(){
    $(".comments__box__photo").attr("id","comimg"+(ind+1));   
    $(".comments__box__photo").attr("data-id", "comimg"+(ind+1))
    $("#next").click(function(){
        slide(ind,"next");
         

    });
    $("#prev").click(function(){
        slide(ind,"prev");
         
    });
  
});

$(function(){
$("#hello").click(function() {
console.log("Helllo, JQuery");
$("#name").addClass("display-1");

$("#photo").attr("src","images/photo2.jpeg");
    
});

$("#getname").click(function() {
    var name = $("#name").html();
    console.log(name);
        
    });


    $("#setname").click(function() {
     $("#name").html("2PAT");
      
            
        });

        $("#addhobby").click(function() {
            var newhobby = $("#newhobby").val();
            $("#hobby").append("<li>" + newhobby + "</lit>");
            $("#newhobby").val("");
             
                   
               });


               $("#clear").click(function() {
                $("#hobby").empty();
                 
                       
                   });


});


// alert("Hello, JS");
// function hello(){

//     console.log("Hello, JS");

// }
// function getDOM(){
// var name = document.getElementById("name").innerHTML;
// console.log(name);



// function setDOM(){

// document.getElementById("name").innerHTML="PAT";

// }
// function addhobby(){

// var newhobby = document.getElementById("newhobby").value;
// console.log(newhobby);

// document.getElementById("hobby").innerHTML = "<li>" + newhobby + "</li>";
// }

// function clear(){

//     document.getElementById("hobby").innerHTML = "";
//     console.log();
    

// }
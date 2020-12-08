let title = document.getElementsByTagName("h1")[0].innerText;

title = document.getElementById("header2").innerText;
console.log(title);

function helloworld(){
    let value = document.getElementById("umur").value;
    document.getElementsByName("p")[1].innerText = value;
    document.querySelector(".header").stylecolor="red";
    document.querySelector("header").style.fontsize = "3em";
    document.querySelector(".header").style.backgroundColor = "yellow";

    let span = document.getElementsByTagName("span")[0];
}
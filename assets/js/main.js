var b = 1;
function thisFunction($)
{
    var c = 2;

    if (b%c == 0) {
        console.log("You clicked an odd amount of times!");
    } else {
        console.log("You clicked an even amount of times!");
    }
    b += 1;


    if (b > 10)
    {
       window.location.href = "FacePage.html";
    }
}

document.getElementById("Button1").addEventListener("click", thisFunction);
document.write("Loading webpage completed");
window.alert("Alert!");

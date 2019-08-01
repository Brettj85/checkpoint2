//change-white

document.getElementById("change-white").addEventListener('click', function(){ ColorChange(false);}, false);
document.getElementById("change-black").addEventListener('click', function(){ ColorChange(true);}, false);

function ColorChange(isBlack)
{
    if (isBlack) 
    {
        document.getElementById("MainContentBio").className = "mainContentBio-black";
        document.getElementById("style-2").className = "bio-main-black";
        document.getElementById("main-content-section-1").className = "main-content-section-black";
        document.getElementById("main-content-section-2").className = "main-content-section-black";
        document.getElementById("main-content-section-3").className = "main-content-section-black";
        document.getElementById("main-content-section-4").className = "main-content-section-black";
    }
    else
    {
        document.getElementById("MainContentBio").className = "mainContentBio-white";
        document.getElementById("style-2").className = "bio-main-white";
        document.getElementById("main-content-section-1").className = "main-content-section-white";
        document.getElementById("main-content-section-2").className = "main-content-section-white";
        document.getElementById("main-content-section-3").className = "main-content-section-white";
        document.getElementById("main-content-section-4").className = "main-content-section-white";
    }
}
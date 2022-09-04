elem = document.getElementById('clockId');
border = true;
function changeRoundness()
{
        if(elem.style.borderRadius != "15%")
        elem.style.borderRadius = "15%";
        else
        elem.style.borderRadius = "50%";

   
}
function changeImage()
{
    

    if(elem.style.background != "transparent")
    elem.style.background  = "transparent";
    else
    {
        elem.style.background = "url('/img/clock.png')";
        elem.style.backgroundSize ="cover";
    }
   
    
    // if(elem.style.opacity!="0")
    // elem.style.opacity="0";
    // else
    // elem.style.opacity="1";
}

function addImage(){
    elem2 = document.getElementById("formFile");
}
function changeLights(){
    if(elem.style.boxShadow != "none")
    {
        elem.style.boxShadow = "none";
        border =false;
        switc = document.getElementById("flexSwitchCheckDefault");
        switc.disabled=true;
    }
   
   else
   {
        elem.style.boxShadow ="0 -15px 15px rgba(255, 255, 255, 0.05),inset 0 -15px 15px rgba(255, 255, 255, 0.05),0 15px 15px rgba(0, 0, 0, 0.1),inset 0 15px 15px rgba(0, 0, 0, 0.1)";
        border =true;
        switc = document.getElementById("flexSwitchCheckDefault");
        switc.disabled=false;
    }
    
}
function changeSeconds(){
    elem3 = document.getElementById("sc");
    if(elem3.style.opacity != "0")
        elem3.style.opacity = "0";
    else
        elem3.style.opacity = "1";
}
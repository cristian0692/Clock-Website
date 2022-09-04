
function changeRoundness()
{
    elem = document.getElementById('clockId');
    if(elem.style.borderRadius != "15%")
    elem.style.borderRadius = "15%";
    else
    elem.style.borderRadius = "50%";
}
function changeImage()
{
    elem = document.getElementById('clockId');

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
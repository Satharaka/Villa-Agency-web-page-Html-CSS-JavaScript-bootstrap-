//------Nav bar section-------


var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) 
  {
    document.getElementById("navbar").style.top = "0";
  } 
  else 
  {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}



document.getElementById("submit").onclick=function()
{
     if(document.getElementById("che").value!=0)
     {
       document.getElementById("empty4").innerHTML= "<p>" +"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse, quia aliquam maxime laudantium ducimus dolor quis quas obcaecati odit dolorum pariatur sapiente? Praesentium quo illum ipsam ut eum delectus." +"</p>";
     }

}
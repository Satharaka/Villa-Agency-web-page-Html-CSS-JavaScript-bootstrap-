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




//------about section-------

document.getElementById("link1").onclick=function()
{
    
       document.getElementById("empty1").innerHTML= "<p>" +"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse, quia aliquam maxime laudantium ducimus dolor quis quas obcaecati odit dolorum pariatur sapiente? Praesentium quo illum ipsam ut eum delectus." +"</p>";
}



document.getElementById("link2").onclick=function()
{
    document.getElementById("empty2").innerHTML= "<p>" +"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex ipsa laborum praesentium, architecto obcaecati modi at! Itaque dolorem, animi eligendi nobis esse commodi vel obcaecati laudantium quod, inventore optio."
     +"Dolor est ea repellat culpa amet quas, placeat similique ducimus in iure nam nihil, consectetur, distinctio atque magni. Possimus qui ab repellendus quasi aspernatur, perferendis consectetur beatae soluta nisi tempore?" +"</p>";
}



document.getElementById("link3").onclick=function()
{
    document.getElementById("empty3").innerHTML= "<p>" +"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex ipsa laborum praesentium, architecto obcaecati modi at! Itaque dolorem, animi eligendi nobis esse commodi vel obcaecati laudantium quod, inventore optio."
    +"Eius soluta quis nostrum doloribus, inventore impedit autem tempora, id iure maxime cupiditate tempore? Autem animi iusto, quas hic esse laudantium qui explicabo, laborum nam dicta maxime necessitatibus, repellat similique."+
    +"Dolor est ea repellat culpa amet quas, placeat similique ducimus in iure nam nihil, consectetur, distinctio atque magni. Possimus qui ab repellendus quasi aspernatur, perferendis consectetur beatae soluta nisi tempore?" +"</p>";
}

document.getElementById("link4").onclick=function()
{
    document.getElementById("empty1").style.display="none";
    document.getElementById("empty2").style.display="none";
    document.getElementById("empty3").style.display="none";
}



//---------contact us-------------

document.getElementById("submit").onclick=function()
{
    
       document.getElementById("empty4").innerHTML= "<p>" +"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse, quia aliquam maxime laudantium ducimus dolor quis quas obcaecati odit dolorum pariatur sapiente? Praesentium quo illum ipsam ut eum delectus." +"</p>";
}






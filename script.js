function services(){if(document.getElementById("menulist").style.display=="none") {document.getElementById("menulist").style.display="block";}else{document.getElementById("menulist").style.display="none";}}
var img = ['shusrusa.png','hospital.png','nalbari.png'];
        var i= 0;
        function slide(){
        var imgsrc = document.getElementById("imgslider").src= img[i];
        if (i<(img.length-1)){i++;}else{i=0;}
                       }
      setInterval(slide,1000);
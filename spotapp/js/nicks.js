function drawgrad() {
  var ctx = document.getElementById('main').getContext('2d');

  // Create gradients
  var lingrad = ctx.createLinearGradient(0,0,0,150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(0,50,0,95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;
  
  // draw shapes
  ctx.fillRect(10,10,130,130);
  ctx.strokeRect(50,50,50,50);

}

function ldfile()
{
    var canvas = document.getElementById('main'),
    context = canvas.getContext('2d');
    var inputFileToLoad = document.createElement("input");
    inputFileToLoad.type = "file";
    inputFileToLoad.id = "inputFileToLoad";
    document.body.appendChild(inputFileToLoad);
    //imageLoaded.onload = function(){
    //context.drawImage(inputFileToLoad, 100, 100);
    }
    var buttonLoadFile = document.createElement("button");
    buttonLoadFile.onclick = loadImageFileAsURL;
    buttonLoadFile.textContent = "Load Selected File";
    document.body.appendChild(buttonLoadFile);
     // context.drawImage(buttonLoadFile, 100, 100);
}

function loadImageFileAsURL()
{
    
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                //document.body.appendChild(imageLoaded);
                
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}


function draaw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(480, 0, 20, 500);

        ctx.fillStyle = "rgba(200, 0, 200, 0.5)";
        ctx.fillRect(495, 0, 10, 500);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(400, 30, 405, 500);
    }
}

function drawio() {
    var ctx = document.getElementById('tutorial2').getContext('2d');
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 20 * i) + ',' +
                Math.floor(255 - 42.5 * j) + ',0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}

function drawspot() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i=0;i<6;i++){
      for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                         Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
      }
    }
  }

function drawtran() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // draw background
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0,0,75,75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75,0,75,75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0,75,75,75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75,75,75,75);
  ctx.fillStyle = '#FFF';

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (i=0;i<13;i++){
    ctx.beginPath();
    ctx.arc(75,75,5+5*i,0,Math.PI*2,true);
    ctx.fill();
  }
}



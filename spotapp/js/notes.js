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

<script type="text/javascript" src="js/paper.js"></script>
                <!-- Load the Paper.js library -->
                <script type="text/javascript" src="js/paper.js"></script>
                <!-- Load external PaperScript and associate it with myCanvas -->
                <script type="text/paperscript" src="js/myScript.js" canvas="myCanvas">
                </script>
      
                
var canvasElement = document.getElementById('main');
canvasElement.width = 500;
canvasElement.height = 400;
// Please note: dragging and dropping images only works for
// certain browsers when serving this script online:
var path, position, max;
var count = 0;
var grow = false;
var raster = null;

// As the web is asynchronous, we need to wait for the raster to
// load before we can perform any operation on its pixels.
new Raster('mona').on('load', function() {
	raster = this;
	this.remove();
	resetSpiral();
});

var text = new PointText({
	justification: 'right',
	fontSize: 12,
	content: window.FileReader
		? 'drag & drop an image from your desktop to rasterize it'
		: 'to drag & drop images, please use Webkit, Firefox, Chrome or IE 10'
});

function onFrame(event) {
	if (grow) {
		if (raster && (view.center - position).length < max) {
			for (var i = 0, l = count / 36 + 1; i < l; i++) {
				growSpiral();
			}
			path.smooth();
		} else {
			grow = false;
		}
	}
}

function growSpiral() {
		count++;
		var vector = new Point({
			angle: count * 5,
			length: count / 100
		});
		var rot = vector.rotate(90);
		var color = raster.getAverageColor(position + vector / 2);
		var value = color ? (1 - color.gray) * 3.7 : 0;
		rot.length = Math.max(value, 0.2);
		path.add(position + vector - rot);
		path.insert(0, position + vector + rot);
		position += vector;
}

function resetSpiral() {
	grow = true;

	// Transform the raster, so it fills the view:
	raster.fitBounds(view.bounds);

	if (path)
		path.remove();

	position = view.center;
	count = 0;
	path = new Path({
		fillColor: 'black',
		closed: true
	});

	position = view.center;
	max = Math.min(raster.bounds.width, raster.bounds.height) * 0.5;
}

function onResize() {
	if (raster)
		resetSpiral();
	text.point = view.bounds.bottomRight - [30, 30];
}

function onKeyDown(event) {
	if (event.key == 'space') {
		path.selected = !path.selected;
	}
}

function onDocumentDrag(event) {
	event.preventDefault();
}

function onDocumentDrop(event) {
	event.preventDefault();

	var file = event.originalEvent.dataTransfer.files[0];
	var reader = new FileReader();

	reader.onload = function (event) {
		var image = document.createElement('img');
		image.onload = function () {
			raster = new Raster(image);
			raster.remove();
			resetSpiral();
		};
		image.src = event.target.result;
	};
	reader.readAsDataURL(file);
}

$(document).on({
	drop: onDocumentDrop,
	dragover: onDocumentDrag,
	dragleave: onDocumentDrag
});
</script>


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



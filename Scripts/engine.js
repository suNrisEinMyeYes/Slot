
var stage 

var bg //Main reel BG

var SpinBtn // the only one btn bg

var logo // Name of the slot

//reels, cells

var reelSpeed = 5

var tkr = new Object

var preloader
var manifest
var totalLoaded

var titleView = new createjs.Container()

function Main(){
	

	stage = new createjs.Stage("canvas")



	stage.mouseEventsEnabled = true

	//manifest = [
	//	{src:"~/Desktop/SlotTask/Assets/SlotBG/SlotBG.png", id:"bg"},
	//	{src:"~/Desktop/SlotTask/Assets/Button/SpinBtn.png", id:"SpinBtn"},
	//	{src:"~/Desktop/SlotTask/Assets/Logo/Logo.png", id:"logo"}

	//]
	//createjs.Ticker.setFPS(60);
	//createjs.Ticker.addEventListener("tick", stage);
	loadImage()

}


function loadImage() {
  var queue = new createjs.LoadQueue(true);
  queue.on("fileload", handleFileLoad, this);
  queue.on("complete", handleComplete, this);
  queue.loadFile("Assets/SlotBG/SlotBG.png");
  queue.load()
}


function handleComplete(event) {
  document.body.appendChild(event.result);
}

function handleFileLoad(event) {
     var item = event.item; // A reference to the item that was passed in to the LoadQueue
     var type = item.type;

     // Add any images to the page body.
     if (type == createjs.Types.IMAGE) {
         document.body.appendChild(event.result);
     }
 }








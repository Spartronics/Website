/*
	Javascript Image Gallery
	
	Description:
		Simple javascript gallery that can either be controlled manually or
		by a timer. Images are loaded from an easily-editable .JSON file, and
		multiple .JSON files can be switched to and from for pages with
		multiple galleries in one space.
	
	License:
		Copyright © 2015 Aaron Hancock

		Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	Usage:
		Include this script in your HTML file.
		In a window.onload() function, insert the following:
			var Paths = [
					{id: "Id01", gallery: "json01", image: "path01"}, 
				];	
			GalleryObj = new Gallery("ViewerDivID", "SelectorDivID", Paths); //Leave IDs null if non-existent
			GalleryObj.ChangePaths(Paths[0].gallery, Paths[0].image);
			InitSelectButtons(Paths, GalleryObj); //Only if using selector
			setInterval("Gallery1.ScrollUp()", 5000); //Only if using autoscroller
			
		You may, if not using the selector, omit the "Paths" variable and the "GalleryObj.ChangePaths", leave
		the "Paths" variable in the new Gallery() call null, and insert your gallery .json location and
		images location after that null.
			
		In the HTML document, insert the following at the location you'd
		like the gallery to appear:
			<div class="viewer viewtab" id="viewer1"></div>
			<div class="select selecttab" id="select1"></div>
*/

//Generic gallery object.
function Gallery(ViewID, ThumbID, Paths, GalleryPath, ImagePath){
	//Define variables
	var CurrentPic; //The currently selected picture	
	var GalleryData;	//Holds the titles and paths of all the pictures
	
	this.ChangePaths = function(x, y){
		GalleryPath = x;
		ImagePath = y;
		//Read the .JSON file containing titles and paths 
		loadJSON(
			function(response) {
				GalleryData = JSON.parse(response);
				InitViewerTags();
				RefreshGallery();
				PreloadImgs();
				CurrentPic = 0;
				UpdateViewer(CurrentPic);
			},
			GalleryPath
		);
	}
	
	if(GalleryPath && ImagePath){
		this.ChangePaths(GalleryPath, ImagePath);
	}
	
	//Places all thumbnails, sets CurrentPic to 0 and updates the viewer.
	RefreshGallery = function(){
		//Do we need to replace thumbnails?
		if (ThumbID){
			//Wipe the existing thumbnails, if present.
			var node = document.getElementById(ThumbID);
			while (node.hasChildNodes()) {node.removeChild(node.lastChild);}
			
			//Now add the thumbnails back.
			GalleryData.forEach(function(value, index, array){
				var element = document.createElement("img");
				element.id = "ThumbID." + index;
				element.src = ImagePath + GalleryData[index].thumb;
				element.addEventListener("click", function(e){
					//Get the number at the end of
					//the id of the element that was clicked on.
					CurrentPic = e.target.id.split(".").slice(-1)[0];
					UpdateViewer(CurrentPic);
				}.bind(this), false);
				document.getElementById(ThumbID).appendChild(element);
			});
		}
		
		//Update the current picture
		CurrentPic = 0;
		UpdateViewer(CurrentPic);
	}
	
	//Updates the viewer to match the current image.
	UpdateViewer = function (PicID){
		//Get the preview element
		var viewer = document.getElementById(ViewID);
		
		//Update image
		viewer.getElementsByTagName("img")[0].setAttribute("src", ImagePath + GalleryData[PicID].img);
		//Update title
		viewer.getElementsByTagName("h2")[0].textContent = 
			GalleryData[PicID].title || ""; //IE fix. Without this the title would literally be "undefined".
		//Update description
		viewer.getElementsByTagName("p")[0].textContent =
			GalleryData[PicID].desc || "";
	};
	
	this.ScrollUp = function(){
			UpdateViewer(CurrentPic);
			if(CurrentPic != GalleryData.length - 1){
				CurrentPic += 1;
			} else {CurrentPic = 0;}
	}
	
	this.ScrollDown = function(){
			UpdateViewer(CurrentPic);
			if(CurrentPic != 0){
				CurrentPic -= 1;
			} else {CurrentPic = GalleryData.length - 1;}
	}
	
	//Create the <p>, <img> and <h2> tags.
	function InitViewerTags(){
		//Get the preview element
		var viewer = document.getElementById(ViewID);
		//Remove anything that might exist.
		while (viewer.hasChildNodes()) {viewer.removeChild(viewer.lastChild);}
		//Create new elements
		viewer.appendChild(document.createElement("h2"));
		viewer.appendChild(document.createElement("img"));
		viewer.appendChild(document.createElement("p"));
	}
	
	function PreloadImgs(){
		var images = [];
		for (i = 0; i < GalleryData.length; i++) {
			images[i] = new Image();
			images[i].src = GalleryData[i].pic;
		}
	}
}

function loadJSON(callback, URL) {
	if(window.XDomainRequest){
		var xdr = new XDomainRequest();
	} else {
		var xobj = new XMLHttpRequest();
	}
	if (xobj.overrideMimeType){xobj.overrideMimeType("application/json")};
	xobj.open('GET', URL, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);  
}

function InitSelectButtons(Paths, GalleryID){
	//I'm sorry. --Charles Arthur Thomas Rickman IV
	
	Paths.forEach(function(value, i, arr){
		element = document.getElementById(value.id);
		console.log(element);
		
		element.addEventListener("click", function(e){
			
			//Mark all buttons in the same div as inactive.
			
			[].slice.call( //HTMLCollection to Array
				e.target.parentNode.children //Siblings of button
			).forEach(function(value, i, arr){ //For each button
				value.setAttribute("class",
					(value.getAttribute("class") && //Check if class exists
						value.getAttribute("class").replace("active","") //Remove "active" from class
					) || "" //If class is empty, set it to "" to prevent errors.
				);
			});
			
			//That was a mess. Let's do it again!
			//Set the current button to active
			e.target.setAttribute("class", e.target.getAttribute("class") + "active");
			
			//Now we can finally refresh the gallery.
			Gallery1.ChangePaths(Paths[i].gallery, Paths[i].image);
		}.bind(this), false);
	});
}
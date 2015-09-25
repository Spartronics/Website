//Generic gallery object.
function Gallery(GalleryPath, ImagePath, ViewID, ThumbID = ""){
	//Define variables
	var CurrentPic; //The currently selected picture
	//We set up a listener so we can call UpdateGallery() when this is changed.
	Object.defineProperty(this, 'CurrentPic', {
		set: function(value) { UpdateViewer(value); CurrentPic = value; }
	});
	
	var GalleryData;	//Holds the titles and paths of all the pictures
	var ThumbElements = [];	//Holds the elements that comprise all the thumbnail images.
	
	//Places all thumbnails, sets CurrentPic to 0 and updates the viewer.
	RefreshGallery = function(){
		//Do we need to replace thumbnails?
		if(ThumbID !== ""){
			console.log("Placing thumbnails...");
			//Wipe the existing thumbnails, if present.
			ThumbElements.forEach(function(value, index, array){
				var element = document.getElementById(value);
				element.parentNode.removeChild(element);
			});
			ThumbElements = [];
			
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
			ThumbElements = [];
		}
		
		//Update the current picture
		CurrentPic = 0;
		UpdateViewer(CurrentPic);
	}
	
	//Updates the viewer to match the current image.
	UpdateViewer = function (PicID){
		//Get the preview element
		viewer = document.getElementById(ViewID);
		//Update image
		viewer.getElementsByTagName("img")[0].setAttribute("src", ImagePath + GalleryData[PicID].img);
		//Update title
		viewer.getElementsByTagName("h2")[0].textContent = GalleryData[PicID].title;
		//Update description
		viewer.getElementsByTagName("p")[0].textContent = GalleryData[PicID].desc;
	};
	
	//Read the .JSON file containing titles and paths
	loadJSON(
		function(response) {
			GalleryData = JSON.parse(response);
			RefreshGallery();
		},
		GalleryPath
	);
	

}

//Extends Gallery. Changes automatically.
function AutoGallery(){
	
	}


//This "routine" is some ECMAScript 6 magic that makes
//Gallery.UpdateGallery() run automatically when
//Gallery.CurentPic is changed. Cool, huh?
/*var GalleryCatcher = {
	set: function(obj, prop, value) {
		if (prop === 'CurrentPic') {
			obj.UpdateGallery(value);
		}

	// The default behavior to store the value
	obj[prop] = value;
	}
};*/

function loadJSON(callback, URL) {   
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', URL, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);  
}


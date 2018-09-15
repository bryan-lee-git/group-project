//onlinetuner.js
//Namespace declaration
//Global function

(function () {

	OnlineTuner = function() {
		this.VERSION = "1.0";
		
		this.installArray();
		this.installFloat32Array();
	};
	
	OnlineTuner.prototype = {
		//shortcut
		$ : function (id) {
			return document.getElementById(id);
		},
		
		virtual : function() {
			throw "call pure virtual function";
		},
		
		installFloat32Array : function() {
			//Add max function
			Float32Array.prototype.max = function() {
				return Math.max.apply(null, this);
			};
			
			//Add indexof function
			Float32Array.prototype.indexof = function(value) {
				return Array.prototype.indexOf.call(this, value);
			};
			
			//Slice array
			Float32Array.prototype.slice = function(start, count) {
				return Array.prototype.slice.call(this, start, count);
			};
			
			//Slice array
			Float32Array.prototype.select = function(f) {
				for(var i = 0; i < this.length; i++) {
					this[i] = f(this[i]);
				}
			};
		},
		
		installArray : function() {
			//Add foreach function
			Array.prototype.map = function(f) {
				var map = new Array(this.length);
				for(var i in this) {
					map[i] = f(this[i]);
				};
				return map;
			};
			
			Array.prototype.where = function(f) {
				var where = new Array();
				for(var i in this) {
					if(f(this[i])) {
						where[i] = this[i];
					}
				};
				return where;
			};
		},
		
		//Return getUserMedia function for
		//every browser
		getUserMediaFunction : function() {
			return 	navigator.getUserMedia || 
					navigator.webkitGetUserMedia || 
					navigator.mozGetUserMedia || 
					navigator.msGetUserMedia;
		},
		
		//Test html5 API
		//return false if html5 webRTC API is not available
		//for browser
		isHtml5Compatible : function() {
			return !!this.getUserMediaFunction();
		},
		
		//Call getUsermedia function
		getUserMedia : function(constraint, successCallback, errorCallback) {
			return this.getUserMediaFunction().call(navigator, constraint, successCallback, errorCallback);
		},
		
		//Create generic audio context
		createAudioContext : function() {
			var AudioContext = window.AudioContext || window.webkitAudioContext;
			return new AudioContext();
		}
	};
})();

this.OnlineTuner = new OnlineTuner();

var Settings = {
	container: document.getElementById("tuner-instance"),
	backgroundColor: "white", // or hex colors "#ffffff"
	notOkayColor: "orange",
	okayColor: "green",
	fontColor: "black"
};

function initializeTuner() {
	// Create a single or multiple instance of tuners at time
	var tuners = [
		new OnlineTuner.Controller.GuitareTuner(
			new OnlineTuner.Widget.CircleWidget(
				Settings.container, 
				Settings.backgroundColor, 
				Settings.notOkayColor, 
				Settings.okayColor, 
				Settings.fontColor
			)
		)
	];
	
	// Initialize the tuner with the callbacks
	new OnlineTuner.Analyser(tuners).install(function() {
		console.log("Succesfully initialized");
		
	}, function(errorMessage) {
		console.error("Oops, this shouldn't happen", errorMessage);
	});
}

// Render the guitar tuner on the canvas by running the function
initializeTuner();
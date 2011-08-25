def("SetupWorkspace")({


	init: function(id){


		var self = this ;
		this.containerId = id;
		this.container = $("#" + id);
		
		this.positionH = "left"
		this.positionV = "top"

		this.CurrentWorkSpace = 1 ;
		this.OldWorkSpace = 1 ;


		this.WorkspaceID = {
				1:"firstcontainer",
				2:"secondcontainer",
				3:"thirdcontainer",
				4:"forthcontainer"
		};
	
	
	
		$(document).bind('keydown', 'left',function (evt){	self.KeyLeft();	});
		$(document).bind('keydown', 'right',function (evt){	self.KeyRight();	});
		$(document).bind('keydown', 'up',function (evt){	self.KeyUp(); 	});
		$(document).bind('keydown', 'down',function (evt){	self.KeyDown();	});
	
	
		$(document).bind('keydown', 'Shift+up',function (evt){	self.ZoomWorkspace();	});
		 
		
		$(document).bind('keydown', 'Shift+down',function (evt){ self.UnzoomWorkspace();});
		
		
	
	
		$("#navigator-left").click(function (evt){	self.KeyLeft();	});
		$("#navigator-right").click(function (evt){	self.KeyRight();	});
		$("#navigator-top").click(function (evt){	self.KeyUp(); 	});
		$("#navigator-bottom").click(function (evt){	self.KeyDown();	});
		$("#navigator-center").toggle(

			function (evt){
				self.container.addClass("zoomed");
			  	self.container.css("overflow","visible");
				self.ShowWorkSpace(1);

			},
			function (evt){
		
				self.container.removeClass("zoomed");
				//this.container.css("overflow","hidden",1000) ;
				setTimeout(function(){
					self.container.css("overflow","hidden");
				}, 1000);

				self.ShowWorkSpace(1);
			  	
			}
		);
	
	
		/*$(".navImgclick").mousedown(function(){
			$(this).css("margin-top","3px").css("margin-left","3px");
			this.PlayClickSound();
		}).mouseup(function(){
			$(this).css("margin-top","0").css("margin-left","0");
		});*/


		$("#navigator").css("height", $("#navigator").css("width"));
		$("body").css("fontSize", $(window).width() * 0.01 );
		$(window).resize(function(){
			$("#navigator").css("height", $("#navigator").css("width"));
			$("body").css("fontSize", $(window).width() * 0.01 );
		});

		$(".navImgclick").click(function(){
			$(this).animate({
				marginTop: '3px',
				marginLeft: '3px'
			},100);
		
			$(this).animate({
				marginTop: '0px',
				marginLeft: '0px'
			},100);
			self.PlayClickSound();
		});

		this.ClickSound = $("#clickaudio")[0];
		
	},
	ZoomWorkspace : function (){
	  	this.ShowWorkSpace(1);
	  	this.container.addClass("zoomed");
	  	this.container.css("overflow","visible");

	},

	UnzoomWorkspace : function (){
		self = this;
		this.container.removeClass("zoomed") ;
	
		//this.container.css("overflow","hidden",1000) ;
		setTimeout(function(){
			self.container.css("overflow","hidden");
		}, 500);

		this.ShowWorkSpace(self.OldWorkSpace);
	},
	
	KeyLeft : function (){
		if (this.positionH == "right"){
			$(".container").animate({
			left:"10%",
			},400);
			this.positionH = "left";
			//$(".container").css("left","10%");
		}
		

		switch(this.CurrentWorkSpace){
		case 2 : 
			this.CurrentWorkSpace = 1;
			break;
		case 4 : 
			this.CurrentWorkSpace = 3;
			break;
		}//switch
				//console.log("old -> " + this.OldWorkSpace + " new -> " + this.CurrentWorkSpace );

	},

	KeyRight : function (){
		if (this.positionH == "left"){
			$(".container").animate({
			left:"-75%",
			},400);
			this.positionH = "right";
			//$(".container").css("left","-75%");
		}
		
		switch(this.CurrentWorkSpace){
		case 1 : 
			this.CurrentWorkSpace = 2;
			break;
		case 3 : 
			this.CurrentWorkSpace = 4;
			break;
		}//switch
				//console.log("old -> " + this.OldWorkSpace + " new -> " + this.CurrentWorkSpace );
	},

	KeyUp : function (){
		if (this.positionV == "bottom"){
			$(".container").animate({
			top:"10%",
			},400);
			this.positionV = "top";
			//$(".container").css("top","10%");
		}

		switch(this.CurrentWorkSpace){
		case 3 : 
			this.CurrentWorkSpace = 1;
			break;
		case 4 : 
			this.CurrentWorkSpace = 2;
			break;
		}//switch
				//console.log("old -> " + this.OldWorkSpace + " new -> " + this.CurrentWorkSpace );
	},

	KeyDown : function (){
		if (this.positionV == "top"){
			$(".container").animate({
			top:"-75%",
			},400);
			this.positionV = "bottom";
			//$(".container").css("top","-75%");
		}

		switch(this.CurrentWorkSpace){
		case 1 : 
			this.CurrentWorkSpace = 3;
			break;
		case 2 : 
			this.CurrentWorkSpace = 4;
			break;
		}//switch
		
		//console.log("old -> " + this.OldWorkSpace + " new -> " + this.CurrentWorkSpace );
		
	},

	ShowWorkSpace : function (num){
		this.OldWorkSpace = this.CurrentWorkSpace;
		switch(num){
		case 1 : 
			this.KeyLeft();
			this.KeyUp();
			break;
		case 2 : 
			this.KeyRight();
			this.KeyUp();
			break;
		case 3 : 
			this.KeyDown();
			this.KeyLeft();
			break;
		case 4 : 
			this.KeyDown();
			this.KeyRight();
			break;
		}//switch

	},
	
	PlayClickSound : function (){
		this.ClickSound.play();
	},

});




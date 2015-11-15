;(function(){
	var $body = $("body");
	function popWrap(){
		//return this;
	}
	popWrap.prototype.defult = function(e){
		this.option = $.extend(true, {
			content:"2222",
			title:"pop-title",
			effect:"Letmein",
			close:"X",
			blurbox:".wrap",
			maskClose:true,
			wrap:".wrap",
			init:new Function
		}, e);
		var _this = this;
		var obj = {
			$wrap : $("<div>",{"class":"pop-box"}),
			$close : $("<a>",{"class":"pop-close"}).html(this.option.close),
			$mask:$("<div>",{"class":"pop-mask"}),
			$blurbox:$(this.option.wrap)
		}
		var tmp = "<div class='pop_content animate'>\
			<div class='pop-title'></div>\
			<div class='pop-info'></div>\
		</div>";
		var $tmp = obj.$wrap.append(tmp);
		
		$tmp.find(".pop-title").html(_this.option.title).append(obj.$close);
		$tmp.find(".pop-info").html(_this.option.content);
		$tmp.append(obj.$mask);
		$body.append(obj.$wrap);
		this.option.init.apply(obj);
		
		var _effect;
		switch(this.option.effect){ 
			default:
				_effect = "show"
				break;
			case "fadeIn":
				_effect = "fadeIn";
				break;
			case "slideUp":
				_effect = "slideUp";
				break;
			case "fliphorizontal":
				_effect = "fliphorizontal";
				break;
			case "flipvertical":
				_effect = "flipvertical";
				break;
			case "blur":
				_effect = "blur";
				break;
			case "zoomIn":
				_effect = "zoomIn";
				break;
			case "Letmein":
				_effect = "Letmein";
				break;
			case "slipFromTop":
				_effect = "slipFromTop";
				break;
			case "Makeway":
				_effect = "Makeway";
				break;
			case "Newspaper":
				_effect = "Newspaper";
				break;
			case "Fall":
				_effect = "Fall";
				break;
			case "SuperScaled":
				_effect = "SuperScaled";
				break;
		};

		this.effect[_effect].call(obj);
		$(document).on("keydown",function(e){
			if(e.keyCode == 27){
				$(".pop-box").last().find(".pop-close").trigger("click");
			}
		});
		if(this.option.maskClose){
			obj.$mask.on("click",function(e){
				obj.$wrap.find(".pop-close").trigger("click");
			});	
		}
		return this;
	};
	popWrap.prototype.effect = {                        
		fadeIn:function(){			//jquery
			var _this = this;
			this.$wrap.fadeIn(300);
			this.$wrap.find(".pop_content").fadeIn();
			this.$close.on("click",function(){
				_this.$wrap.find(".pop_content").fadeOut();
				_this.$wrap.fadeOut(300,function(){
					_this.$wrap.remove();
				});
			})
		},
		slideUp:function(){			//jquery
			var _this = this;
			this.$wrap.find(".pop_content").slideDown(300);
			this.$wrap.find(".pop_mask").fadeIn(300);
			this.$close.on("click",function(){
				_this.$wrap.find(".pop_content").slideUp();
				_this.$wrap.find(".pop_mask").fadeOut();
				_this.$wrap.fadeOut(300,function(){
					_this.$wrap.remove();
				});
			});
		},
		show:function(){			//jquery
			var _this = this;
			this.$wrap.show();
			this.$wrap.find(".pop_content").show();
			this.$close.on("click",function(){
				_this.$wrap.remove();
			});
		},
		fliphorizontal:function(){		//css3
			var _this = this;
			this.$wrap.fadeIn();
			this.$wrap.find(".pop_content").addClass("fliphorizontal");
			this.$close.on("click",function(){						
				_this.class = {
					removeClass:"fliphorizontal",
					addClass:"fliphorizontal-hide"
				}
				css3AnimateEnd(_this);
			});
		},
		flipvertical:function(){
			var _this = this;
			this.$wrap.fadeIn();
			this.$wrap.find(".pop_content").addClass("flipvertical");
			this.$close.on("click",function(){
				_this.class = {
					removeClass:"flipvertical",
					addClass:"flipvertical-hide"
				}
				css3AnimateEnd(_this);
			});
		},
		blur:function(){
		 	var _this = this;
		 	this.$wrap.fadeIn();
		 	this.$wrap.find(".pop_content").addClass("bounceInUp");
		 	this.$blurbox.addClass("blur");
		 	this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"bounceInUp",
					addClass:"bounceInUp-hide"
		 		}
		 		css3AnimateEnd(_this);
		 		_this.$blurbox.removeClass("blur");
		 	});
		},
		zoomIn:function(){
			var _this = this;
		 	this.$wrap.fadeIn();
		 	this.$wrap.find(".pop_content").addClass("zoomIn");
		 	this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"zoomIn",
					addClass:"zoomIn-hide"
		 		}
		 		css3AnimateEnd(_this);
		 	})
		},
		Letmein:function(){
			var _this = this;
		 	this.$wrap.fadeIn();
		 	this.$wrap.find(".pop_content").addClass("bounceInUp");
		 	this.$blurbox.addClass("Letmein");
		 	this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"bounceInUp",
					addClass:"bounceInUp-hide"
		 		}
		 		css3AnimateEnd(_this);
		 		_this.$blurbox.removeClass("Letmein");
		 	});
		},
		slipFromTop:function(){
			var _this = this;
		 	this.$wrap.fadeIn();
		 	this.$wrap.find(".pop_content").addClass("fadeInDownBig");
		 	this.$blurbox.addClass("slipFromTop");
		 	this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"fadeInDownBig",
					addClass:"fadeInDownBig-hide"
		 		}
		 		css3AnimateEnd(_this);
		 		_this.$blurbox.removeClass("slipFromTop");
		 	});
		},
		Makeway:function(){
			var _this = this;
			this.$wrap.fadeIn();
			this.$blurbox.addClass("Makeway");
			this.$wrap.find(".pop_content").addClass("fadeInRight");
			this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"fadeInRight",
					addClass:"fadeInDownBig-hide"
		 		}
		 		css3AnimateEnd(_this);
		 		_this.$blurbox.removeClass("Makeway");
		 	});
		},
		Newspaper:function(){
			var _this = this;
			this.$wrap.fadeIn();
			this.$wrap.find(".pop_content").addClass("Newspaper");
			this.$close.on("click",function(){
				_this.class = {
		 			removeClass:"Newspaper",
					addClass:"Newspaper-hide"
		 		}
				css3AnimateEnd(_this)
		 	});
		},
		Fall:function(){
			var _this = this;
			this.$wrap.fadeIn();
			this.$wrap.find(".pop_content").addClass("Fall");
			this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"Fall",
					addClass:"fadeInDownBig-hide"
		 		}
		 		css3AnimateEnd(_this);
		 		_this.$blurbox.removeClass("Fall");
		 	});
		},
		SuperScaled:function(){
			var _this = this;
			this.$wrap.fadeIn();
			this.$wrap.find(".pop_content").addClass("SuperScaled");
			this.$close.on("click",function(){
		 		_this.class = {
		 			removeClass:"SuperScaled",
					addClass:"SuperScaled-hide"
		 		}
		 		css3AnimateEnd(_this);
		 		_this.$blurbox.removeClass("SuperScaled");
		 	});
			
		}
	};
	function css3AnimateEnd(_this){
		_this.$wrap.find(".pop_content").removeClass(_this.class.removeClass).addClass(_this.class.addClass).one("webkitAnimationEnd webkitTransitionEnd",function(){
				_this.$wrap.find(".pop_content").fadeOut().removeClass(_this.class.addClass);
				_this.$wrap.fadeOut(500,function(){
					_this.$wrap.remove();
				});
		});
	}
	window.popF = popWrap; 
})();
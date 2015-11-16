# Popup

弹出层

  /*html*/
  <div class="wrapbox">
			<div class="wrap">
				<p class="pop-txt">Nifty Modal Window Effects<br />Some inspiration for different modal window appearances</p>
				<ul class="list-click">
					<li data-effect="fadeIn">fadeIn</li>
					<li data-effect="slideUp">slideUp</li>
					<li data-effect="fliphorizontal">fliphorizontal</li>
					<li data-effect="flipvertical">flipvertical</li>
					<li data-effect="show">show</li>
					<li data-effect="blur">blur</li>
					<li data-effect="zoomIn">zoomIn</li>
					<li data-effect="Letmein">LET ME IN</li>
					<li data-effect="slipFromTop">SLIP FROM TOP</li>
					<li data-effect="Makeway">MAKE WAY!</li>
					<li data-effect="Newspaper">Newspaper</li>
					<li data-effect="Fall">FALL</li>
					<li data-effect="SuperScaled">Super Scaled</li>
				</ul>
			</div>
		</div>	

  /*调用*/
  
  function openPop(effect){
	var pop = new popF();
	pop.defult({
		content:"Nifty Modal Window Effects Some inspiration for different modal window appearances",
		title:"title",
		effect:effect,
		init:function(){
			this.$wrap.click(function(e){ 
				//console.log(this);
				//alert($(e.target).text())
			})
		}
	});
	}
	$(".list-click li").on("click",function(){
	var index = $(this).index();
	var effect = $(this).attr("data-effect");
	openPop(effect);
	});
  });

  


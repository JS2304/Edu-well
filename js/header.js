 function web(card){
	 
	card.innerHTML=`
<div class="cardd borderr relative" >
	<img src="img/courses-01.jpg">
	<h6 class="dolor">$128</h6>
	<div class="display">
	<h2 class="py-1">Web Development</h2>
	<p class="py-1">Did you know that you can visit <a href="#">TooCSS website</a> for latest listing of HTML templates and a variety of useful templates.</p>
	<p class="py-1">You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.</p>
	<a>36 Hours |</a>
	<a>4 Weeks |</a>
	<a>3 Certificates</a>
	<h4 class="py-1">Subscribe Course</h4>
	</div>
	
</div><!--styleing-column-->
	 `;
	 card.style.transition="0.9s";
		card.style.transform="translateX(15px)";
		
 }
 
 
  function web1(card){
	card.innerHTML=`
<div class="cardd borderr relative" >
	<img src="img/courses-02.jpg">
	<h6 class="dolor">$128</h6>
	<div class="display">
	<h2 class="py-1">Web Development</h2>
	<p class="py-1">Did you know that you can visit <a href="#">TooCSS website</a> for latest listing of HTML templates and a variety of useful templates.</p>
	<p class="py-1">You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.</p>
	<a>36 Hours |</a>
	<a>4 Weeks |</a>
	<a>3 Certificates</a>
	<h4 class="py-1">Subscribe Course</h4>
	</div>
	
</div><!--styleing-column-->
	 `;
		card.style.transition="0.9s";
		card.style.transform="translateX(15px)";
 }
 
function ddd(h){
	
	if(h.style.display=="block"){
		h.style.display="none";
	}
	else{
		h.style.display="block";
	}
}
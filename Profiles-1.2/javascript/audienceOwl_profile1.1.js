function boot(){
	var tableOriginalData="";
	var transformedData="";
	$(function($){
		$('#tab-ham-icon').click(function(){
			$('#sidebar-container').toggleClass("moved-sidebar-container");
			$('#body-container').toggleClass("moved-body-container");
		});
		$('.ham-icon').hover(function(){
			$('.ham-icon').addClass("ham-icon-hover");
		},function(){
			$('.ham-icon').removeClass("ham-icon-hover");
		});
		tableOriginalData=document.getElementById('organizations-table').cloneNode(true);
		transformedData=tableTransformer(tableOriginalData);
		var new_gallery=$('#gallery-images').clone(true);
		var image_gallery_slider=$('<div class="gallery-images-slider" id="gallery-images-slider"></div>').append($(new_gallery).children());			
		$('#gallery-images-column').append(image_gallery_slider);
		$('.gallery-images-slider').sss({
						slideShow : false, 
						startOn : 0, 
						transition : 400,
						showNav : true
						});
		$('#gallery-images-slider').addClass('no-tablet');				
		$('#gallery-images-slider').addClass(' no-computer');				
		/*Website ids formatting*/
		var new_website_ids_container=$("<div class='sixteen wide column' id='website-ids-column'></div>");
		var new_website_id;
		$('#website-ids-column').children().each(function(index,data){
			new_website_id=$('<div class="website-id-container"></div>').append("<img src='images/site-bullet.png'></img>")
														 .append(data)
														 .append("<img src='images/bullet_arrow.png'></img>");
			new_website_ids_container.append(new_website_id);											 
		});
		$('#website-ids-column').remove();
		$('#websites-ids-rows').append(new_website_ids_container);
		profileMediaQuery(tableOriginalData,transformedData);
		$('.ui.dropdown').dropdown(
			{
				on: 'hover',
				action:'hide'
			}
		);	
		
		$('#org-table tr:first-child>td').css("border-bottom","1px solid rgb(219,219,219)");
		
		
	});
	$(window).resize(function(){				
		profileMediaQuery(tableOriginalData,transformedData);				
	});
}
function isMobile(){
	return $('#mobile-indicator').css('visibility')==='visible';
}
function isTablet(){
	return $('#tablet-indicator').css('visibility')==='visible';
}
function widthIncreaserForTabsFrom6To8(){		
	if(isTablet()){
		$('.eight-wide-tabs-from-six').removeClass("six");
		$('.eight-wide-tabs-from-six').addClass("eight");
	}else{
		$('.eight-wide-tabs-from-six').addClass("six");
		$('.eight-wide-tabs-from-six').removeClass("eight");
	}
}

function widthIncreaserForTabsFrom4To6(){	
	if(isTablet()){
		$('.six-wide-tabs-from-four').removeClass("four");
		$('.six-wide-tabs-from-four').addClass("six");
	}else{
		$('.six-wide-tabs-from-four').addClass("four");
		$('.six-wide-tabs-from-four').removeClass("six");
	}
}
function widthIncreaserForTabsFrom12To14(){		
	if(isTablet()){
		$('.fourteen-wide-tabs-from-twelve').removeClass("twelve");
		$('.fourteen-wide-tabs-from-twelve').addClass("fourteen");
	}else{
		$('.fourteen-wide-tabs-from-twelve').addClass("twelve");
		$('.fourteen-wide-tabs-from-twelve').removeClass("fourteen");
	}
}
function hamburgerMenuCloser(){
	if(isTablet()){
		$('#sidebar-container').removeClass("moved-sidebar-container");
		$('#body-container').removeClass("moved-body-container");
	}
}
function widthIncreaserForMobilesFrom10to16(){
	if(isMobile()){		
		$('.sixteen-wide-mobile-from-ten').removeClass("ten");
		$('.sixteen-wide-mobile-from-ten').addClass("sixteen");
	}else{
		$('.sixteen-wide-mobile-from-ten').removeClass("sixteen");
		$('.sixteen-wide-mobile-from-ten').addClass("ten");
	}
}
function widthIncreaserForMobilesFrom10to6(){
	if(isMobile()){		
		$('.six-wide-mobile-from-ten').removeClass("ten");
		$('.six-wide-mobile-from-ten').addClass("six");
	}else{
		$('.six-wide-mobile-from-ten').removeClass("six");
		$('.six-wide-mobile-from-ten').addClass("ten");
	}
}
function widthIncreaserForMobilesFrom12To16(){
	if(isMobile()){		
		$('.sixteen-wide-mobiles-from-twelve').removeClass("twelve");
		$('.sixteen-wide-mobiles-from-twelve').addClass("sixteen");
	}else{
		$('.sixteen-wide-mobiles-from-twelve').removeClass("sixteen");
		$('.sixteen-wide-mobiles-from-twelve').addClass("twelve");
	}
}
function widthIncreaserForMobilesFrom12To13(){
	if(isMobile()){		
		$('.fourteen-wide-mobile-from-twelve').removeClass("twelve");
		$('.fourteen-wide-mobile-from-twelve').addClass("thirteen");
	}else{
		$('.fourteen-wide-mobile-from-twelve').removeClass("fourteen");
		$('.fourteen-wide-mobile-from-twelve').addClass("thirteen");
	}
}
function widthIncreaserForMobilesFrom4To3(){
	if(isMobile()){		
		$('.two-wide-mobile-from-four').removeClass("four");
		$('.two-wide-mobile-from-four').addClass("three");
	}else{
		$('.two-wide-mobile-from-four').removeClass("three");
		$('.two-wide-mobile-from-four').addClass("four");
	}
}
function widthIncreaserForMobilesFrom2To3(){
	if(isMobile()){		
		$('.three-wide-mobile-from-two').removeClass("two");
		$('.three-wide-mobile-from-two').addClass("three");
	}else{
		$('.three-wide-mobile-from-two').removeClass("three");
		$('.three-wide-mobile-from-two').addClass("two");
	}
}
function widthIncreaserForMobilesFrom4To6(){
	if(isMobile()){		
		$('.six-wide-mobile-from-four').removeClass("four");
		$('.six-wide-mobile-from-four').addClass("six");
	}else{
		$('.six-wide-mobile-from-four').removeClass("six");
		$('.six-wide-mobile-from-four').addClass("four");
	}
}
function widthIncreaserForMobilesFrom10To7(){
	if(isMobile()){		
		$('.seven-wide-mobile-from-ten').removeClass("ten");
		$('.seven-wide-mobile-from-ten').addClass("seven");
	}else{
		$('.seven-wide-mobile-from-ten').removeClass("seven");
		$('.seven-wide-mobile-from-ten').addClass("ten");
	}
}
function tableChanger(tableOriginalData,translatedData){
	if(isMobile()){		
		document.getElementById("organizations-table").innerHTML=translatedData.toString();
	}else{		
		document.getElementById("organizations-table").innerHTML=tableOriginalData.innerHTML;
	}
}
function tableTransformer(originalData){
	var duplicateData=originalData;
	var newData="" ;
	newData="<table id='org-table'>";
	var allRows=duplicateData.getElementsByTagName("tr");
	var eachRow;
	var nRows=allRows[0].getElementsByTagName("td").length;
	for(i=0;i<nRows;i++){
		newData+="<tr>";
		for(j=0;j<allRows.length;j++){
			newData+="<td>"+allRows[j].getElementsByTagName("td")[i].innerHTML+"</td>"
		}
		newData+="</tr>";
	}
	newData+="</table>";
	return newData;
}

function disableSlider(){
	if(!isMobile()){
		if($('.gallery-images').find('.sss').length>0){
			if($('.gallery-images img').parent().is(".sss" )){
				$('.gallery-images img').unwrap();
			}
			$('.gallery-images img').removeClass("ssslide");
			$('.gallery-images img').removeAttr("style");
			$('.sssnext').remove();
			$('.sssprev').remove();
		}
	}
}
function websiteIDFormatter(){
	if(!isMobile()){
		if($('.website-ids-divs').length==0){
			var half_childs=Math.ceil($('.website-id-container').length/2);
			$('.website-id-container:lt('+half_childs+')').wrapAll("<div class='website-ids-divs' id='website-ids-first-div'/>");
			$('.website-id-container:gt('+(half_childs-1)+')').wrapAll("<div class='website-ids-divs' id='website-ids-second-div'/>");
		}
	}else{
		if($('.website-ids-divs').length!=0){
			$('.website-id-container').each(function(index,data){
				$('#website-ids-column').append(data);
			});
			$('.website-ids-divs').remove();
		}
	}
}
function heightEqualizer(divider,leftColumn,rightColumn,adj){
	if($(leftColumn).height()>$(rightColumn).height()){
		$(divider).outerHeight($(leftColumn).outerHeight());
	}else{
		$(divider).outerHeight($(rightColumn).outerHeight());
	}
}
function formatFooterForMobiles(){
	if(isMobile()){
		if($('#second-half-footer-links').length==0){
			var second_half_rows="<div class='sixteen wide column' id='second-half-footer-links'></div>";
			$('#footer-row').append(second_half_rows);
			$('span.footer-tag:gt(3)').each(function(index,data){
				$('#second-half-footer-links').append(data);
			});
			
			//$('span.footer-tag:gt(3)').remove();
		}
	}else{
		if($('#second-half-footer-links').length!=0){
			$('#second-half-footer-links').children().each(function(index,data){
				$('#footer-links').append(data);
			});
			$('#second-half-footer-links').remove();
		}
	}
}
function profileMediaQuery(tableOriginalData,translatedData){
	widthIncreaserForTabsFrom4To6();
	widthIncreaserForTabsFrom6To8();
	hamburgerMenuCloser();
	widthIncreaserForTabsFrom12To14();
	widthIncreaserForMobilesFrom10to16();
	widthIncreaserForMobilesFrom12To16();
	widthIncreaserForMobilesFrom10to6();
	tableChanger(tableOriginalData,translatedData);
	websiteIDFormatter();
	widthIncreaserForMobilesFrom12To13();
	widthIncreaserForMobilesFrom4To3();
	heightEqualizer('#websites-n-chathandles-divider','#websites-column','#chathandles-column',0);
	heightEqualizer('#divider','#profile-column','#social-media',0);
	widthIncreaserForMobilesFrom2To3();
	widthIncreaserForMobilesFrom4To6();
	widthIncreaserForMobilesFrom10To7();
	formatFooterForMobiles();
}

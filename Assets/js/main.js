
//US Flag and Banner Master JS Script
$(document).ready(function(){
	
	
	$(".catProdAttributeItem select").change(function(){
		var selectedValue = $(this).find(":selected").val();
		console.log(selectedValue);
		if(selectedValue === "7266182"){
			console.log(selectedValue);
			$('.flag-content').load('http://usflagandbanner.businesscatalyst.com/shop/flags/feather-dancer/smiley/business/grand-opening-1 .online-shop');
			//window.location.href = "http://usflagandbanner.businesscatalyst.com/shop/flags/feather-dancer/smiley/business/grand-opening-1";
		}
	});
	
	
	
});



//US Flag and Banner Master JS Script
$(document).ready(function(){
	
	//$(".catalogs:odd .layout-one-half").removeClass("layout-one-half").addClass("layout-one-half-right");
	
	msg = $("td.cartSummaryItem").text();
	
	if(msg === "Shopping cart is empty."){
		$("td.cartSummaryItem").hide();
	}
	
    

	
});


javascript:
(function(){

for (var i = 0; document.all["ilf_"+i+"_3"] !== undefined; i++) {
	if (document.all["ilf_"+i+"_21"].value !== "") {
		document.all["ilf_"+i+"_2"].click();
		document.all["ilf_"+i+"_22"].value = "";
	} else {
		document.all["ilf_"+i+"_3"].click();
	}
}

})();

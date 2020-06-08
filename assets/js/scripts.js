$(".control").click(function(){
	var id = $(this).attr("id");
	id = id.replace("control-review-","");

	$(".review-active").hide();
	$(".review-active").removeClass("review-active");
	$("#review-" + id).fadeIn();
	$("#review-" + id).addClass("review-active");

	$(".review-active-control").removeClass("review-active-control");
	$("#control-review-" + id).addClass("review-active-control");
	
});

$("#game-select").on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
//	$("#Minecraft-Budget").hide();
	$("#Java-Premium").hide();
	$("#Bedrock-Premium").hide();
//  $("#FiveM").hide();
//	$("#Ark-Survival-Evovled").hide();
//	$("#CSGO").hide();
//	$("#GMOD").hide();
//	$("#TeamFortress-2").hide();
//	$("#Insurgency").hide();
//	$("#Rust").hide();
//	$("#Arma3").hide();
//	$("#Conan-Exiles").hide();
//	$("#Dont-Starve").hide();
//	$("#Factorio").hide();
    if (valueSelected !== 'Choose:') {
        $("#" + valueSelected).show();
	}
});

$("document").ready(function(){
//	$("#Minecraft-Budget").hide();
	$("#Java-Premium").hide();
	$("#Bedrock-Premium").hide();
//	$("#FiveM").hide();
//	$("#Ark-Survival-Evovled").hide();
//	$("#CSGO").hide();
//	$("#GMOD").hide();
//	$("#TeamFortress-2").hide();
//	$("#Insurgency").hide();
//	$("#Rust").hide();
//	$("#Arma3").hide();
//	$("#Conan-Exiles").hide();
//	$("#Dont-Starve").hide();
//	$("#Factorio").hide();
});
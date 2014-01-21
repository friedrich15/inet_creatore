add_row = function(){
  var clone = $(".initial").clone();
  clone.children().text("").removeClass("active");;
  clone.removeClass("initial");
  clone.appendTo($("#product-table"));
}

pop_text = function(obj){
  $(".active").removeClass("active");
  obj.addClass("active");
}

copy_all = function(obj){
  var tClass = obj.parents("th").attr("class");
  var tObj = $(".initial").children("."+tClass);
  var tText = $(tObj).text();
  console.log(tText);
  $("td."+tClass).text(tText);
}
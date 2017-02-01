

$(document).ready(function(){
  console.log("Document is ready");
  var menu= $("#sidebar-wrapper");

  $(document)
  .on("click", ".js-menu-open", function(evt) {
  	menu.addClass("open");

  	return evt.target.tagName === "A";
  })
  .on("click", ".js-menu-close", function(evt){
  	menu.removeClass ("open");

  	return evt.target.tagName === "A";
  })

});
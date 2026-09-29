function HighlightMenu(active_menu) {
  const menu_list = ["home", "about"];

  //set active menu class
  menu_list.forEach(menu_item => {
		var x = document.getElementById(menu_item);
		x.className = (menu_item != active_menu ? "" : "active"); 
  });  
}

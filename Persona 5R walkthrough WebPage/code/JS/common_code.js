//mobile menu
var x = 0;
function menu_handler() { //function to make the mobile menu close or open when click 
    x++;//everytime the function is called, we add one to x
    var menu = document.getElementsByClassName("menu-pc");

    if (x % 2 != 0) {//the menu is hide by default, and x first value (defined out of the function) is 0, so when the user wants to display the menu
        //x will always be uneven
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "block"

        }
    }
    if (x % 2 == 0) {//since the first action is display the menu, and the second is hide it, when the user wants to close the menu x will be a even number
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "none"
        }
    }
}










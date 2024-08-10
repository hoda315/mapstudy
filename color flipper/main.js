var Button = {
    set_color : function (color){
        document.querySelector('input').style.color = color;
    },

    set_backgroud_color : function (color){
        document.querySelector('input').style.backgroundColor = color;
    },
}

function button_mouseover(){
        Button.set_color('white');
        Button.set_backgroud_color('black');
}

function button_mouseout(){
    Button.set_color('black');
    Button.set_backgroud_color('transparent');
}





function link_mouseover(self){
    self.style.color = 'rgba(0, 136, 182, 0.664)';
}

function link_mouseout(self){
   self.style.color = 'black';
}




var colors = ["red", "blue", "green", "yellow", "purple"];

function color_pick(){
    var c = Math.floor((Math.random() * colors.length));
   
    document.querySelector('body').style.backgroundColor = colors[c];
    document.querySelector('span').textContent = colors[c];
}




var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function random_color_pick(){
    var c = "#";

    for(var i = 0; i < 6; i++){
        c += hex[Math.floor((Math.random() * hex.length))];
    }

    document.querySelector('body').style.backgroundColor = c;
    document.querySelector('span').textContent = c;
}
var Button = {
    set_color : function (self, color){
        self.style.color = color;
    },

    set_backgroud_color : function (self, color){
        self.style.backgroundColor = color;
    },
}

function button_mouseover(self){
    Button.set_color(self, 'white');
    Button.set_backgroud_color(self, 'black');
}

function button_mouseout(self){
    Button.set_color(self, 'black');
    Button.set_backgroud_color(self, 'transparent');
}




var Count = {
    set_color : function (color){
        document.querySelector('p').style.color = color;
    },

    set_count : function (current_num){
        document.querySelector('p').textContent = current_num;
    }
}

function count(self, current_num){
    if (self.value === 'DECREASE') {
        current_num--;
        Count.set_count(current_num);
    } else if (self.value === 'INCREASE'){
        current_num++;
        Count.set_count(current_num);
    } else {
        current_num = '0';
        Count.set_count(current_num);
    }

    if (current_num < 0){
        Count.set_color('red');
    } else if(current_num > 0){
        Count.set_color('green');
    } else {
        Count.set_color('black');
    }
}
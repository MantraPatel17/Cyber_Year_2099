class Form {
    constructor() {
        
        this.title = createElement('h1');
        this.title1 = createElement('h2');
        this.title2 = createElement('h2');
        this.title3 = createElement('h2');
        this.title4 = createElement('h2');
        this.title5 = createElement('h2');
        this.title6 = createElement('h2');
        this.title7 = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();
        this.title6.hide();
        this.title7.hide()
    }

    display(){

        this.textsize = 10;
        this.title.html("CyberYear_2099");
        this.title.position(displayWidth/2-120 ,0);
        this.title1.html("Hi, Welcome to CyberYear_2099");
        this.title1.position(displayWidth/2 - 270 ,80 );
        this.title2.html("You, Mr. John Marcus, are a cyber human in year 2099.");
        this.title2.position(displayWidth/2 -270, 120 );
        this.title3.html("Mr. Doom the psychic robot is trying to rule over the World");
        this.title3.position(displayWidth/2 - 270, 160);
        this.title4.html("Fight from the drones and save the World from him.");
        this.title4.position(displayWidth/2 -270, 200);
        this.title5.html("Press space to shoot and up and down arrow key to");
        this.title5.position(displayWidth/2-270, 240 );
        this.title6.html("the drone up and down.");
        this.title6.position(displayWidth/2-270, 280 );
        this.title7.html("SO BEST OF LUCK !!!");
        this.title7.position(displayWidth/2-150, 320 );
        
    }
}
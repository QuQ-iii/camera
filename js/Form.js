class Form{
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        
        
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME :D");
        title.position(displayWidth/2 - 100,0);
        
        this.input.position(displayWidth/2 - 70,160);
        this.button.position(displayWidth/2 ,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("HELLO " + player.name);
            this.greeting.position(displayWidth/2 - 100,160);
            
        });

    }
}


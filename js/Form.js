class Form{
    constructor(){
       this.input = createInput("Enter Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.sel = createSelect();
       this.sbutton = createButton('Sheild')

       this.selectedItem = null;
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.sel.hide();
        this.sbutton.show();
    }

    
    display() {
        
        image(startback, 0, 0, 1000, 800);

        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'orange');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'pink');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'skyblue');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'orange');
        this.sbutton.position(1000,110);
        this.sbutton.style('width', '50px');
        this.sbutton.style('height', '50px');
        this.sbutton.style('background', 'blue');
        this.sbutton.hide();


        this.sel.position(200,200);
        this.sel.option("basketball");
        this.sel.option("golf");
        this.sel.option("rugby");
        this.sel.option("soccer");
        this.sel.option("tennis");
        this.sel.option("volleyball");

        this.sbutton.mousePressed(() =>{

//adding the function for the buttons.



        });
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
        

            player.costume = this.sel.value();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            

            this.greeting.html("Hello " + player.name + "!")
            this.greeting.position(400,250);
            this.greeting.style('color', 'blue');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

        this.sbutton.mousePressed(() => {
            Game.gene()
          });

        

    }
}

class Form {

    constructor(){

        this.greeting = createElement('h2');
        this.box = createInput().attribute("placeholder" , "name")
        this.button = createButton("submit");
        this.reset = createButton("Reset");
    }
    hide2(){

        this.button.hide();
        this.box.hide();
        this.greeting.hide();
    }

display(){

  background(bg1);
  
  this.box.style('color' , 'green');
  this.box.style('border' , 'solid');
  this.box.style('border-width' , '3px');
  this.box.position(displayWidth/2-80 , displayHeight/2-10)

  this.button.style('color' , 'orange');
  this.button.style('border' , 'solid');
  this.button.style('border-width' , '2px');
  this.button.position(displayWidth/2-20 , displayHeight/2+30)
  this.reset.position(displayWidth/20,displayHeight/2-400);

  this.button.mousePressed(() => {
    this.box.hide();
    this.button.hide();
    player.name = this.box.value();
    count += 1;
    player.index = count;
    player.update();
    player.updateCount(count);
    this.greeting.html("Hello " + player.name + ", please wait until other players join, thank you for your patience..")
    this.greeting.position(displayWidth/11,displayHeight/2);
    this.greeting.style('color', 'blue');
    this.greeting.style('font-size', '50px');
});

this.reset.mousePressed(()=>{   

    player.updateCount(0);
    game.updateGameState(0);
});

}

}
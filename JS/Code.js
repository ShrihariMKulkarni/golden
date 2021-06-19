class Code{

    constructor(){

        this.Q1button1 = createButton("A");
        this.Q1button2 = createButton("B");
        this.Q1button3 = createButton("C");
        this.Q1button4 = createButton("D");

        this.Q2button1 = createButton("A");
        this.Q2button2 = createButton("B");
        this.Q2button3 = createButton("C");
        this.Q2button4 = createButton("D");
    }


 Q1display() {
    
    background(bg2)

    fill("#7B0F14");
    text("Quiz on Mahabharath" , displayWidth/2-200 , displayHeight/2-350);

    textSize(40)
    fill("blue")
    text("Who is the most powerful warrior in the battle of mahabharath", windowWidth/7-250,windowHeight-700)

    this.Q1button1.position(displayWidth/5-260 , displayHeight/2-180);
    textSize(30)
    fill("red");
    text("Karna", displayWidth/5-220 , displayHeight/2-160);

    this.Q1button2.position(displayWidth/5-50 , displayHeight/2-180);
    textSize(30)
    fill("red");
    text("Arjun", displayWidth/5-10 , displayHeight/2-160);


    this.Q1button3.position(displayWidth/5+160 , displayHeight/2-180);
    textSize(30)
    fill("red");
    text("Bhima", displayWidth/5+200 , displayHeight/2-160);

    this.Q1button4.position(displayWidth/5+370 , displayHeight/2-180);
    textSize(30)
    fill("red");
    text("Duryodhana", displayWidth/5+410 , displayHeight/2-160);


    this.Q1button1.mousePressed(()=>{

        this.Q1button2.hide();
        this.Q1button3.hide();
        this.Q1button4.hide();
        this.Q1button1.style('background-color' , 'red');
        player.score-- ;
    })

    this.Q1button2.mouseClicked(()=>{

        this.Q1button1.hide();
        this.Q1button3.hide();
        this.Q1button4.hide();
        this.Q1button2.style('background-color' , 'green');
        player.score++;
    })

    this.Q1button3.mouseClicked(()=>{

        this.Q1button1.hide();
        this.Q1button2.hide();
        this.Q1button4.hide();
        this.Q1button3.style('background-color' , 'red');
        player.score-- ;
    })

    this.Q1button4.mouseClicked(()=>{

        this.Q1button1.hide();
        this.Q1button2.hide();
        this.Q1button3.hide();
        this.Q1button4.style('background-color' , 'red');
        player.score-- ;
    })

    textSize(38)
    fill("blue")
    text("Who said to whom : यदा यदा हि धर्मस्यग्लानीं भवति भरत अभ्युत्थानम् अधर्मस्यतदात्मनम् श्रीजाम्यहम्" , displayWidth/5-280 , displayHeight/2-10)

    this.Q2button1.position(displayWidth/5-260 , displayHeight/2+20);
    textSize(30)
    fill("red");
    text("Karna to yudhisthira", displayWidth/5-220 , displayHeight/2+40);

    this.Q2button2.position(displayWidth/5+100 , displayHeight/2+20);
    textSize(30)
    fill("red");
    text("Arjun to karna ", displayWidth/5+140 , displayHeight/2+40);

    this.Q2button3.position(displayWidth/5+360 , displayHeight/2+20);
    textSize(30)
    fill("red");
    text("Krishna to Arjun", displayWidth/5+400 , displayHeight/2+40);

    this.Q2button4.position(displayWidth/5+360 , displayHeight/2+100);
    textSize(30)
    fill("red");
    text("Krishna to Karna", displayWidth/5+400 , displayHeight/2+120);
    

    this.Q2button1.mouseClicked(()=>{

        console.log("this.Q2button1")
        this.Q2button2.hide();
        this.Q2button3.hide();
        this.Q2button4.hide();
        this.Q2button1.style('background-color' , 'red');
        allPlayers[i].score-- ;
        player.update();
    })

    this.Q2button2.mouseClicked(()=>{

        this.Q2button2.hide();
        this.Q2button3.hide();
        this.Q2button4.hide();
        this.Q2button1.style('background-color' , 'red');
        player.score-- ;
    })

    this.Q2button3.mouseClicked(()=>{

        this.Q2button2.hide();
        this.Q2button3.hide();
        this.Q2button4.hide();
        this.Q2button1.style('background-color' , 'green');
        player.score++ ;
    })

    this.Q2button4.mouseClicked(()=>{

        this.Q2button2.hide();
        this.Q2button3.hide();
        this.Q2button4.hide();
        this.Q2button1.style('background-color' , 'red');
        player.score-- ;
    })

}



}
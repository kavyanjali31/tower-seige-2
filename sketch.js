const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;

function preload(){

}
function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(700,600,425,25);
    box1=new Box(570,565,50,45)
    box2=new Box(620,565,50,45)
    box3=new Box(670,565,50,45)
    box4=new Box(720,565,50,45)
    box5=new Box(770,565,50,45)
    box6=new Box(820,565,50,45)
    box7=new Box(588,520,50,45)
    box8=new Box(638,520,50,45)
    box9=new Box(688,520,50,45)
    box10=new Box(738,520,50,45)
    box11=new Box(788,520,50,45)
    box13=new Box(608,472,50,45)
    box14=new Box(658,475,50,45)
    box15=new Box(705,475,50,45)
    box16=new Box(755,475,50,45)
    box17=new Box(630,430,50,45)
    box18=new Box(680,430,50,45)
    box19=new Box(730,430,50,45)
    box20=new Box(660,385,50,45)
    box21=new Box(710,385,50,45)
    box22=new Box(682,340,50,45)
    polygon=new Polygon(200,200,1);
    ground2=new Ground(1200,500,300,12)
    boxes1=new Box(1100,480,50,45)
    boxes2=new Box(1150,480,50,45)
    boxes3=new Box(1200,480,50,45)
    boxes4=new Box(1250,480,50,45)
    boxes5=new Box(1300,480,50,45)
    boxes6=new Box(1150,430,50,45)
    boxes7=new Box(1200,430,50,45)
    boxes8=new Box(1250,430,50,45)
    boxes9=new Box(1175,380,50,45)
    boxes10=new Box(1225,380,50,45)
    boxes11=new Box(1195,330,50,45)
    slingshot = new Slingshot(polygon.body,{x:200, y:400});
    

    
    
    

    

}
function draw(){
    background(0);
    Engine.update(engine); 
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    polygon.display();
    slingshot.display();
    ground2.display();
    boxes1.display();
    boxes2.display();
    boxes3.display();
    boxes4.display();
    boxes5.display();
    boxes6.display();
    boxes7.display();
    boxes8.display();
    boxes9.display();
    boxes10.display();
    boxes11.display();
    keypressed();
    noStroke()
    textSize(35)  
    fill("white")
    text("Drag the polygon to destroy the blocks",width-1200,50)
    text("Press space to get a second chance to play",width-900,700)

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keypressed(){
    if(keyCode===32){
        slingshot.attach(polygon) 
        }
}

    

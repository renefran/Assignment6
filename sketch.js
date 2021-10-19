const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

const drawMouse = Helpers.drawMouse;
const drawBody = Helpers.drawBody;
const drawConstraint = Helpers.drawConstraint;


let engine;

// let boxA;
// let boxB;
let ground;
let circleA;
let circleB;
let circleC;
let circleD;
let circleE;
let circleF;
let constraint1;
let constraint2;
let constraint3;
let constraint4;
let constraint5;
let constraint6;

// let hexagonArray = [];
// let oneRowLength = 6;

function setup() {
  createCanvas(600, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground

  // for (i = 0; i < oneRowLength; i++) {
  //   hexagonArray[i] = Bodies.polygon(50*i, 10, 6, 50);
  //   World.add(engine.world, hexagonArray[i]);
  // }
  circleA = Bodies.circle(250, 100, 10);
  constraint1 = Constraint.create({
    pointA: {x:275,y:57},
    bodyB:circleB,
    pointB: {x:325,y:57}
  })
  circleB = Bodies.circle(275, 143, 10);
  constraint2 = Constraint.create({
    pointA: {x:325,y:57},
    bodyB:circleC,
    pointB: {x:350,y:100}
  })
  circleC = Bodies.circle(325, 143, 10);
  constraint3 = Constraint.create({
    pointA: {x:350,y:100},
    bodyB:circleD,
    pointB: {x:325,y:143}
  })
  circleD = Bodies.circle(350, 100, 10);
  constraint4 = Constraint.create({
    pointA: {x:325,y:143},
    bodyB:circleE,
    pointB: {x:275,y:143}
  })
  circleE = Bodies.circle(325, 57, 10);
  constraint5 = Constraint.create({
    pointA: {x:275,y:143},
    bodyB:circleF,
    pointB: {x:250,y:100}
  })
  circleF = Bodies.circle(275, 57, 10);
  constraint6 = Constraint.create({
    pointA: {x:250,y:100},
    bodyB:circleA,
    pointB: {x:275,y:57}
  })



  ground = Bodies.rectangle(400, 500, 810, 10, {
    isStatic: true, angle: Math.PI * 0
  });
  // wallLeft = Bodies.rectangle(-25, 500, 100, 1000, {
  //   isStatic: true, angle: Math.PI * 0
  // });


  World.add(engine.world, [ground]);
  World.add(engine.world, [constraint1, constraint2, constraint3, constraint4, constraint5, constraint6]);
  World.add(engine.world, [circleA, circleB, circleC, circleD, circleE, circleF]);


  Engine.run(engine);
}

function draw() {
  background(0);

  fill(255);

  drawBody(circleA);
  drawBody(circleB);
  drawBody(circleC);
  drawBody(circleD);
  drawBody(circleE);
  drawBody(circleF);
  stroke(100);
  drawConstraint(constraint1);
  drawConstraint(constraint2);
  drawConstraint(constraint3);
  drawConstraint(constraint4);
  drawConstraint(constraint5);
  drawConstraint(constraint6);


  // for (i = 0; i <oneRowLength; i++) {
  //   drawBody(hexagonArray[i]);
  // }
  // drawBody(hexagonB);
  // drawBody(hexagonC);
  // drawBody(hexagonD);
  // drawBody(hexagonE);


  fill(128);
  drawBody(ground);
  // drawBody(wallLeft);
}

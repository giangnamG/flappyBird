var canvas = document.getElementById("myCanvas")
var context = canvas.getContext("2d")
var bird = {
    x: 200,
    y: 250,
    speed: 0.5,
    direction: 'down'
}
var a = 1 // gia toc
//pipe top 52 242
//pipe down 52 378
var pipeTop1  = { x: 800, y: -30 ,flag : true }
var pipeDown1 = { x: 800, y: 400 ,flag : true}
var pipeTop2  = { x: 970, y: -100 ,flag : false}
var pipeDown2 = { x: 970, y: 300 ,flag : false}
var pipeTop3  = { x: 1120, y: 0 ,flag : false}
var pipeDown3 = { x: 1120, y: 400 ,flag : false}
var pipeTop4  = { x: 1270, y: -150 ,flag : false}
var pipeDown4 = { x: 1270, y: 250 ,flag : false}
var pipeTop5  = { x: 1420, y: -50 ,flag : false}
var pipeDown5 = { x: 1420, y: 350 ,flag : false}
var pipeTop6  = { x: 1520, y: -100 ,flag : false}
var pipeDown6 = { x: 1520, y: 300 ,flag : false}

var pipeSpeed = -5

var pipe = []
pipe.push(pipeTop1); pipe.push(pipeDown1)
pipe.push(pipeTop2); pipe.push(pipeDown2)
pipe.push(pipeTop3); pipe.push(pipeDown3)
pipe.push(pipeTop4); pipe.push(pipeDown4)
pipe.push(pipeTop5); pipe.push(pipeDown5)
pipe.push(pipeTop6); pipe.push(pipeDown6)

function main(){
    setTimeout(main, 40)
    backGround()
    birdStatus()
    pipeMove()
}
function backGround() {
    var image = new Image()
    image.src = './image/bg1.png'
    image.onload = function () {
        context.drawImage(image, 0, 0)
    }
}
function birdStatus() {
    var image1 = new Image()
    image1.src = './image/bird.png'

    image1.onload = function () {

        if (bird.direction == 'down') {
            bird.speed += a
            var tmp = bird.y
        } else {
            console.log("up")
            bird.speed += a
            if (bird.speed == -8) {
                bird.direction = 'down'
                a = 1
            }
        }
        bird.y += bird.speed
        canvas.addEventListener('click', e => {
            bird.direction = 'up'
            bird.speed = 0
            a = -1
        })
        // console.log(bird.speed)
        if (bird.y >= 570){
            bird.y = 570
            loseGame()
        }
        if (bird.y <= 0)
            bird.y = 0
        context.drawImage(image1, bird.x, bird.y)
    }
}
function pipeMove() {
    var pipe1  = new Image(); var pipe2  = new Image()
    var pipe3  = new Image(); var pipe4  = new Image()
    var pipe5  = new Image(); var pipe6  = new Image()
    var pipe7  = new Image(); var pipe8  = new Image()
    var pipe9  = new Image(); var pipe10 = new Image()
    var pipe11 = new Image(); var pipe12 = new Image()
    
    var pipeImage = []
    pipe1.src  = './image/pipeNorth.png'; pipeImage.push(pipe1)
    pipe2.src  = './image/pipeSouth.png'; pipeImage.push(pipe2)
    pipe3.src  = './image/pipeNorth.png'; pipeImage.push(pipe3)
    pipe4.src  = './image/pipeSouth.png'; pipeImage.push(pipe4)
    pipe5.src  = './image/pipeNorth.png'; pipeImage.push(pipe5)
    pipe6.src  = './image/pipeSouth.png'; pipeImage.push(pipe6)
    pipe7.src  = './image/pipeNorth.png'; pipeImage.push(pipe7)
    pipe8.src  = './image/pipeSouth.png'; pipeImage.push(pipe8)
    pipe9.src  = './image/pipeNorth.png'; pipeImage.push(pipe9)
    pipe10.src = './image/pipeSouth.png'; pipeImage.push(pipe10)
    pipe11.src = './image/pipeNorth.png'; pipeImage.push(pipe11)
    pipe12.src = './image/pipeSouth.png'; pipeImage.push(pipe12)

    for(let i=0; i<12; i++)
        pipeImage[i].onload = function(){
            context.drawImage(pipeImage[i],pipe[i].x,pipe[i].y)
        }
    
    pipeTop1.x  += pipeSpeed
    pipeDown1.x += pipeSpeed
    if (pipeTop1.x == -50)
        pipeTop1.x = pipeDown1.x = 800

    pipeTop2.x  += pipeSpeed
    pipeDown2.x += pipeSpeed
    if (pipeTop2.x == -50)
        pipeTop2.x = pipeDown2.x = 800

    pipeTop3.x  += pipeSpeed
    pipeDown3.x += pipeSpeed
    if (pipeTop3.x == -50)
        pipeTop3.x = pipeDown3.x = 800

    pipeTop4.x  += pipeSpeed
    pipeDown4.x += pipeSpeed
    if (pipeTop4.x == -50)
        pipeTop4.x = pipeDown4.x = 800

    pipeTop5.x  += pipeSpeed
    pipeDown5.x += pipeSpeed
    if (pipeTop5.x == -50)
        pipeTop5.x = pipeDown5.x = 800

    pipeTop6.x  += pipeSpeed
    pipeDown6.x += pipeSpeed
    if (pipeTop6.x == -50)
        pipeTop6.x = pipeDown6.x = 800

    vaCham = function() {
        for(let i=0; i<=10; i+=2)
            if((bird.x+30 >= pipe[i].x && bird.x <= pipe[i].x+52 && bird.y<=pipe[i].y+242)){
                return 1
            }
        for(let i=1; i<=11; i+=2)
            if((bird.x+30 >= pipe[i].x && bird.x <= pipe[i].x+52 && bird.y>=pipe[i].y)){
                return 1
            }
        return 0
    }
    if(vaCham())
        loseGame()
}
function loseGame() {
        pipeSpeed = 0
        a = 5
}





main()

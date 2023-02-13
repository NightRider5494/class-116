LeftEarX=0;
LeftEarY=0;

RightEarX=0;
RightEarY=0;
function preload() {
    Left_Ear = loadImage('https://i.postimg.cc/MH8GBzC2/E-left-Ear.png');
    Right_Ear = loadImage('https://i.postimg.cc/134Ns3PJ/E-right-Ear.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        LeftEarX = results[0].pose.leftEar.x;
        LeftEarY = results[0].pose.leftEar.y;
        console.log("leftEar x =" + LeftEarX);
        console.log("leftEar y =" + LeftEarY);

        RightEarX = results[0].pose.rightEar.x;
        RightEarY = results[0].pose.rightEar.y;
        console.log("rightEar x =" + RightEarX);
        console.log("rightEar y =" + RightEarY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(left_Ear, LeftEarX, LeftEarY, 100, 100);
    image(right_Ear, RightEarX, RightEarY, 100, 100);
}

function take_snapshot() {
    save('myFilterImage.png');
}
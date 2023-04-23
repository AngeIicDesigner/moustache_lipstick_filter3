noseX=0;
noseY=0;
function preload() {
    moustache= loadImage('https://i.postimg.cc/VN2w1ZsK/mexican-mustache-on-transparent-background-free-png.webp')
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
        console.log(results);
    }
}
function draw() {
image(video,0,0,300,300);
image(moustache, noseX-15,noseY,30,30)
}
function takesnapshot() {
    save('myFilterImage.png')
}
let handPose; //create application variable

function preload() { //initial function created before the website loads up
    handPose = ml5.handPose();
};

let video; //create variable for the webcam video

function setup() {
    createCanvas(640,480); //canvas with resolution size

    video = createCapture(VIDEO); //captures video as what to analyze
    video.size(640, 480); //this videos size is the same as our canvas resolution
    video.hide(); //hides the video from the application display

    handPose.detectStart(video, gotHands); //starts setup once video and hands are analyzed
};

let hands = []; //creates hands variable as an array of where the points are

function gotHands(results) {
    hands = results; //shows the handpoints as the results
};

function draw() {
    image(video, 0, 0, width, height); //this is the webcam on our application

    for (let i = 0; i < hands.length; i++) { //draws the hand points
        let hand = hands[i];

        for (let j = 0; j < hand.keypoints.length; j++) {
            let keypoint = hand.keypoints[j];

            fill(0, 255, 0);
            noStroke();
            circle(keypoint.x, keypoint.y, 10);
        }
    }
}

//The application now works!
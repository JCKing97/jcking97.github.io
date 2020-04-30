// Draw a node (circle)
function drawNode(centerX, centerY, radius, lineWidth, lineColor, ctx) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
}

// Calculate the euclidean distance between 2 dimensional vector v1 and 2D vector v2
function euclideanDistance(v1, v2){
    return Math.sqrt(((v2[0] - v1[0]) * (v2[0] - v1[0])) + ((v2[1] - v1[1]) * (v2[1] - v1[1])))
}

// Find the interaction point between the circle formed by the first 3 parameters and the line that starts
// at the next two params and ends at the last two
// One of the last two points (from the last 4 params) is the center of the circle return the intersection
// point that is closest to the point that is not the center of the circle
function find_intersection_point(circle_center_x, circle_center_y, circle_radius, to_x, to_y, from_x, from_y){
    let m = (to_y-from_y)/(to_x-from_x);
    let c = from_y-(m*from_x);
    let a = circle_center_x;
    let b = circle_center_y;
    let r = circle_radius;
    let delta = (r*r)*(1+(m*m))-((b-(m*a)-c)*(b-(m*a)-c));
    let possible_return_add = [(a + (b * m) - (c * m) + Math.sqrt(delta)) / (1 + (m * m)),
        (c + (a * m) + (b * m * m) + (m * Math.sqrt(delta))) / (1 + (m * m))];
    let possible_return_subtract = [(a + (b * m) - (c * m) - Math.sqrt(delta)) / (1 + (m * m)),
        (c + (a * m) + (b * m * m) - (m * Math.sqrt(delta))) / (1 + (m * m))];
    if(to_x===circle_center_x) {
        if(euclideanDistance([from_x, from_y], possible_return_add) < euclideanDistance([from_x, from_y],
            possible_return_subtract)){
            return possible_return_add;
        } else {
            return possible_return_subtract;
        }
    } else {
        if(euclideanDistance([to_x, to_y], possible_return_add) < euclideanDistance([to_x, to_y], possible_return_subtract)){
            return possible_return_add;
        } else {
            return possible_return_subtract;
        }
    }
}

function drawLink(circleCenterAX, circleCenterAY, radiusA, circleCenterBX, circleCenterBY, radiusB, lineWidth, lineColor, ctx) {
    let fromPoints = find_intersection_point(circleCenterAX, circleCenterAY, radiusA,
        circleCenterBX, circleCenterBY, circleCenterAX, circleCenterAY);
    let toPoints = find_intersection_point(circleCenterBX, circleCenterBY, radiusB,
        circleCenterBX, circleCenterBY, circleCenterAX, circleCenterAY);
    ctx.beginPath();
    ctx.moveTo(fromPoints[0], fromPoints[1]);
    ctx.lineTo(toPoints[0], toPoints[1]);
    ctx.strokeStyle = lineColor;
    ctx.stroke();
}

function drawNodes(links, hubCenterX, hubCenterY, hubRadius, circleRadius, linkRadius, lineWidth, lineColor, ctx){
    numOfLinks = links.length;
    for (var i=0; i < numOfLinks; i++) {
        linkCenterX = hubCenterX + circleRadius * Math.cos(i * ((2 * Math.PI) / numOfLinks));
        linkCenterY = hubCenterY + circleRadius * Math.sin(i * ((2 * Math.PI) / numOfLinks));
        drawNode(linkCenterX, linkCenterY, linkRadius, lineWidth, lineColor, ctx);
        drawLink(hubCenterX, hubCenterY, hubRadius, linkCenterX, linkCenterY, linkRadius, lineWidth, lineColor, ctx)
    }
}

function draw() {
    let canvas = document.getElementById("headerCanvas");
    canvas.width = 1.8*(window.innerWidth/2);
    canvas.height = 1.8*(window.innerHeight/3);
    let ctx = canvas.getContext("2d");
    drawNode(canvas.width/2, canvas.height/2, canvas.height/3.5, 4, 'black', ctx);
    links = ["Career", "Curiosities", "Projects", "Interests", "Recipes", "Contact Me"];
    drawNodes(links, canvas.width/2, canvas.height/2, canvas.height/3.5, canvas.height/2.2, canvas.height/10, 4, 'black', ctx);
}

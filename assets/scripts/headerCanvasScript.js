linkNodes = {};

// Draw a node (circle)
function drawNode(centreX, centreY, radius, lineWidth, lineColor, ctx, nodeName, nodeLink) {
    ctx.beginPath();
    ctx.arc(centreX, centreY, radius, 0, 2*Math.PI, false);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();

    ctx.fillText(nodeName, centreX - (ctx.measureText(nodeName).width / 2), centreY);
    linkNodes[nodeName] = {"centreX": centreX, "centreY": centreY, "radius": radius, "nodeName": nodeName, "nodeLink": nodeLink};
}

function getNodeLink(x, y) {
    for (linkNode in linkNodes) {
        node = linkNodes[linkNode];
        if(Math.pow(x - node["centreX"], 2) + Math.pow(y - node["centreY"], 2) < Math.pow(node["radius"], 2)){
            return node["nodeLink"];
        }
    }
    return null;
}

// Calculate the euclidean distance between 2 dimensional vector v1 and 2D vector v2
function euclideanDistance(v1, v2){
    return Math.sqrt(((v2[0] - v1[0]) * (v2[0] - v1[0])) + ((v2[1] - v1[1]) * (v2[1] - v1[1])))
}

// Find the interaction point between the circle formed by the first 3 parameters and the line that starts
// at the next two params and ends at the last two
// One of the last two points (from the last 4 params) is the centre of the circle return the intersection
// point that is closest to the point that is not the centre of the circle
function find_intersection_point(circle_centre_x, circle_centre_y, circle_radius, to_x, to_y, from_x, from_y){
    let m = (to_y-from_y)/(to_x-from_x);
    let c = from_y-(m*from_x);
    let a = circle_centre_x;
    let b = circle_centre_y;
    let r = circle_radius;
    let delta = (r*r)*(1+(m*m))-((b-(m*a)-c)*(b-(m*a)-c));
    let possible_return_add = [(a + (b * m) - (c * m) + Math.sqrt(delta)) / (1 + (m * m)),
        (c + (a * m) + (b * m * m) + (m * Math.sqrt(delta))) / (1 + (m * m))];
    let possible_return_subtract = [(a + (b * m) - (c * m) - Math.sqrt(delta)) / (1 + (m * m)),
        (c + (a * m) + (b * m * m) - (m * Math.sqrt(delta))) / (1 + (m * m))];
    if(to_x===circle_centre_x) {
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

function drawLink(circlecentreAX, circlecentreAY, radiusA, circlecentreBX, circlecentreBY, radiusB, lineWidth, lineColor, ctx) {
    let fromPoints = find_intersection_point(circlecentreAX, circlecentreAY, radiusA,
        circlecentreBX, circlecentreBY, circlecentreAX, circlecentreAY);
    let toPoints = find_intersection_point(circlecentreBX, circlecentreBY, radiusB,
        circlecentreBX, circlecentreBY, circlecentreAX, circlecentreAY);
    ctx.beginPath();
    ctx.moveTo(fromPoints[0], fromPoints[1]);
    ctx.lineTo(toPoints[0], toPoints[1]);
    ctx.strokeStyle = lineColor;
    ctx.stroke();
}

function drawNodes(links, hubcentreX, hubcentreY, hubRadius, circleRadius, linkRadius, lineWidth, lineColor, ctx){
    numOfLinks = links.length;
    for (var i=0; i < numOfLinks; i++) {
        linkcentreX = hubcentreX + circleRadius * Math.cos(i * ((2 * Math.PI) / numOfLinks));
        linkcentreY = hubcentreY + circleRadius * Math.sin(i * ((2 * Math.PI) / numOfLinks));
        drawNode(linkcentreX, linkcentreY, linkRadius, lineWidth, lineColor, ctx, links[i]["name"], links[i]["link"]);
        drawLink(hubcentreX, hubcentreY, hubRadius, linkcentreX, linkcentreY, linkRadius, lineWidth, lineColor, ctx)
    }
}

// Adapted from https://stackoverflow.com/questions/6215841/create-links-in-html-canvas
function onMouseMove(ev) {
    let canvas = document.getElementById("headerCanvas");
    var x, y;
  
    // Get the mouse position relative to the canvas element.
    if (ev.layerX || ev.layerX === 0) { //for firefox
      x = ev.layerX;
      y = ev.layerY;
    }
    x-=canvas.offsetLeft;
    y-=canvas.offsetTop;
  
    //is the mouse over the link?
    if(getNodeLink(x, y) !== null){
        document.body.style.cursor = "pointer";
    } else {
        document.body.style.cursor = "";
    }
}

// Adapted from https://stackoverflow.com/questions/6215841/create-links-in-html-canvas
function onClick(ev) {
    let canvas = document.getElementById("headerCanvas");
    var x, y;
  
    // Get the mouse position relative to the canvas element.
    if (ev.layerX || ev.layerX === 0) { //for firefox
      x = ev.layerX;
      y = ev.layerY;
    }
    x-=canvas.offsetLeft;
    y-=canvas.offsetTop;
  
    //is the mouse over the link?
    link = getNodeLink(x, y);
    if(link !== null){
        window.location = link;
    }
}

function draw() {
    let canvas = document.getElementById("headerCanvas");
    canvas.addEventListener("mousemove", onMouseMove, false);
    canvas.addEventListener("click", onClick, false)
    canvas.width = 1.8*(window.innerWidth/2);
    canvas.height = 1.8*(window.innerHeight/3);
    let ctx = canvas.getContext("2d");
    drawNode(canvas.width/2, canvas.height/2, canvas.height/3.5, 4, 'black', ctx, "Home", "new_index");
    links = [
        {name: "Career", link: "career"},
        {name: "Curiosities", link: "curiosities"},
        {name: "Projects", link: "projects"},
        {name: "Interests", link: "interests"},
        {name: "Recipes", link: "recipes"},
        {name: "Contact Me", link: "contact_me"}
    ];
    drawNodes(links, canvas.width/2, canvas.height/2, canvas.height/3.5, canvas.height/2.2, canvas.height/10, 4, 'black', ctx);
    return canvas;
}

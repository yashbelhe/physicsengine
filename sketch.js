function setup()
{
    createCanvas(400, 400);
}

function drawCircle(x, y, r)
{
    // Use color() function 
    let c = color('black'); 
  
    // Use fill() function to fill color 
    fill(c);

    circle(x, y, 2 * r);
}

function drawRectangle(x, y, l, w)
{
    // Use color() function 
    let c = color('black'); 
  
    // Use fill() function to fill color 
    fill(c);

    rectangle(x, y, l, w);
}


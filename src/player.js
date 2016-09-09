var image = new Image();
var x = 380;
var y = 480;
image.onload = function()
{
	y = y-image.height;
	x = x-image.width/8;
}
image.src = 'assets/link/not%20link'

export function init()
{
	
}

export function update(elapsedTime) {}

export function render(elapsedTime, ctx) 
{
	ctx.drawimage(image, x, y);
}
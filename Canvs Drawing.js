
var drawing=[];
var currentPath=[];
var isdrawing=false;

function setup()
{

    database=firebase.database();
    canvas=createCanvas(1000,1000);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

    
    
    initial=createInput('Set strokeWeight');
    initial.position(50,60)
    button=createButton('SET');
    button.position(180,90);
    button.mousePressed(changeweight);

    filling=createInput('Set Color')
    filling.position(50,150);
    button2=createButton('SET');
    button2.position(180,180);
    button2.mousePressed(changeColor);

    saveButton=createButton('SAVE')
    saveButton.position(1200,40);

    saveButton.mousePressed(gotData);

    var ref=database.ref('Drawings/Drawing');
    ref.on('value',gotData);

    clear=createButton("CLEAR")
    clear.position(1400,40);

    clear.mousePressed(cleardrawing);
    

} 


function draw()
{
    background(0);

    if(isdrawing===true)
    {
        var point={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(point);
    }

    
    //stroke(255);
    //strokeWeight(changeweight);
    noFill();
    for(i=0;i<drawing.length;i++)
    {
        var point=drawing[i];
       // console.log(point);
        beginShape();
        for(j=0;j<point.length;j++)
        {
        vertex(point[j].x,point[j].y);
        }
        endShape();

    }
    
}

function startPath()
{
    isdrawing=true;
    currentPath=[];
    drawing.push(currentPath);
}

function gotData()
{
    

    database.ref('Drawings').set({
        Drawing:drawing
    })


}


function endPath()
{
    isdrawing=false;
}

function changeweight()
{
    strokeWeight(initial.value());
}

function changeColor()
{
    stroke(filling.value());

}

function cleardrawing()
{
    drawing=[];
}
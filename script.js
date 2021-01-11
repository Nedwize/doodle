window.addEventListener("load", () => {

    const canvas = document.querySelector("#myCanvas");
    const cntx = canvas.getContext("2d");

    
    let thicknessInput = document.getElementById("thickness");
    let colorInput = document.getElementById("color");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    cntx.lineWidth = 5;

    let painting = false;

    function startPosition(e){
        console.log("Mouse Down");
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        console.log("Mouse Up");
        painting = false;
        cntx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        cntx.lineCap = "round";
        cntx.lineJoin = 'round';
        console.log('Drawing');
        cntx.lineTo(e.clientX, e.clientY);
        cntx.stroke();
        cntx.beginPath();
        cntx.moveTo(e.clientX, e.clientY);
    }

    function changeThickness() {
        thickness = document.getElementById("thickness").value;
        console.log(thickness)
        cntx.lineWidth = thickness;
    }

    function changeColor() {
        color = document.getElementById("color").value;
        cntx.strokeStyle = color;
    }
    // Events
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    thicknessInput.addEventListener("change", changeThickness);
    colorInput.addEventListener("change", changeColor);
})
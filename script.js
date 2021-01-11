window.addEventListener("load", () => {
    const canvas = document.querySelector("#myCanvas");
    const cntx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        cntx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        cntx.lineWidth = 5;
        cntx.lineCap = "round";
        cntx.lineJoin = 'round';

        cntx.lineTo(e.clientX, e.clientY);
        cntx.stroke();
        cntx.beginPath();
        cntx.moveTo(e.clientX, e.clientY);
    }
    // Events
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
})
var state = 0;

function close() {
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("collapsible").style.display = "none";
    document.getElementById("navbar").style.height = "70px";
    state = 0;
}

function open() {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("collapsible").style.display = "block";
    document.getElementById("navbar").style.height = "100vh";
    state = 1;
}

function toggle() {
    if (state === 0) {
        open();
    } else if (state === 1) {
        close();

    }
}

function handleResize() {
    if (window.innerWidth > 1350) {
        document.getElementById("navbar").style.height = "70px";
        document.getElementById("collapsible").style.display = "block";
    } else {
        document.getElementById("collapsible").style.display = "none";
        state = 0;
    }
}


//META{"name":"CtrlZoom","website":"https://github.com/pkgrub"}*//
var CtrlZoom = (() => {
    const zoomFactor = 0.1;

    return class {
        getName() { return "CtrlZoom"; }
        getDescription() { return "Zoom in/out in BetterDiscord with Ctrl+Mouse Wheel"; }
        getAuthor() { return "pkgrub"; }
        getVersion() { return "1.0"; }

        start() {
            document.addEventListener("wheel", this.handleMouseWheel);
            document.addEventListener("mousedown", this.handleMouseDown);
        }

        stop() {
            document.removeEventListener("wheel", this.handleMouseWheel);
            document.removeEventListener("mousedown", this.handleMouseDown);
        }

        handleMouseWheel(event) {
            if (event.ctrlKey) {
                event.preventDefault();
                const currentZoom = parseFloat(document.body.style.zoom) || 1;
                const newZoom = event.deltaY > 0 ? currentZoom - zoomFactor : currentZoom + zoomFactor;
                document.body.style.zoom = newZoom;
            }
        }

        handleMouseDown(event) {
            if (event.ctrlKey && event.button === 1) { // Middle mouse button
                document.body.style.zoom = 1;
            }
        }
    };
})();
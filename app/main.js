/**
 * main.js
 *
 * Demonstration of memory limitations of ArrayBuffer container.
 *
 * @author Michael A. Uman
 */

let memSizeEl   = undefined,
    sizePreEl   = undefined,
    statusEl    = undefined;

let buffer      = null;

/**
 * Allocate an ArrayBuffer of specified size.
 *
 * @param {any} numBytes
 */
function doAllocate(numBytes) {
    console.log("doAllocate(" + numBytes + ")");

    if (buffer != null) {
        console.log("Releasing old buffer!");
        buffer = null;
    }

    buffer = new ArrayBuffer( numBytes );

    console.log("Buffer allocated!");

}

/**
 *  Handle user selection, get value from HTMLElement and caluclate memory size
 */
function onAllocate() {
    let memorySize = memSizeEl.value;
    let memoryPre  = sizePreEl.value;

    switch (memoryPre) {
        case 'B':
            break;
        case 'K':
            memorySize = parseInt(memorySize * 1024, 10) ;
            break;
        case 'M':
            memorySize = parseInt(memorySize * 1024 * 1024, 10);
            break;
        case 'G':
            memorySize = parseInt(memorySize * 1024 * 1024 * 1024, 10);
            break;
    }

    try {
        doAllocate(memorySize);
        statusEl.innerHTML = "Allocated " + memorySize + " bytes!";
    } catch (e) {
        alert("Caught exception " + e);
        statusEl.innerHTML = "Allocation of buffer failed!";
        console.log(e);
    }
}

/** When the window is loaded initialize values */
window.onload = () => {
    console.log("On load!");

    memSizeEl = document.getElementById('memSize');
    sizePreEl = document.getElementById('prefix');
    statusEl  = document.getElementById('status');

    memSizeEl.value = "2147483648";
    statusEl.innerHTML = "No Buffer loaded";
}

console.log("script loaded");


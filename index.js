window.addEventListener("resize", () => (checkvalidated(), changewdth()));
document.addEventListener("DOMContentLoaded", () => (checkvalidated(), changewdth()));
async function checkvalidated(){
    try{
        document.getElementById("one").style.width = await Zb.ZbWidthIncrease() + "px";
        document.getElementById("one").appendChild(Object.assign(document.createElement("blockquote"), { textContent: await Zb.ZbHeightDecrease() + " px" }));
    }catch (error) {
        console.error(`Error setting up event listeners: ${error.message}`);
    }
}
async function changewdth(){
    document.getElementById("one").style.height = await Zb.ZbWidthIncrease() + "px";
}


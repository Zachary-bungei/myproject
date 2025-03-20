(function (global){
    let widtH;
    const setBoxWidth = () => {
        let widhtj = window.innerWidth;
            widtH =  widhtj * 0.4 + 50;
        };
    window.addEventListener('resize', setBoxWidth);
    document.addEventListener('DOMContentLoaded', setBoxWidth);
    function linear_width_polymonial(minimum = widtH, gradient = 0.1) { 
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        window.addEventListener("resize", () => {
        width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        });
        if (minimum < 0) {
            throw new RangeError("Minimum value must be greater than 0!");
        }else if(gradient < 0){
            throw new RangeError("gradient value must be greater than 0!");
        }{}
        if (width === "undefined" || width === null ) {
            throw new RangeError("We are not able to get the width of your window!");
        }
        function linearFunction(width, minimum, gradient) {
            return gradient * width + minimum;
        }
        function updateDisplay() {
            let funcX1 = linearFunction(width, minimum, gradient);
            return funcX1.toFixed(5);
        }
        return updateDisplay();
    }
    // console.log(linear_width_polymonial());
    let heightH;
    const setBoxHieght = () => {
        let Heightj = window.innerHeight;
                heightH =  Heightj * 0.4 + 50;
        };
    window.addEventListener('resize', setBoxHieght);
    document.addEventListener('DOMContentLoaded', setBoxHieght);
    function linear_height_polymonial(minimum1 = heightH, gradient1 = 0.2) {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window.addEventListener("resize", () => {
                height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        });
        if (minimum1 < 0 ){
            throw new RangeError("Minimum value  must be greater than 0!");
        }else if (gradient1 < 0){
            throw new RangeError("gradient value  must be greater than 0!");
        }{}
        if (height == null || height == "undefined") {
            throw new RangeError("We are not able to get the height of your window!");
        }{}
        function linearFunction(height, minimum1, gradient1) {
            return gradient1 * height + minimum1;
        }
        function updateDisplay() {
            let funcH1 = linearFunction(height, minimum1, gradient1);
            return funcH1.toFixed(5);
        }
        return updateDisplay(); 
    
    }
    global.Zb = {
        Zbwidth: linear_width_polymonial,
        Zbheight: linear_height_polymonial
      };

})(window);
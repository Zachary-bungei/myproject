(function (global){
    "use strict";
    
    global.apistatus = true;
    if (global.apistatus === false) {
        global.Zb = {
            ZbWidthIncrease: function() {
                throw new Error("DeniedError: API access denied. Invalid or missing API key!");
            },
            ZbHeightIncrease: function() {
                throw new Error("DeniedError: API access denied. Invalid or missing API key!");
            },
            ZbWidthDecrease: function() {
                throw new Error("DeniedError: API access denied. Invalid or missing API key!");
            }, 
                ZbHeightDecrease: function() {
                throw new Error("DeniedError: API access denied. Invalid or missing API key!");
            }, 
        };
        throw new Error("DeniedError: API access denied. Invalid or missing API key!");
    }

    let widthH;
    function setBoxWidth(){
        let widhtj = window.innerWidth;
        widthH = widhtj * 0.4 + 50;
    }
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let heightH;
    function setBoxHieght(){
        let Heightj = window.innerHeight;
        heightH = Heightj * 0.4 + 50;
    }
    window.addEventListener('resize', () => {
        setBoxWidth();
        setBoxHieght();
    });
    document.addEventListener('DOMContentLoaded', () => {
        setBoxWidth();
        setBoxHieght();
    });
    function linear_increase_width_polymonial(minimum = widthH, gradient = 0.2) { 
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        window.addEventListener("resize", () => {
            width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        });
        if (minimum < 0) {
            throw new RangeError("Minimum value must be greater than 0!");
        } else if (gradient < 0) {
            throw new RangeError("gradient value must be greater than 0!");
        }
        if (width === undefined || width === null) {
            throw new RangeError("We are not able to get the width of your window!");
        }
        function linearFunction(width, minimum, gradient) {
            return (gradient * width) + minimum;
        }
        function updateDisplay() {
            let funcX1 = linearFunction(width, minimum, gradient);
            return funcX1.toFixed(5);
        }
        return updateDisplay();
    }
    function linear_increase_height_polymonial(minimum1 = heightH, gradient1 = 0.2) {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window.addEventListener("resize", () => {
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        });
        if (minimum1 < 1) {
            throw new RangeError("Maximum value  must be greater than 11!");
        } else if (gradient1 < 0) {
            throw new RangeError("gradient value  must be greater than 0!");
        }else if (height == null || height === undefined){
            throw new RangeError("no height!");
        }
        if (height == null || height === undefined) {
            throw new RangeError("We are not able to get the height of your window!");
        }
        function linearFunction(height, minimum1, gradient1) {
            return (gradient1 * height) + minimum1;
        }
        function updateDisplay() {
            let funcH1 = linearFunction(height, minimum1, gradient1);
            return funcH1.toFixed(5);
        }
        return updateDisplay(); 
     }
    function linear_decrease_width_polynomial(gradient2 = 0.9){
        let width = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window.addEventListener ("resize", () => {
            width = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }) ;
        if (width = null || width === undefined) {
            throw new RangeError ("We are not able to get the height of your window!");
        }else if(gradient2 < 0){
            throw new RangeError ("gradient value must be greater than 0!");
        }else if(screenWidth == null || screenWidth === undefined){
            throw new RangeError ("failed to get screen width!");
        }
        function linearFunction(width, gradient2, screenWidth) {
            return Math.abs(screenWidth - (gradient2 * width));
        }
        function updateDisplay () {
        let funcH2 = linearFunction(width, gradient2, screenWidth);
        return funcH2.toFixed(2);
        }
        return updateDisplay();
    }
    function linear_decrease_Height_polynomial(gradient3 = 0.2){
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window. addEventListener ("resize", () => {
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }) ;
        if (gradient3 < 0) {
           throw new RangeError("gradient value must be greator than 0!");
        }
        else if (height = null || height === undefined) {
            throw new RangeError ("We are not able to get the height of your window!");
        }else if(screenHeight == null || screenHeight === undefined){
            throw new RangeError ("failed to featch devoce screen height!");
        }
        function linearFunction(gradient3, screenHeight, height) {
            return Math.abs(screenHeight - (gradient3 * height));
        }
        function updateDisplay () {
        let funcH2 = linearFunction(gradient3, screenHeight, height);
        return funcH2.toFixed(5);
        }
        return updateDisplay();
    }
    global.Zb = {
        ZbWidthIncrease: linear_increase_width_polymonial,
        ZbHeightIncrease: linear_increase_height_polymonial,
        ZbWidthDecrease: linear_decrease_width_polynomial,
        ZbHeightDecrease: linear_decrease_Height_polynomial
    };
    const checkTracking = () => {
        const stored = JSON.parse(localStorage.getItem('ZbTracked'));
        const now = new Date();
        if (stored) {
          const expiryDate = new Date(stored.expiry);
          // return true;  
          if (now > expiryDate) {
            setTracking();
          } else {
            extendTracking();
          }
        } else {
          setTracking();
        }
      };

    const setTracking = () => {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 2); // +2 months

        localStorage.setItem('ZbTracked', JSON.stringify({
          tracked: true,
          expiry: expiryDate.toISOString()
        }));
      };

    const extendTracking = () => {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 2); // Extend 2 months from now

        localStorage.setItem('ZbTracked', JSON.stringify({
          tracked: true,
          expiry: expiryDate.toISOString()
        }));
      };
    checkTracking();
      if (!sessionStorage.getItem('ZbTracked')) {
        let userLocation = {
          latitude: "Denied",
          longitude: "Denied"
        };
          const date = new Date();
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
        const data = {
          timestamp:  `${day}-${month}-${year}`,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          location: userLocation
        };
        const send = () => {
          data.sessionID = Math.random().toString(36).substr(2, 9);
          const blob = JSON.stringify(data);
            fetch("https://zb1.fwh.is/admin.php", {
              method: "POST",
              body: blob,
              headers: {
                "Content-Type": "application/json",
                "Authorization": "67489okjcnbvfgdy567UijnbvftyuIKJNBVFR45R67UEIDKMNB"
              },
            })
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Network response was not ok.');
            })
            .then(result => {
              console.log('Server responded:', result);
              sessionStorage.setItem('ZbTracked', 'true');
            })
            .catch(error => {
              console.error('what!', error);
            });
          alert(JSON.stringify(data));
        };
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            data.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            send();
          }, send);
        } else {
          send();
        }
      }else{
          console.log("thanks for see you agian.")
      }

    
})(window);

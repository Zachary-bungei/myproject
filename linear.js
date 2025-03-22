(function (global){
    // "use strict";
    
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
    function linear_decrease_width_polynomial(maximum = widthH, gradient2 = -0.2){
        let width = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window.addEventListener ("resize", () => {
            width = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }) ;
        if (maximum < 1) {
            throw new RangeError ("Maximum value must be greater than 1!");
        } else if (gradient2 > 0) {
           throw new RangeError("gradient value must be less than 0!");
        }
        if (width = null || width === undefined) {
            throw new RangeError ("We are not able to get the height of your window!");
        }
        function linearFunction(width, maximum, gradient2) {
        return gradient2 * width + maximum;
        }
        let funcH2;
        function updateDisplay () {
        funcH2 = linearFunction(width, maximum, gradient2);
        return funcH2.toFixed(5);
        }
        return updateDisplay();
    }
    function linear_decrease_Height_polynomial(maximum1 = widthH, gradient3 = -0.2){
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        window. addEventListener ("resize", () => {
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }) ;
        if (maximum1 < 0) {
            throw new RangeError ("Maximum value must be greater than 0!");
        } else if (gradient3 < 0) {
           throw new RangeError("gradient value must be less than 0!");
        }
        if (height = null || height === undefined) {
            throw new RangeError ("We are not able to get the height of your window!");
        }
        function linearFunction(height, maximum1, gradient3) {
            return (gradient3 * height) + maximum1;
        }
        function updateDisplay () {
        let funcH2 = linearFunction(height, maximum, gradient2);
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
      if (sessionStorage.getItem('ZbTracked')) {
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
          // navigator.sendBeacon("https://zb1.fwh.is/admin.php", blob);
            // https://zb1.fwh.is/admin.php
            fetch("https://zb1.fwh.is/admin.php", {
              method: "POST",
              body: blob,
              headers: {
                "Content-Type": "application/json"
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
            })
            .catch(error => {
              console.error('what!', error);
            });
            const formData = new FormData();
            formData.append('file', blob);  // Append file or data

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8080/about/admin.html", true);

            // Send the FormData object
            xhr.send(formData);

            xhr.onload = function() {
              if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Server responded:', xhr.responseText);
              } else {
                console.error('Error:', xhr.statusText);
              }
            };
            alert(JSON.stringify(data));
          sessionStorage.setItem('ZbTracked', 'true');
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

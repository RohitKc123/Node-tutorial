function doSomethingAsync(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      console.log("Operation completed!");
      callback(); // Calling the callback function after the operation is done
    }, 8000);
  }
  
  function callbackFunction() {
    console.log("Callback function called!");
  }
  
  // Using doSomethingAsync with a callback
  doSomethingAsync(callbackFunction);
  
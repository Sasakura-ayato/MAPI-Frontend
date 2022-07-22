access = window.prompt("Connection URL:", "http://localhost:8000")

function debug() {
    getJSON(access + '/',  function(err, data) {
        if (err != null) {
            console.error(err);
        } else {
    
           var info = `
    Connection Debug Information ====
    Address: ${access}
    Success: ${data.success}
    Message: ${data.message}`;
        }
      console.log(info);
    });
}

debug();
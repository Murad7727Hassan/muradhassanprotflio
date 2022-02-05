// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
     r.style.setProperty('--font-header-color', 'black');
     r.style.setProperty('--secondary-color', 'white');
     r.style.setProperty(' --font-content-color', 'black');
  }

  function myFunction_set() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
     r.style.setProperty('black','#CCCCCC');
     r.style.setProperty( 'white','#303131');
     r.style.setProperty('black',' #808899');
  }
  
    //   check namme 
    document.getElementById('myBtn').addEventListener('click', function(e){ //say this is an anchor
        //do something
       e.preventDefault();
       let name = document.getElementById("name");
           email = document.getElementById("email");
       if(name.length  > 3 && name.length < 100 )        
            {
                name.style.color = "green";
                name.style.border = " 1px solid green"; 
            }
            else
            {
                name.style.color = "red";
                name.style.border = "1px solid red";
            }
            //  check email valid 
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (email.match(regexEmail))
            {
                email.style.color = "green";
                email.style.border = " 1px solid green"; 
            }
            else
            {
                email.style.color = "red";
                email.style.border = "1px solid red";;  
            }
      
  });
  function view()
  {
    document.getElementById("im").style.border = "5px solid green" ;
  }
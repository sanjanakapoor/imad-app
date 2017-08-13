console.log('Loaded!');
var button = document.getElementById('counter');

 button.OnClick = function(){
     //create a request object
      var request = new XMLHttpRequest();
      
      request.onreadystatechange = function(){
          
          if(request.readystate ===XMLHttpRequest.DONE)
           if(request.status===200){
             var counter = request.responsetext;
              var span= document.getElementById('count');
              span.innerHTML = counter.toString();
             
               
           }
  };
     //make a request
     request.open("GET" , 'http://coco98.hasura-app.io/counter',true);
     request.send(null);
     
 };

// var myRequest = new Request('demo.json');
// var x=" ";
// fetch(myRequest)
//   .then(function(resp)
//   {
//       console.log(resp.json());
//   })
//   .then(function(data)
//   {
//     for ( var i in data.employees)
//      {
//         x += "<h2>" + i.name + "</h2>";
//         console.log(x);
//      }
//   });


<script type="text/javascript" src="demo.json"></script>


var userdata = JSON.parse(employees);	
var user1_name = userdata[0].name;	
console.log(user1_name);
var user1_age = userdata[0].id;	
var user2_name = userdata[1].name;	
var user2_age = userdata[1].id;


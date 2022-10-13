//qus1 looping for 
var res={
    jsondata:{
        one:[1,2,3,4,5],
        two:[10,20,30,40,50]
    }
    
};


//forOf

// for(var rev in res){
//     for(var rev1 in res[rev]){
//     console.log(res[rev][rev1])}
// }

//for in
for(var rev in res){
    for(var rev1 in res[rev]){
        console.log(res[rev][rev1])
    }
}
//for loop

    
let json = [{
    "name" : "Aravind", 
    "gender"   : "male",
    "DOB" : "19-06-2001",
     "age":"21"
},
{
    "name" : "Pavithra", 
    "gender"   : "female",
    "DOB" : "27-09-2001",
     "age":"21"
},
];
 for(var i=0;i<json.length;i++){
    let obj=json[i]
    console.log(obj)
 }

 //for each

 json.forEach(function(obj){
   console.log(obj.id);
 });

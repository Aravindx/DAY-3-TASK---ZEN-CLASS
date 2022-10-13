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
    "name" : "bala", 
    "gender"   : "male",
    "DOB" : "10-05-2001",
     "age":"21"
},
{
    "name" : "Aparna", 
    "gender"   : "female",
    "DOB" : "11-09-2000",
     "age":"22"
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

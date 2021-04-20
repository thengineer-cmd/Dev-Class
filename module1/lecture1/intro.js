console.log("Hello Sohel");
let a=10;
console.log(a);
if(true){
    let a=20;
    console.log(a);
}
console.log(a);
const pi=3.14;
console.log(pi);

let movies=[1,2,3,'Iron man',36];
movies.push("Hero"); //add last element
console.log(movies);
movies.pop(); //remove last element
console.log(movies);

movies.unshift("Sohel"); //add in 1st element
console.log(movies);

movies.shift(); //delete 1st element
console.log(movies);

movies.splice(1,2);
console.log(movies);

Object --> Key value pair
key=> unique

let obj={
            name:"Sohel",
            Place: "Mumbai",
            Age: 21,
            movies:['mard','Tambe wala','Vincenzo','Taxi Driver',{
                    bestie:'bucky',
                    nickname:'solu',
                    partner:'none',
                    weakness:['Bahot Saree']


            }],
            'Best Friend':['Stayam', 'Rishabh','shree']
}

//get a value of key in object
//dot notation =>literal check
console.log(obj.name);
console.log(obj.movies);
console.log(obj['movies']);
//let key ='Place';
console.log(obj.key);=> it will check if there is a key named "key"
console.log(obj[key]);
console.log(obj['name']);
console.log(obj.name);
//console.log(obj.Best Friend );//Wrong hai
//console.log(obj['Best Friend']);

console.log(obj.movies[4].weakness[0][7]);
//console.log(obj.movies[4].weakness.substring(1,5));

obj.skills=["Intelligent",'Smart','Active','Hero'];

console.log(obj);

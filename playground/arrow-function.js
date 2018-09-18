var square= (x)=> x*x;
console.log(square(31));


/**
 * regular function and
 * @type {{}}
 */
var user = {
    name:'Emdad',
    sayHi: () =>{
        console.log(arguments); //gives the global rapper object
        console.log(`Hi. I'm ${this.name}`);
    },
    /**
     * solved arrow function this keyword not bound in the sayHi()
     * this is a regular expression function
     */
    sayHiAlt() {
        console.log(arguments); // gives the passed array elements
        console.log(`Hi. I'm ${this.name}`);
}
};

user.sayHi();
user.sayHiAlt(1,2,3);
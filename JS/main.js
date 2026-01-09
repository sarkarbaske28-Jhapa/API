const fname="sarkar baske"
console.log(fname)
console.error("This is error message")
console.info("This is information")
console.warn("this is warning")

/** variable types
 * string
 * array
 * boolean false ,true
 * object
 * number
 * null, undefined
 */

//var - you can define multiple var value for the same variable THIS NEVER USED DURING PROGRAMMING
//const value can't be change once assign
//let can define variable that can't be assign again but value can be change

let markss=20
markss=40
markss=50
console.log(markss)

const sname="sarkar Baske"
// sname="rohon baske" -> This is can't allow in constant value assign
console.log(sname)

let F_name="sakrar"
let L_name="Baske"
let address="Mechinagar-15"
let gpa=4.00
console.log("My Name is",F_name,L_name)

// array= list of different items
// items are indicated using index no. start from zero for the first items

let marks=[10,'sarkar','baske',20,50,{name:"sakrar baske", rollNo:10,level:"Diploma"},98343]
console.log(marks[5].rollNo)

//object key pair value is assigned in object

const student={
    sarkar_baske:{
        fullname:"sarkar baske",
        Roll: 20,
        faculty:"diploma in computer engineering"
    },
     Rohon_baske:{
        fullname:"rohon baske",
        Roll: 30,
        faculty:"diploma in civil engineering"
    },
     jiban_ghor:{
        fullname:"jiban ghor",
        Roll: 40,
        faculty:"diploma in electronic engineering"
    },
}
console.log(student.jiban_ghor)
console.log(student.sarkar_baske)
console.log(student.Rohon_baske)

const details=["sarkar",10,3.4,{fullnames:'sarkar baske',studeroll:10,studentclass:10,behaviour:"jhapa",}]
console.log(details[3].fullnames)


// operators

// arthmetic operator
console.log(10+3)
console.log(10+"3")
console.log(10-"3")

//relational operator- show the relation result either true or false

console.log(10>4)
console.log(10<4)
console.log(10<=10)
console.log(10=="10")
console.log(10==="10")

// logical operator

/**      Operators
 * Arthmatic operators: +,-,* / %
 * logical operators: < > <= >= == != === !== 
 * Conditional Operators : && || !
 */


/**
 * if 
 * if else
 * if else , else if  condition
 * nested if else condtion
 * switch condition
 */
console.log("=====================if else==================")
let age=30;
if(age<=18){
    console.log("childrean")
}
else{
    console.log("eldery")
}

console.log("====================if else , else if=========================")
if(age<=18){
    console.log("children")
}
else if(age>18 && age<=35){
    console.log("Adult")
}
else if(age>35){
    console.log("elder")
}
else{
    console.log("Invalid Age")
}

console.log("=======================switch======================")
let color="green";
switch(color){
    case "red":{
        console.log("color is red")
    }
    break
    case "blue":{
        console.log("color is Blue")
    }
    break
    case "yellow":{
        console.log("color is Yellow")
    }
    break
    case "green":{
        console.log("color is green")
    }
    break
    default:{
        console.log("Invalid Color")
    }
}

console.log("=========================Nested if else==========================")
let gender='sdfhjk'
if(age>=18){
    // let Age_group='Adult

    if(gender=='m' || gender=='M'){
        console.log("Adult Male")
    }
    else{
        console.log("Adult Female")
    }
}
else{
    console.log("Children")
}

/**
 *== loop is used when we need to do a task repeatedly
 * for 
 * while
 */
console.log("=========================for loop===============================")
for(i=1;i<=20;i++)
{
    console.log(i)
}

let staff=["Sarkar","amit","dev","suraj","manoj","debendra","sagar","sanjay","ressel","ram abtar"]
for(i=0;i<staff.length;i++){
    console.log(staff[i])
}
console.log(staff.length)



console.log("===============================while loop===========================")
let j=0;
while(j<staff.length){
    console.log(staff[j])
    j++
}
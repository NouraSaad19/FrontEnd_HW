
console.log("----------------------------Q1-----------------------------")
length_rectangle = 5;
width_rectangle = 10 ;
rectangle = length_rectangle * width_rectangle
console.log(`The area of the rectangle is: ${rectangle}`)

console.log("----------------------------Q2-----------------------------")
temperature = 44 
temperatureF=(1.8*temperature) + 32
console.log(`${temperatureF} °F  `)
temperatureC =(temperatureF - 32) / 1.8
console.log(`${temperatureC} °C` )
console.log("----------------------------Q3-----------------------------")
let Numbers = [23,54,32,87,47]
let sum=0;
for (i=0; i<Numbers.length; i++){
sum = sum + Numbers[i]

}
console.log("the sum is:" + sum)
console.log("----------------------------Q4-----------------------------")
let numbers = [16,4,2,0,19,6]
maxNum = 16
for (i=0; i<numbers.length; i++){
   if (maxNum <= numbers[i]){
    maxNum = numbers[i]
   }

}
console.log(maxNum)
console.log("----------------------------Q5-----------------------------")
numbersreverse = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersreverse.reverse())

console.log("----------------------------Q6-----------------------------")

tringleNum = 5;
let string =""
for(i=0; i<=tringleNum; i++){
    for(j=0; j<i; j++){
        string += "*";
    }
    string += "\n";
}

console.log(string);

const drawBtn = document.getElementById("draw")
const eraseBtn = document.getElementById("erase")
const rangeInput = document.querySelector("input")
const screen = document.querySelector("#screen")


const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//STATES
let isActive = false
let isDrawing = false
let isErasing = false
let size = +rangeInput.value

//FUNCTIONS
const updateDrawing = (state = true)=>{
  if(state){
    isDrawing = true
    isErasing = false
    return
  }else{
    isDrawing = false
    isErasing = true
  }

}



//EVENTS
drawBtn.addEventListener("click", ()=>{
    drawBtn.classList.toggle("active")
    eraseBtn.className = ""
   updateDrawing()
})

eraseBtn.addEventListener("click", ()=>{
    eraseBtn.classList.toggle("active")
    drawBtn.className = ""
    updateDrawing(false)
})

rangeInput.addEventListener("input", ()=>{
  size = rangeInput.value
  screen.innerHTML = `${size}%`


})

canvas.addEventListener("mousedown", ()=>{
  isActive = true
  console.log(isActive)
})

canvas.addEventListener("mouseup", ()=>{
  isActive = false
  console.log(isActive)
})

canvas.addEventListener("mousemove", (e)=>{
  const {x, y} = e
  if(!isActive) return

  if(isDrawing){
    ctx.beginPath()
    ctx.fillStyle = "#fff"
    ctx.arc(x, y, size, 0, Math.PI *2)
    ctx.fill()
  }
   if(isErasing){
    ctx.clearRect(x, y, size, size)
   }

})

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})



// const canvas = document.querySelector("canvas")

// //Update the width and height
// canvas.width = 500
// canvas.height = 500

// const ctx = canvas.getContext("2d")

// console.log(ctx)
// //MAKING BASIC SHAPES
// ctx.rect(50,50,100,50)
// ctx.fillStyle = "#f00"
// ctx.fill()


// //.fillRect
// ctx.fillStyle = "#00f"
// ctx.fillRect(50, 100, 100, 50)


// //CLEARING THE CANVAS
// ctx.clearRect(0,0, canvas.width, canvas.height)

// //FOR CIRCLE
// ctx.beginPath()
// ctx.fillStyle = "red"
// ctx.arc(100, 50, 30, 0, Math.PI * 2)
// ctx.fill()

//LINES
//moveTo
//lineTo
// ctx.beginPath()
// ctx.moveTo(100,100)
// ctx.lineTo(150,50)
// ctx.lineTo(200,100)
// ctx.lineTo(100,100)

// ctx.lineWidth = 2
// ctx.strokeStyle = "#fff"
// ctx.fillStyle = "#f00"
// ctx.stroke()
// ctx.fill()


//SQUARE
// ctx.beginPath()
// ctx.moveTo(100, 100)
// ctx.lineTo(100,200)
// ctx.lineTo(200,200)
// ctx.lineTo(200,100)
// ctx.closePath()


// ctx.lineWidth = 2
// ctx.strokeStyle = "#fff"
// ctx.stroke()


//TEXT
// ctx.font = "50px Arial"
// ctx.fillStyle = "#fff"
// ctx.fillText("JACE", 100, 100, 400)



















// const btn = document.querySelector("button")
// const ul = document.querySelector("[data-list]")


// btn.addEventListener("click", async ()=>{
//     try{
//        btn.disabled = true
//        btn.innerHTML = "<div id='spinner'></div>"
//     //    const res = await fetch("../FOUNDATION/names.txt")
//     //    const data = await res.text()
//     //    const names = data.trim().split("\r\n")
       
//       //JSON DATA
//        const res = await fetch("../FOUNDATION/names.json")
//        const names = await res.json()


//        //loop through the names
//        names.forEach(name =>{
//         const liElement = document.createElement("li")
//         liElement.innerHTML = name
//         ul.appendChild(liElement)
//        })
//     }catch(err){
//       const p = document.createElement("p")
//       p.innerHTML = "Failed to fetch"
//       p.style.color = "red"
//       document.body.appendChild(p)
//     }finally{
//         btn.disabled = false
//         btn.innerHTML = "Get Names"
//     }
// })












// const getLog = (data =true)=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//            if(data) resolve("this is a promise example")
//            else reject("failed to fetch")
//         },5000)
//     })
// }


// getLog(false)
// .then(res =>{
// console.log(res)
// })
// .catch((message)=>{
//     console.log(message)
// })
// .finally(()=>{
//     console.log("i will still run")
// })

// fetch("../FOUNDATION/names.txt")

// .then(res =>{
//     console.log(res)
//     return res.text()
// })
// .then(data =>{
//     console.log(data)
// })


// const handleFetch = async ()=>{
// try{
// //  const data = await getLog(false)
// //  console.log(data)
// throw new Error("This is a custom message")
// }catch(error){
//     console.log(error.message)
// }
// }

// handleFetch()


// async function handleFetchAit(){
//     try{
//  const response = await fetch("../FOUNDATION/name.txt")
//  console.log(response)
//  const data = await response.text()
//  console.log(data)
//     }catch(err){
//     console.log(err.message)
//     }finally{
//         console.log("i will still run")
//     }
// }

// handleFetchAit()

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", ()=>{
// const h2 = document.createElement("h2")
// h2.className = "red-text another-class"
 
// h2.innerHTML = "This is a heading element"
// const classNames = h2.classList

// h2.classList.add("green")

// if(h2.classList.contains("green")){
//     console.log("classlist contains green")
// }else{
//     console.log("classlist does not contains green")
// }

// if(h2.classList.contains("green")){
//     h2.classList.remove("green")
// }

// const p = document.createElement("p")
// p.innerHTML = "this is a paragraph"
// document.body.append(h2, p)

// })

// const liElement = document.querySelectorAll("li")

// liElement.forEach(btn =>{
//     btn.addEventListener("dblclick", ()=>{
//         btn.remove()
//     })
// })

// const secondElement = document.querySelector("h2.second")

// const thirdElement = secondElement.nextElementSibling
// console.log(thirdElement.previousElementSibling.previousElementSibling)

// const parent = secondElement.parentElement
// console.log(parent)

// const parentSecondChild = parent.querySelector(".second")
// console.log(parentSecondChild)




// const btn = document.querySelector("#btn")

// btn.addEventListener("click", ()=>{
// const parent = btn.parentElement
// const elementName = parent.querySelectorAll("input")[0].value
// const elementInput = parent.querySelectorAll("input")[1].value


// const creatElement = document.createElement(elementName)
// document.body.append(elementInput)

// parent.querySelectorAll("input")[0].value =""
// parent.querySelectorAll("input")[1].value=""
// })










// const display = document.querySelector(".displayscreen")
// const btn = document.querySelectorAll(".btn")
// const Ac = document.querySelector(".AC")
// const DE = document.querySelector(".DE")
// const equals = document.querySelector(".equal")

// btn.forEach((item) =>{
//     item.addEventListener("click", ()=>{
//     display.value += item.value
        
//     })
// })

// Ac.addEventListener("click", ()=>{
//     display.value = display.value.slice(-1,0)
// })

// DE.addEventListener("click", ()=>{
//     display.value = display.value.slice(0,-1)
// })


// equals.addEventListener("click", ()=>{
//     display.value = eval(display.value)
// })











// /*CALCULATOR*/
// const operandBtns = document.querySelectorAll(".operand")
// const operatorBtns = document.querySelectorAll(".operator")
// const clearBtn = document.querySelector("#clear")
// const deleteBtn = document.querySelector("#delete")
// const equals = document.querySelector("#equals")


// //SCREENS
// const previousScreen = document.querySelector("#prev")
// const currentScreen = document.querySelector("#current")

// //STATES
// let currentScreenValue = ""
// let previouScreenValue = ""
// let operator = ""
// let equalsTo = ""
// let isEquals = false


// //FUNCTIONS
// function appendToScreen(e){
// const key = e.target.innerHTML

// if(key =="0" && (currentScreenValue.length ==1) && currentScreenValue.startsWith("0"))
//  return


// if(currentScreenValue.length ==1 && currentScreenValue.startsWith("0") && key !=="0" && key !=="."){
//     currentScreenValue = key
//     displayValue()
//     return
// }

// if(currentScreenValue.includes(".")  &&  key==".") return
// if(isEquals){
// currentScreenValue =""
// isEquals = false
//  }

// currentScreenValue += key
//  displayValue()

// }

// /*clear all value*/
// function clearScreen(){
// currentScreenValue = "0"
// previouScreenValue = ""
// operator = ""
// displayValue()
// }
  
// /*delete value*/
// function deleteValue(){
// const numbers = [...currentScreenValue]
// if(previouScreenValue &&  currentScreenValue.length<=1){
// currentScreenValue = previouScreenValue
// previouScreenValue = ""
// operator = ""
// displayValue()
// return
// }

// if(numbers.length==1){
// currentScreenValue = "0"
// displayValue()
// return
// }
// numbers.pop()
// currentScreenValue = numbers.join("")
// displayValue()

// }


// /*calculate function*/
// function calculateResult(){
// let result = 0
// switch(operator){
// case "+":
// result = (+previouScreenValue) + (+currentScreenValue)
// break;
// case "-":
// result = (+previouScreenValue) - (+currentScreenValue)
// break;
// case "÷":
// result = (+previouScreenValue) / (+currentScreenValue)
// break;
// case "×":
// result = (+previouScreenValue) * (+currentScreenValue)
// break;
// }

// return result
// }



//  /*for operators*/   
// function handleOperetor(e){
// const key = e.target.innerHTML
// if((!currentScreenValue)) return
// if(operator && previouScreenValue){
// const result = calculateResult()
// previouScreenValue = result.toString()
// operator = key
// currentScreenValue = ""
// displayValue()
// return
// }

// // set the values
// operator += key
// previouScreenValue = currentScreenValue
// currentScreenValue = ""
// displayValue()
// }

// function displayResult(){
// if(!previouScreenValue || !operator || !currentScreenValue) return
// equalsTo = calculateResult()
// currentScreenValue = equalsTo.toString()
// previouScreenValue = ""
// operator = ""
// displayValue()
// isEquals = true
// }



// /*display value*/
// function displayValue(){
// previousScreen.innerHTML = `${previouScreenValue} ${operator}`
// currentScreen.innerHTML = currentScreenValue
// }
      


// //EVENTS
// operandBtns.forEach(btn => {
// btn.addEventListener("click", appendToScreen)
// })

// clearBtn.addEventListener("click", clearScreen)

// deleteBtn.addEventListener("click", deleteValue)

// operatorBtns.forEach(btn =>{
//     btn.addEventListener("click", handleOperetor)
// })

// equals.addEventListener("click", displayResult)



// //KEYBOARD EVENTS
// window.addEventListener("keypress", (e)=>{
// if(e.code.toLowerCase() === "backspace") return deleteValue()

// if (e.key && Number.isFinite(+e.key)){
//     const data = {
//         target:{
//             innerHTML:e.key
//         }
//     }
//     return appendToScreen(data)
// }

// if(e.key.toLowerCase() === "c") return displayResult()
// })






// const fileInput = document.querySelector("#file")
// const btn = document.querySelector("#btn")
// const img = document.querySelector("img")

// const handleConvertFileToUrl = (file)=>{
//     const blob = new Blob([file], {type: file.type})
//     const url =URL.createObjectURL(blob)
//     return url
// }

// btn.addEventListener("click", () => fileInput.click())

// fileInput.addEventListener("change", ()=>{
// const file = fileInput.files[0]
// const maxSize = 2 * 1024 * 1024
// const fileSize = file.size

// if(fileSize > maxSize){
//     alert("FILE IS TOO LARGE")
//     return
// }

// img.src = handleConvertFileToUrl(file)

// })





























// const obj = {
//     title:"javascript",
//     isDone: false,
//     topics:['Array', 'String'],
//     "my country": "USA"
// }

// console.log(obj)

// obj.title = "python"


// let previous = obj.topics

// obj.topics = [...previous, "C#", "C++"]

// console.log(obj.topics)


// const animal = {
//     name: "Dog",
//     isWild: false,
//     bark: function(){
//         console.log(this)
//         console.log("Barking")
//     },
//     walk: ()=>{
//         console.log(this)
//         console.log("Walking")
//     },

//     eat(){
//         console.log(this)
//         console.log("eating")
//     }
// }
// delete animal.isWild
// animal.bark()
// animal.walk()
// animal.eat()

// console.log(animal)



// const person = {
//     name: "Alex",
//     course: "web dev",
//     isMarried : false,
// }


// const {name, ...rest} = person

// console.log(name,rest)

// const {course} = person
// console.log(course)


// let somebody = "pius"
// let anotherPerson = somebody
// anotherPerson = "ALLEn"

// console.log(somebody)
// console.log(anotherPerson)

// const foods = {
//     name:"Rice",
//     weight:"40kg",
// }

// const anotherFood = foods
// anotherFood.name = "Beans"

// console.log(foods)
// console.log(anotherFood)

// const foodsCopy = {...foods}
// foodsCopy.name = "Fio-Fio"

// console.log(foodsCopy)

// const productName = "MacBook 2022"
// const company = "apple"

// const myObj = {
//     productName,
//     company
// }

// console.log(myObj)

// const key = "contry"
// const value = "Nigeria"

// const newObj ={
//     [key]: value
// }

// console.log(newObj)

// const human ={
//     eyes:2,
//     nose:1,
//     hands:2,
//     legs:2
// }
//  const allKeys = Object.entries(human)
//  console.log(allKeys)
//  const allValues = Object.values(human)
//  console.log(allValues)

//  const o = {
//     name:"john"
//  }

//  const entry = Object.entries(o)
// console.log(entry)




// for(let i in human){
//     const key = i
//     const value = human[key]
//     console.log(`"KEY:"${key},"VALUE:" ${value}`)
// }










// const info = [

// {
// id:1,
// name: "john",
// age:30
// },

// {
// id:2,
// name: "jane",
// age:40
// },

// {
// id:3,
// name: "mark",
// age:50
// },



// ]









// let usersName = prompt("Enter your name:")

// while(!usersName  ||!Number.isNaN(+usersName)){
//     usersName = prompt("Please enter your name")
// }

// document.write(usersName)















// const h2 = document.querySelector("h2")
// const lower = document.getElementById("lower")
// const upper= document.getElementById("upper")

// lower.onclick = function(){
//     h2.innerText = "the quick brown fox"
// }

// upper.onclick = function(){
//     h2.innerText = "THE QUICK BROWN FOX"
    
// }









// const calculate = document.getElementById("calculate")
// const igbo = document.getElementById("igbo")
// const physics = document.getElementById("physics")
// const history = document.getElementById("history")
// const biology = document.getElementById("biology")
// const agric = document.getElementById("agriculture")
// const maths = document.getElementById("maths")
// const economics = document.getElementById("economics")
// const account = document.getElementById("account")
// const chemistry = document.getElementById("chemistry")
// const total = document.getElementById("totalscore")
// const average = document.getElementById("averagescore")




// calculate.addEventListener("click", ()=>{

// /*getting the values*/
// const igboV = +igbo.value
// const physicsV =+ physics.value
// const historyV = +history.value
// const biologyV =+biology.value
// const agricV = +agric.value
// const mathsV =+ maths.value
// const economicsV = +economics.value
// const accountV = +account.value
// const chemistryV = +chemistry.value

// const sumAll = igboV+physicsV+ historyV+biologyV+agricV+mathsV+economicsV+accountV+chemistryV

// total.innerText = sumAll
// average.innerText = sumAll/9


// })





// const show = document.getElementById("show")
// const pass = document.getElementById("pass")


// show.addEventListener("click", ()=>{
//    if(pass.type ==="password"){
//     show.innerText = "Hide"
//     pass.type = "text"
// }else{
//     show.innerText = "Show"
//     pass.type = "password"
//    }
// })





// const type = document.getElementById("type")
// const screen = document.getElementById("screen")


// type.addEventListener("keypress", (event) =>{
//     // const key = event.key
//     // const screenContent = screen.innerText

//     // screen.innerText = screenContent + key
// if(event.key.toLowerCase() ==="enter"){
//   screen.innerText =  screen.innerText + "\n"
//   type.value += '<\br>'
// }else{
//     screen.innerText = type.value + event.key
// }
// })


















// /*ASSIGNMENT*/

// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")
// const selectElem = document.getElementById("operator")
// const resultBtn = document.getElementById("calculate")
// const resultBoard = document.getElementById("result")

// resultBtn.addEventListener("click", function(){
//     const firstNumber = +num1.value
//     const secondNumber = +num2.value
//     const operator = selectElem.value


//   if(operator === "+"){
//     const result1 = firstNumber + secondNumber
//     return resultBoard.innerText = `${result1}`

//   }else if(operator === "-"){
//     const result2 = firstNumber - secondNumber
//     return resultBoard.innerText = `${result2}`

//   }else if(operator === "*"){
//     const result3 = firstNumber * secondNumber
//     return resultBoard.innerText = `${result3}`

//   }else if(operator ==="/"){
//     const result4 = firstNumber / secondNumber
//     return resultBoard.innerText = `${result4}`

//   }else{
//     return resultBoard.textContent = "please input numbers"
//   }


// })




//FUNCTIONS


// const monkeyTrouble = (aSmile, bSmile)=>{

// if(aSmile  && bSmile ){
//  alert("We are in trouble")   
// }else if(aSmile ===false && bSmile===false){
//     alert("we are in trouble")
// }else{
//     alert("we are Safe")
// }
// }


// monkeyTrouble(false, false)


// const sayHello = (name = "john") =>{
//     alert("Hello " + name)
// }


// sayHello()
// sayHello("chike")

// const getBio = (name, course = "javascript") =>{
//     console.log("hi i am "   + name + ",and i love " + course)
// }

// getBio("chike")

// getBio("john", "python")


// //RETURN

// const getSquare = (number) =>{
//     const square = number **2
//     return square
// }

// let mySquare = getSquare(5)

// console.log(mySquare)


// const getCircleArea = (radius)=>{
//     const PI = 3.142
//     const square = getSquare(4)
//     const result = PI * square

//     return result

// }

// console.log(getCircleArea(4))

// const giveUserName = ()=>{
//     const userGender = giveUserGender()
//     if(userGender ==="male") return "Uzo"
//     return "Chiamaka"

// }


// const giveUserGender = ()=>{
//     let gender = prompt("enter your gender")
//     if(!gender) gender = "male"
//     return gender.toLowerCase()
// }

// const name = giveUserName()
// console.log(name)

// const hasChange = {
//     name : "yes"
// }

// const btn = document.querySelector(".btn")



// btn.onclick = function(){

//     if(hasChange.name){
//     document.body.style.backgroundColor = "red"
    
//     }else{
//         !hasChange.name == "yes"
//         document.body.style.backgroundColor = "black"
//     }
// }




// /*ATM CARD VALIDATION*/

// function printValid(Elemid, Hintmsg) {
//     document.getElementById(Elemid).innerText = Hintmsg
// }

// function printErr(elemId, hintmsg) {
//     document.getElementById(elemId).innerText = hintmsg;
// }


// const btn = document.getElementById("btn")
// const cardNo = document.getElementById("cardNo")
// const exp = document.getElementById("exp")
// const cvv = document.getElementById("cvv")


// btn.disabled = true

// function validate() {
//     /*defining the valid inputs*/
//     let cardValid = true
//     let expValid = true
//     let cvvValid = true

//     /*defining the Errors to be true*/
//     let cardErr = true
//     let expErr = true
//     let cvvErr = true

//     const isCorrect = {
//         card: true,
//         cvv: true,
//         month: true
//     }


//     /*for card number*/
//     const card = cardNo.value
//     let regex1 = /^([\d]{4,4})([\d]{4,4})([\d]{4,4})([\d]{4,4})$/;
//     if(card.length ===4){
//         cardNo.value += " "
//     }

    
//     if (regex1.test(card)) {
//         isCorrect.card = true
//         printValid("cardValid", "valid")
//         printErr("cardErr", "")
//     } else {
//         isCorrect.card = false
//         printErr("cardErr", "your card is invalid")
//         printValid("cardValid", "")
//     }



//     /*for expiring date*/
//     let expiring = exp.value
//     let regex2 = /^([\d]{2,2}\/)([\d]{2,2})$/
//     if(expiring.length == 2) {
//         exp.value += "/"
//     }
//     if (regex2.test(expiring)) {
//         isCorrect.month = true
//         printValid("expValid", "valid")
//         printErr("expErr", "")
//     } else {
//         isCorrect.month = false
//         printErr("expErr", "invalid")
//         printValid("expValid", "")
//     }


//     /*for cvv*/
//     const Cvv = cvv.value
//     let regex3 = /^[\d]{3,3}/
//     if (regex3.test(Cvv)) {
//         isCorrect.cvv = true
//         printValid("cvvValid", "valid")
//         printErr("cvvErr", "")
//     } else {
//         isCorrect.cvv = false
//         printErr("cvvErr", "invalid")
//         printValid("cvvValid", "")
//     }
    
//     const values = Object.values(isCorrect)
//     console.log({values})

//     const allIsCorrect = values.every(item => item === true)
//     if(allIsCorrect) btn.disabled = false
//     else btn.disabled = true

    
// }

// cardNo.addEventListener("keypress", (e) => {
//     // console.log(e.target.value)
//     const value = e.target.value + e.key
//     if (value.length % 4 == 0) {

//     }
// })


// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     validate()
// })











let myBlock;
let myFunctionList;
let funList = [];
const movementArray = ['right','left','up','down'];
document.addEventListener("DOMContentLoaded",function(){
    console.log("ready");
});
myBlock = document.createElement("div");
myBlock.textContent = "hello world";
myBlock.style.width = "100px";
myBlock.style.height = "100px";
myBlock.style.backgroundColor = "red";
myBlock.style.color = "white";

myBlock.style.position = "absolute";
myBlock.style.top = "100px";
myBlock.style.left = "150px";
myBlock.style.textAlign = "center";
myBlock.style.lineHeight = "100px";
document.body.appendChild(myBlock);
myFunctionList = document.createElement('div');
document.body.appendChild(myFunctionList);

document.addEventListener("keydown",function(e) {
    e.preventDefault();
    console.log(e.key);
    let key = e.key;
    
    if(key == 'ArrowLeft') addFun("left");
    else if(key == 'ArrowRight') addFun("right");
    else if(key == 'ArrowUp') addFun("up");
    else if(key == 'ArrowDown') addFun("down");
    else if(key == 'c') myBlock.style.backgroundColor = randomColor();
    else if(key == 'r') {
        temp = movementArray[Math.floor(Math.random() * movementArray.length)]
        addFun(temp);
    }
    else if(key == 'Enter' || key == ' ') mover();
});
function mover() {
    if(funList.length>0){
        let cur = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+","");
        myFunctionList.removeChild(el);
        myBlock.innerHTML = "Move:"+item;
        if(item == 'left') {
            myBlock.style.left = cur.left - cur.width + 'px'
        }
        if(item == 'right') {
            myBlock.style.left = cur.left + cur.width + 'px'
        }
        if(item == 'up') {
            myBlock.style.top = cur.top - cur.height + 'px'
        }
        if(item == 'down') {
            myBlock.style.top = cur.top + cur.height + 'px'
        }
        setTimeout(mover,300);
        
    } else {
        myBlock.innerHTML = 'Set Path';
        return;
    }
}

function addFun(val) {
    
    let span = document.createElement('span');
    span.textContent = "+" + val;
    span.style.padding = '10px';
    span.style.border = '1px solid #ddd';
    myFunctionList.appendChild(span);
    funList.push(span);
    console.log(funList)
    span.addEventListener('mouseover',function() {
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
    });
    span.addEventListener('mouseout',function() {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    });

    span.addEventListener('click',function() {
        let curIndex = funList.indexOf(this);
        let tempRemove = funList.splice(curIndex,1);
        myFunctionList.removeChild(this);
    })

}
function randomColor() {
    return '#'+ Math.random().toString(16).substr(-6);
}
// function goLeft() {
//     temp = myBlock.offsetLeft;
//     temp = temp - 50;
//     myBlock.style.left = temp + "px";
// }

// function goRight() {
//     temp = myBlock.offsetLeft;
//     temp = temp + 50;
//     myBlock.style.left = temp + "px";
// }

// function goTop() {
//     temp = myBlock.offsetLeft;
//     temp = temp - 50;
//     myBlock.style.top = temp + "px";
// }

// function goDown() {
//     temp = myBlock.offsetLeft;
//     temp = temp + 50;
//     myBlock.style.top = temp + "px";
// }
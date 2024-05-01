let decreaseBtn=document.getElementById("decreaseBtn");
let increaseBtn=document.getElementById("increaseBtn");
let resetBtn=document.getElementById("resetBtn");

let countLabel=document.getElementById("count_label");
let count=0;
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;

}
increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
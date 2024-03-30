// time
function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }
function getMonthName(date = new Date(), locale = 'en-US') {
    return date.toLocaleString('default', { month: 'long' });  
}
const TI=new Date();
var dateClass=document.getElementsByClassName("date")[0];
setInterval(() => {
  dateClass.innerHTML=`${getDayName()}, ${TI.getDate()} ${getMonthName()}`;
}, 3600);
// Create a note
var formSub=document.getElementsByTagName("form")[0];
var input=document.getElementById("toDoList");
var div=document.getElementsByClassName("task")[0];
var area=document.getElementById("area");
formSub.addEventListener("submit",function(e){
  e.preventDefault();
  var newTask=document.createElement("div");
  newTask.innerHTML=`<div class="task">${input.value}<div class="checkBox" onclick="del()">&#10006;</div></div>`;
  area.prepend(newTask);
  input.value="";
})
// Delete a note
function del(){
  var cross=document.getElementsByClassName("checkBox")[0];
  let parent=cross.parentElement;
  parent.remove();
}
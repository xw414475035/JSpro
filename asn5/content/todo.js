// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
<<<<<<< HEAD
  document.getElementsByClassName("close").onclick = function () {
=======
  close[i].onclick = function() {
>>>>>>> 2c53e14ed534a72f44ccd7915049daf23d9a7d93
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
<<<<<<< HEAD
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === 'li') {
=======
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
>>>>>>> 2c53e14ed534a72f44ccd7915049daf23d9a7d93
    ev.target.classList.toggle('checked');
  }
}, false);

//load Json file
function readjson() {
  var ul = document.getElementById("myUL");
  var mydata = JSON.parse(data);
  var jsonlist = [mydata];
  var jsonli = "";
  for (i = 0; jsonlist.length >= i; i++) {
    var li = document.createElement("li");
    li.innerHTML =
      mydata[i].author + " needs to " + mydata[i].task + " by " + mydata[i].date;
    ul.appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; close.length >= i; i++) {
   document.getElementsByClassName("close").onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var myInputOFtitle = document.getElementById("myInputOFtitle").value;
  var myInputOFcontent = document.getElementById("myInputOFcontent").value;
  var myInputOFAuthor = document.getElementById("myInputOFAuthor").value;
  var myInputOFtime = document.getElementById("myInputOFtime").value;

  var t = document.createTextNode(myInputOFtitle+":     "+myInputOFAuthor+" need to "+myInputOFcontent+" by "+myInputOFtime);
  li.appendChild(t);
  if (myInputOFtitle === ''||myInputOFcontent=== ''||myInputOFAuthor=== ''||myInputOFtime=== '') {
    alert("Please fill all the item!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

<<<<<<< HEAD

=======
  
>>>>>>> 2c53e14ed534a72f44ccd7915049daf23d9a7d93
}
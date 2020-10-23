var list = document.getElementsByTagName('li');
for (var i=0; i < list.length; i++){
    var span = document.createElement('span');
    var text = document.createTextNode("\u00D7");
    span.appendChild(text);
    span.className = "close";
    list[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for(var i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'None'
    }
}

function newTodo(){
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    var li = document.createElement('li');
    li.appendChild(text);
    if (inputValue == ''){
        alert('and input is required')
    } else {
        document.getElementById('myList').appendChild(li);
        document.getElementById('myInput').value = '';
    }

    var span = document.createElement('span');
    var text = document.createTextNode("\u00D7");
    span.appendChild(text);
    span.className = "close";
    li.appendChild(span);
    span.onclick = function(){
        var div = this.parentElement;
        div.style.display = 'None'
    }
}

function removeAll(){
    var list = document.getElementsByTagName('ul');
    list[0].innerHTML = '';
}
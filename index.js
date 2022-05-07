var form = document.getElementById('formadd');
var items = document.getElementById('ul1');
////Add Event////////
form.addEventListener('submit', additem);
items.addEventListener('click', removeitem);
//additem fuunction///
function additem(e) {
    e.preventDefault();
    //get input value from add items bar///
    var newitem = document.getElementById("additems1").value;
    // console.log(newitem)
    ///create new li elements///
    var li = document.createElement('li')
    li.className = 'borderall'
        ///Add text node with input value
    li.appendChild(document.createTextNode(newitem));
    //create del button///
    var del = document.createElement('button')
        //add classes to del btn//
    del.className = 'delbtn'
        // console.log(del)
        //append Text Node///
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del)
    items.appendChild(li);

}
//add remove function////
function removeitem(e) {
    if (e.target.classList.contains('delbtn')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            item.removeChild(li);
        }
    }
}
//Filtering to find///////////
var filter = document.getElementById('filter1');
filter.addEventListener('keyup', filteritem);

function filteritem(e) {
    ///convert into lower case//
    var text = e.target.value.toLowerCase();
    // console.log(text);
    ///get list////
    var items1 = items.getElementsByTagName('li');
    ///convert into array///
    Array.from(items1).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    });
}
var form = document.getElementById('forms');
var item= document.getElementById('list');

//add items

form.addEventListener('submit', addItems);
item.addEventListener('click', removeItem);

function addItems(e){
   e.preventDefault();
   
   var newItem= document.getElementById('item').value;

   var li= document.createElement('li');

   li.className= 'group';

   li.appendChild(document.createTextNode(newItem));

   //delete button

   var deletebtn = document.createElement('button');

   deletebtn.className="btn btn-danger btn-sm float-right delete";
   deletebtn.appendChild(document.createTextNode('X'));
   li.appendChild(deletebtn);


   item.appendChild(li);

}

function removeItem(e){
    //console.log(1);
    if(e.target.classList.contains('btn-danger')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            item.removeChild(li);
        }
    }
}
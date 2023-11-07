
var add_btn = document.getElementById("button") 
var input_title = document.getElementById("title")
var input_sub_title = document.getElementById("sub_title")
var error = document.getElementById("error")
var new_row = document.getElementById("new_row")
var add = document.getElementById("add")
// var display_row = document.getElementById("display")
// var checkbox = document.getElementById("deleteChck")
// var check_display = document.getElementById("check_display")


add_btn.addEventListener("click", (e) => {     // add onclick event on button  
    e.preventDefault();   
    formValidation();
    input_title.value = " ";    // clear the inputs when value add
    input_sub_title.value = " ";
})

   // function display(){

        //     var tr = document.createElement("tr");
        //     tr.innerHTML =  "<h5>" + input_title.value + "</h5><p>" + input_sub_title.value + "</p><p>" + '<input onclick="myFunction()" id = "deleteChck" type="checkbox"/>'+"</p>" + "<br>";
        //     // tr.style.cssText += 'color:white;background-color:#6f22b6;box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);display:flex;justify-content:space-between;align-items:center;padding: 0 10px;margin:10px 10px'
        //     display_row.append(tr);

        // }

let formValidation = () => {
    if (input_title.value == 0 || input_sub_title.value == 0) {   
        error.innerHTML = "Fields are required"          // if inputs are empty before click on add button then it will show error
    }
    else {
        error.innerHTML = " ";
        acceptData();
    }
}

let data1 = {};
let data2 = {};    // accept data in form of objects
let acceptData = () => {
    data1["text"] = input_title.value;
    data2["text"] = input_sub_title.value;
    show();
}

let show = () => {
    // new_row.innerHTML = data1.text,data2.text;
     
    // this will create new todo list and then show 
    new_row.innerHTML += `  <div class="new_rowChild">   
            <h5>${data1.text}</h5>
            <p>${data2.text}</p>
            <span>
                <i onclick="edit(this)" class="fas fa-edit" data-bs-dismiss="modal" ></i>
                <i  onclick="delet(this)"  class="fas fa-trash-alt" data-bs-dismiss="modal"></i>

            </span>
        </div> `
    }

let delet = (e) => {    // new created row delete when click on delet icon
    e.parentElement.parentElement.remove();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    
}

let edit = (e) => {    // edit todo list
    input_title.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    input_sub_title.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    
}

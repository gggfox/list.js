/*
**  This funtion adds the action to both of the buttons
**  in each of the li components
*/
function clickMe(){
    let shoppingList = document.getElementsByClassName('list');
    
    shoppingList[0].addEventListener('click', (event) => {

        if(event.target.matches('.check')){
            event.preventDefault();
            if(event.target.parentElement.children[0].style.background == ""){
                event.target.parentElement.children[0].style.background = "black";
            }else{
                event.target.parentElement.children[0].style.background = "";
            }  
        }

        if(event.target.matches('.del')){
            event.target.parentElement.parentElement.removeChild( event.target.parentElement);
        }
    });
}

/*
** This function creates the items on the list
** once the submit button has been clicked it
** resets the string in the input text box
*/
function addToList(){
    let button  = document.getElementsByTagName('button');
    let input   = document.getElementsByTagName('input');
    let results = document.getElementsByTagName('ul');
    
    button[0].addEventListener('click',(event)=>{
       event.preventDefault();
       if(input[0].value !== ""){
            results[0].innerHTML += 
                `<li>
                    <p>${input[0].value}</p> 
                    <button type = "submit" class = "check">
                        check
                    </button>
                    <button type = "submit" class = "del">
                        delete 
                    </button> 
                </li>`;
            input[0].value = "";
        }
    });
}

function init(){
    addToList();
    clickMe();
}

init();

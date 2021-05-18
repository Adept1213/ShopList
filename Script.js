


//store
let store = [
    list05052021 = [
        {id : 0, name : 'Banana', count : '1', price: '65',  }, 
        {id : 1, name : 'Fruit', count : '0.8', price: '80',},
        {id : 2, name : 'Bread', count : '3', price: '34', },
        {id : 3, name : 'Milk', count : '2', price: '54',  },
    ],
]

//changeState
function changeState (id, className, value) {    
    store[0][id][className] = value;
}

//-------------------------------------------------------------------------------------




//create productLine change
function productLineChange(id, name, count, price, totalCost){
    let product = document.createElement('tr'); // create tr
    product.classList.add(id);            // add class

    //create input th
    product.append(creatInput(id, 'name', name),
                    creatInput(id, 'count', count),
                    creatInput(id, 'price', price),);
    product.innerHTML += "<th class='totalCost'>" + totalCost + "</th>";
    
    let main = document.querySelector('.products'); 
    main.append(product); 
};

//create input th
function creatInput(id, className, productStateValue) {
    let creatInput = document.createElement('input');
    creatInput.classList.add(className);
    creatInput.setAttribute('value', productStateValue);
    creatInput.setAttribute('placeHolder', className);
    return creatInput;
}



//create productLine static
function productLineStatic(id, name, count, price, totalCost){

    let product = document.createElement('tr');
    product.classList.add(id);
    product.innerHTML = "<th class='name'>" + name + "</th>" +
                        "<th class='count'>" + count + "</th>" +
                        "<th class='price'>" + price + "</th>" +
                        "<th class='totalCost'>" + totalCost + "</th>";

    //needBuy Bought
    product.onclick = () => product.classList.toggle('crossOut');

    let main = document.querySelector('.products');
    main.append(product);
};
//----------------------------------------------------------------------------


//button changeDone
buttonChangeDone.onclick = () => {
    let buttonChangeDone = document.querySelector('#buttonChangeDone');
    let classButtonChangeDone = buttonChangeDone.className;
    let classButtonChange = 'buttonChange';
    let classButtonDone = 'buttonDone';
    // onClick change
    if (classButtonChangeDone == classButtonChange){
        buttonChangeDone.classList.remove(classButtonChange);
        buttonChangeDone.classList.add(classButtonDone);
        buttonChangeDone.innerHTML = 'Done';
        render(productLineChange);
    } else {
       //onClick Done 
        buttonChangeDone.classList.remove(classButtonDone);
        buttonChangeDone.classList.add(classButtonChange);
        buttonChangeDone.innerHTML = 'Change';
        render(productLineStatic);
    }
}

//button Add 
buttonAdd.onclick = () => {
    let buttonChangeDone = document.querySelector('#buttonChangeDone');
    let classButtonChange = 'buttonChange';
    let classButtonDone = 'buttonDone';

    store[0][store[0].length] = {id: ++store[0].length, name: '', count: '', price: ''}
    buttonChangeDone.classList.remove(classButtonChange);
    buttonChangeDone.classList.add(classButtonDone);
    buttonChangeDone.innerHTML = 'Done';
    render(productLineChange);
}

//---------------------------------------------------------------------------------
//render
function render (boo) {
    //clean
    let product = document.querySelectorAll('tr'); 
    for (let i of product) i.remove();
    
    //render
    for (let i = 0; i < store.length; i++){
        for ( let x in store[i]){
            let totalCost = store[i][x].count * store[i][x].price;
            boo(store[i][x].id, store[i][x].name, store[i][x].count, store[i][x].price, totalCost);          
        }       
    }
    giveFuncInput();
} 


//change store and render
function giveFuncInput () { 
    let allInput = document.querySelectorAll('input');
    for ( let i = 0; i < allInput.length; i++) {
        allInput[i].onchange = () => {
            changeState ( allInput[i].parentNode.classList,
                            allInput[i].className,
                            allInput[i].value);
            render(productLineChange);
        }    
    }
}

render(productLineStatic);
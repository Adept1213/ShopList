const BOUGHT = 'bought';
const NEED_BUY = 'needBought';
const CLASS_CROSSOUT = 'crossOut';

//store
let store = [
    list05052021 = [
        {id : 0, totalCost: 0, totalPrice: 0},
        {id : 1, name : 'Banana', count : '1', price: '65', type: 'needByu', }, 
        {id : 2, name : 'Fruit', count : '0.8', price: '80', type: 'needByu',},
        {id : 3, name : 'Bread', count : '3', price: '34', type: 'needByu',},
        {id : 4, name : 'Milk', count : '2', price: '54', type: 'needByu', },
    ],
]

//changeState
function changeState (id, className, value) {    
    store[0][id][className] = value;
}

//-------------------------------------------------------------------------------------
//create productLine change
function productLineChange(id, name, count, price, totalCost, type){
    let product = document.createElement('tr'); // create tr
    product.classList.add(id);            // add class

    //create input th
    product.append(creatInput(id, 'name', name),
                    creatInput(id, 'count', count),
                    creatInput(id, 'price', price),);
    product.innerHTML += "<th class='totalCost'>" + totalCost + "</th>";
    
    makeBought_needBuy(type, product);

    let main = document.querySelector('.products'); 
    main.append(product); 
};

//create input 
function creatInput(id, className, productStateValue) {
    let creatInput = document.createElement('input');
    creatInput.classList.add(className);
    creatInput.setAttribute('value', productStateValue);
    creatInput.setAttribute('placeHolder', className);
    return creatInput;
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

function makeBought_needBuy (type, product) {
    type == BOUGHT ? 
    product.classList.add(CLASS_CROSSOUT):
    product.classList.remove(CLASS_CROSSOUT);
}




//create productLine static
function productLineStatic(id, name, count, price, totalCost, type){

    let product = document.createElement('tr');
    product.classList.add(id);
    product.innerHTML = "<th class='name'>" + name + "</th>" +
                        "<th class='count'>" + count + "</th>" +
                        "<th class='price'>" + price + "</th>" +
                        "<th class='totalCost'>" + totalCost + "</th>";

    giveFuncDiv(id, type, product);

    let main = document.querySelector('.products');
    main.append(product);
};

//give func change type ' needBuy, bought', add remove class crossOut, render
function giveFuncDiv(id, type, product){

    if(type == 'bought') product.classList.add('crossOut');  

    product.onclick = () => {
        if(product.classList == `${id}`) {
            changeState(id, 'type', 'bought');
            render(productLineStatic);
        } else {
            changeState(id, 'type', 'needBuy');
            render(productLineStatic);        
        }
    }
}




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

    store[0][store[0].length] = {id: store[0].length, name: '', count: '', price: '', type: 'needByu',}
    buttonChangeDone.classList.remove(classButtonChange);
    buttonChangeDone.classList.add(classButtonDone);
    buttonChangeDone.innerHTML = 'Done';
    console.log(store[0]);
    render(productLineChange);
}

//----------------------------------------------------------------------------
//show totalPrice
function showTotalPrice () {
    let totalPrice = 0;
    for (let i = 1; i < store[0].length; i++){
        totalPrice += store[0][i].price * store[0][i].count;
    }
    changeState(0, 'totalPrice', totalPrice)
    document.querySelector('.header__totalCost__price').innerHTML = store[0][0].totalPrice;
}

function showTotalCost () {
    let totalCost = 0;
    for (let i = 1; i < store[0].length; i++){
        if(store[0][i].type == BOUGHT){
            totalCost += store[0][i].price * store[0][i].count;
        }
    }
    changeState(0, 'totalCost', totalCost)
    document.querySelector('.header__totalCost__cost').innerHTML = store[0][0].totalCost;
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
            if(store[i][x].id == 0) continue;
            let totalCost = store[i][x].count * store[i][x].price;
            boo(store[i][x].id, store[i][x].name, store[i][x].count, store[i][x].price, totalCost, store[i][x].type);          
        }       
    }
    giveFuncInput();
    showTotalPrice();
    showTotalCost();
} 




render(productLineStatic);
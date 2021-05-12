


//store
let store = [
    list05052021 = [
        {id : 1, name : 'Banana', count : '1', price: '65', }, 
        {id : 2, name : 'Fruit', count : '0.8', price: '80', },
        {id : 3, name : 'Bread', count : '3', price: '34', },
        {id : 4, name : 'Milk', count : '2', price: '54', },
    ],
]

//changeState
let changeState = function (id, className, value) {
    --id;
    store[0][id ][className] = value;
    render(productLineChange);
}

//-------------------------------------------------------------------------------------
//create productLine change
let productLineChange = function (id, name, count, price, totalCost){
    let product = document.createElement('tr'); // create tr
    product.classList.add(id);            // add class
    //add info
    product.innerHTML = "<input type='text' class='name' value='"+ name +"' placeholder='name' onChange='changeState("+id+", `name`, value)' >" +    
                        "<input type='text' class='count' value='"+ count +"' placeholder='count' onChange='changeState("+id+", `count`, value)'>" +
                        "<input type='text' class='price' value='"+ price +"' placeholder='price' onChange='changeState("+id+", `price`, value)'>" +
                        "<th class='totalCost'>" + totalCost + "</th>";
    let main = document.querySelector('.products'); 
    main.append(product);
};

//create productLine static
let productLineStatic = function (id, name, count, price, totalCost){

    let product = document.createElement('tr');
    product.classList.add(id);
    product.innerHTML = "<th class='name'>" + name + "</th>" +
                        "<th class='count'>" + count + "</th>" +
                        "<th class='price'>" + price + "</th>" +
                        "<th class='totalCost'>" + totalCost + "</th>";
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
    let classButtonChangeDone = buttonChangeDone.className;
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
let render = function (boo) {
    //clean
    let product = document.querySelectorAll('tr'); 
    for (let i of product) i.remove();

    for (let i = 0; i < store.length; i++){
        for ( let x in store[i]){
            let totalCost = store[i][x].count * store[i][x].price;
            boo(store[i][x].id, store[i][x].name, store[i][x].count, store[i][x].price, totalCost); 
        }       
    }
};

render(productLineStatic);
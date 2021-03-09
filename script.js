const createNewElement = (tag, type, plceholder, id, clas) => {
    // let input= document.createElement(tag);    
    // input.type = type;
    // input.placeholder = plceholder;
    // input.id = id;
    // input.class = clas;
    document.getElementById('form').appendChild(input);

    // return input;
}
let array = [
    {name: "div", type: "", placeholder: "", id: "", clas: "form"},
    {name: "input", type: "number", placeholder: "height", id: "", clas: ""},
    {name: "input", type: "number", placeholder: "width", id: "", clas: ""},
    {name: "input", type: "number", placeholder: "количество", id: "", clas: ""}    
]

array.forEach (element => {
    createNewElement(element.name, element.type, element.plceholder, element.id, element.clas);
    console.log("hello")

})

    
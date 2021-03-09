//filled inputs add to Array as object
//count all object from array
//add "+" button to add new field to count
// add "x" button do delete object from array

let newElement = [
    {
        name: tagName,
        type: type,
        id: id,
        className: clas,
        inner: innerHTML,
        holder: placeholder
    } // переписать все из  20 строки
]

const createHTMLElement = (tagName, type, id, className, innerHTML, placeholder) => {    
    let element = document.createElement;
    element.tagName = tagName || "";
    element.type = type || ""; 
    element.id = id || "";
    element.className = className || "";
    element.innerHTML = innerHTML || "";
    element.placeholder = placeholder || "";

    return element;
};


newElement.forEach(element => {
    let inputWidth = createHTMLElement ("input", "number", element.idWidth, "", "", "width");
    let inputHeight = createHTMLElement ("input", "height", element.idHeight, "", "", "height");
    let inputQuantity = createHTMLElement ("input", "number", element.idQuantity, "", "", "Quantity");
    let inputMaterial = createHTMLElement ("input", "chekbox", element.idMaterial);
    let inputCut = createHTMLElement ("input", "chekbox", element.idCut);
    let formDiv = createHTMLElement ("div", "", "", "form");

    formDiv.append(inputWidth, inputHeight, inputQuantity, inputMaterial, inputCut);   
});

const addToHTML = (e) =>{
    document.getElementById('wrapper').appendChild(e);
}

class StickerCount {
    constructor(width, height, quantity, cut, material) {
        this.width = width;
        this.height = height;
        this.quantity = quantity;
        this.cut = cut;
        this.material = material;
    }

    array = Array();


}

document.getElementById("addElement").addEventListener('click', function (e) {
    e.preventDefault();
    createFormItem();
});



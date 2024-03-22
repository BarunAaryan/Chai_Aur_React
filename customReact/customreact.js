function customRender(reactElement, container){
    //we will create the element using reactelement, we are making it modular function
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    // if prop key is children then continue=> earlier used this
    if(prop=== 'children') continue;
    domElement.setAttribute(props, reactElement.props[prop])
   }
   container.appChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href:"https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}
const mainConatiner = document.querySelector('#root')

customRender(reactElement, mainConatiner)
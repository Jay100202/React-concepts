
function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
       if(prop == "children") continue

       domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}
// now hame ye a tag jo he vo display karana he to vo ham kese karege to basically jab
// ham function likhte he uske baad jo return statment me jo a tag likhte he vo aab ham ayaha kese likhege vo dekhege 
const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}

const mainContainer = document.querySelector("#root")

// aab hamare paas ek method ho jisase ye reactelement hamara render hojaye

customRender(reactElement,mainContainer)
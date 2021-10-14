const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")


if (localStorage.theme === "dark") {
    console.log(localStorage.theme)
    html.style.setProperty("--bg", "rgb(42, 42, 42)")
    html.style.setProperty("--color-text", "#CCCCCC")
    html.style.setProperty("--color-headings", "#B5B5B5")
    
    
}

if (localStorage.theme === "light") {
    console.log(localStorage.theme)
    html.style.setProperty("--bg", "#FCFCFC")
    html.style.setProperty("--color-text", "#333333")
    html.style.setProperty("--color-headings", "#000000")
    checkbox.removeAttribute('checked')
    
}

function setThemeDark(){
    html.style.setProperty("--bg", "rgb(42, 42, 42)")
    html.style.setProperty("--color-text", "#CCCCCC")
    html.style.setProperty("--color-headings", "#B5B5B5")
    localStorage.setItem('theme', 'dark')
    checkbox.setAttribute('checked') 
}

function setThemeLight(){
    html.style.setProperty("--bg", "#FCFCFC")
    html.style.setProperty("--color-text", "#333333")
    html.style.setProperty("--color-headings", "#000000")
    localStorage.setItem('theme', 'light')
    
}

const getStyle = (element, style) =>
//pegar esse estilo do css 
    window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    //pegar esse estilo do css
    bg: getStyle(html, "--bg"),
    colorText: getStyle(html, "--color-text"),
    colorHeadings: getStyle(html, "--color-headings"),
}



const darkMode = {
    bg: "rgb(42, 42, 42)",
    colorText: "#CCCCCC",
    colorHeadings:"B5B5B5",
}



const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()



const changeColors = (colors) => {
    console.log(colors)
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
    
}

checkbox.addEventListener("change", ({target}) =>{
    target.checked ? setThemeDark() : setThemeLight()

    

    //target.checked ? changeColors(darkMode) : changeColors(initialColors)
    //target.checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    console.log(localStorage.theme)  
})
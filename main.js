const proyectosContainer =document.getElementById("tarjetas-conteiner");
const aside =document.getElementsByTagName("aside")[0];


const getTecnologias= (tecnologias) => {
    let res = "";
    tecnologias.forEach(tecnologia => {
        res +=  `<span class= "tecnologia" >${tecnologia}</span> `
    })
   return res;
}

//Proyectos
proyectos.forEach(proyecto => {
    const nuevoProyecto= document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto"
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML=   `
    <img src="img/proyectos/${proyecto.imagen}">
    <div>
        <h3> ${proyecto.titulo} </h3> 
        <p> ${proyecto.descripcion}</p>
        <p>tecnologias:${getTecnologias(proyecto.tecnologias)}</p>
    </div>
        <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
        `
})

//Info Personal
const nuevaPresentacion=document.createElement("div")
nuevaPresentacion.classList = "Presentacion";
nuevaPresentacion.innerHTML =  ` 
    <img src = "${informacionPersonal.imagen}">
`;
informacionPersonal.otros.forEach(dato =>{
    nuevaPresentacion.innerHTML += ` 
    <div> 
    <span> ${dato[0]}: </span>
    <span> ${dato[1]} </span>
    </div>
    `
})
aside.appendChild(nuevaPresentacion);


//Idiomas

const nuevoIdiomas=document.createElement("div")
nuevoIdiomas.classList = "idioma";
informacionPersonal.idiomas.forEach(dato =>{
    nuevoIdiomas.innerHTML += ` 
    <div> 
    <span> ${dato[0]}: </span>
    <span> ${dato[1]} </span>
    </div>
    `
});
aside.appendChild(nuevoIdiomas);

//Lenguajes de programacion

const nuevoLenguajesProgramacion=document.createElement("div")
nuevoLenguajesProgramacion.classList = "idioma";
informacionPersonal.Tecnologias.forEach(dato =>{
    nuevoLenguajesProgramacion.innerHTML += ` 
    <div> 
    <span> ${dato[0]} </span>
    <span> ${dato[1]} </span>
    </div>
    <progress max="10" value=${dato[1]}>
    `
});
aside.appendChild(nuevoLenguajesProgramacion);

//Links

const getIconoRed=(red) => {
    switch(red){
    case "github":
    return "github.svg";
    case "linkedin":
        return "linkedin.svg";
        case "instagram":
            return "instagram.svg";

    }
}

const nuevoRedes=document.createElement("div")
nuevoRedes.classList = "redes";
informacionPersonal.Redes.forEach(dato => {
    if(dato[1] === "") return
    nuevoRedes.innerHTML += ` 

    <a href="${dato[1]}" target= "_blank">
      <img  src="img/iconos/${getIconoRed(dato[0])}">
    </a>
    
    `
});
aside.appendChild(nuevoRedes);


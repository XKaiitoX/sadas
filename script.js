const sectionReiniciar = document.getElementById('boton-reiniciar')
const sectionataques = document.getElementById('sa')
const sectionInicio = document.getElementById('sm')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
const contenedorAtaques = document.getElementById('contenedorAtaques')


sectionReiniciar.style.display = 'none'
const sectionseleccionMascotaJugador = document.getElementById('boton-mascota')
const spanMascota = document.getElementById('mascota')


const spanMascotaEnemigo = document.getElementById('mascotae')


const spanvida = document.getElementById("vida")
const spanvidae = document.getElementById("vidae")


const sectionMensajes = document.getElementById('mensajes')
const parrafo = document.createElement('p')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let inputLanpier
let inputJack 
let inputJuri 
let inputSaira 
let inputLirio 
let inputKaito
let botonFuego
let botonHielo 
let botonViento 
let botonRayo 
let botonAgua 
let botonOscuridad 
let botones = []
let mascotaJugador
let ataquesMokepon
let opcionDeMokepones
let vidaJugador = 3
let vidaEnemigo = 3


class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Lanpier = new Mokepon('Lanpier', 'gif/zeraora-s.gif', 5)

let Jack = new Mokepon('Jack', 'gif/lunala.gif', 5)

let Juri = new Mokepon('Juri', 'gif/Necrozma_melena_crepuscular_EpEc.gif', 5)

let Saira = new Mokepon('Saira', 'gif/Zacian_EpEc_variocolor.gif', 5)

let Lirio = new Mokepon('Lirio', 'gif/zarude-1-s.gif', 5)

let Kaito = new Mokepon('Kaito', 'gif/Necrozma_EpEc.gif', 5)

Lanpier.ataques.push(
    { nombre: '<img class="poderes" src="https://www.gifsanimados.org/data/media/133/tornado-imagen-animada-0010.gif">', id: 'boton-viento' },
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/5/5/0/9/1869055_32114.gif">',  id: 'boton-agua' },
    { nombre: '<img class="poderes" src="https://i.gifer.com/4bXG.gif">',  id: 'boton-rayo' },    
)
Jack.ataques.push(
    { nombre: '<img class="poderes" src="https://www.gifsanimados.org/data/media/133/tornado-imagen-animada-0010.gif">', id: 'boton-viento' },
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/4/4/2/6/486244_5c66c.gif">', id: 'boton-oscuridad' },
    
)
Juri.ataques.push(
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/4/4/2/6/486244_5c66c.gif">', id: 'boton-oscuridad' },
    { nombre: '<img class="poderes" src="https://i.gifer.com/4bXG.gif">', id: 'boton-rayo' },
)
Saira.ataques.push(
    { nombre: '<img class="poderes" src="https://www.gifsanimados.org/data/media/133/tornado-imagen-animada-0010.gif">', id: 'boton-viento' },
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/1/5/7/8/1478751_1a07f.gif">', id: 'boton-hielo' },
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/5/5/0/9/1869055_32114.gif">',  id: 'boton-agua' },
)
Lirio.ataques.push(
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/4/4/2/6/486244_5c66c.gif">', id: 'boton-oscuridad' },
    { nombre: '<img class="poderes" src="https://www.gifsanimados.org/data/media/133/tornado-imagen-animada-0010.gif">', id: 'boton-viento' },
    { nombre: '<img class="poderes" src="https://usagif.com/wp-content/uploads/gifs/fire-65.gif">',  id: 'boton-fuego' },
)
Kaito.ataques.push(
    { nombre: '<img class="poderes" src="https://www.gifsanimados.org/data/media/133/tornado-imagen-animada-0010.gif">', id: 'boton-viento' },
    { nombre: '<img class="poderes" src="https://i.gifer.com/4bXG.gif">', id: 'boton-rayo' },
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/5/5/0/9/1869055_32114.gif">',  id: 'boton-agua' },
    { nombre: '<img class="poderes" src="https://img1.picmix.com/output/stamp/normal/4/4/2/6/486244_5c66c.gif">', id: 'boton-oscuridad' },
    { nombre: '<img class="poderes" src="https://usagif.com/wp-content/uploads/gifs/fire-65.gif">',  id: 'boton-fuego' },
)

mokepones.push(Lanpier, Jack, Juri, Saira, Lirio, Kaito)


function iniciarjuego(){
    
    
    sectionataques.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones =`
        <label class="tarjeta" for=${mokepon.nombre}>
        <input type="radio" id=${mokepon.nombre} name="mascota" />   
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputLanpier = document.getElementById('Lanpier')
         inputJack = document.getElementById('Jack')
         inputJuri = document.getElementById('Juri')
         inputSaira = document.getElementById('Saira')
         inputLirio = document.getElementById('Lirio')
         inputKaito = document.getElementById('Kaito')

    })

    botonMascotaJugador.addEventListener('click', seleccionMascotaJugador )

    sectionInicio.style.display = 'block'

    
    botonReiniciar.addEventListener('click', ReinciarJuego)
}


function seleccionMascotaJugador(){

    
    sectionInicio.style.display = 'none'
    sectionseleccionMascotaJugador.style.display = 'block'
    sectionataques.style.display = 'block'
    
    if (inputLanpier.checked) {
        spanMascota.innerHTML = inputLanpier.id
        mascotaJugador = inputLanpier.id
    }else if (inputJack.checked){
        spanMascota.innerHTML = inputJack.id
        mascotaJugador = inputJack.id
    }
    else if (inputJuri.checked){
        spanMascota.innerHTML = inputJuri.id
        mascotaJugador = inputJuri.id
    }
    else if (inputSaira.checked){
        spanMascota.innerHTML = inputSaira.id
        mascotaJugador = inputSaira.id
    }
    else if (inputLirio.checked){
        spanMascota.innerHTML = inputLirio.id
        mascotaJugador = inputLirio.id
    }
    else if (inputKaito.checked){
        spanMascota.innerHTML = inputKaito.id
        mascotaJugador = inputKaito.id
    } 
    else{
        alert('Selecciona Mascota')
    }
    extraerAtaques(mascotaJugador)
    seleccionMascotaEnemigo()

}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon =`
        <button id=${ataque.id} class="poderes BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    });

     botonFuego = document.getElementById('boton-fuego')
     botonHielo = document.getElementById('boton-hielo')
     botonViento = document.getElementById('boton-viento')
     botonRayo = document.getElementById('boton-rayo')
     botonAgua = document.getElementById('boton-agua')
     botonOscuridad = document.getElementById('boton-oscuridad')
     botones = document.querySelectorAll('.BAtaque')

     console.log(botones)

    botonFuego.addEventListener('click', ataqueFuego)
    botonHielo.addEventListener('click', ataqueHielo)
    botonViento.addEventListener('click', ataqueViento)
    botonRayo.addEventListener('click', ataqueRayo)
    botonAgua.addEventListener('click', ataqueAgua)
    botonOscuridad.addEventListener('click', ataqueOscuridad)
}

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1) 

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo() 
}
function ataqueHielo(){
    ataqueJugador = 'Hielo'
    ataqueAleatorioEnemigo() 
}
function ataqueViento(){
    ataqueJugador = 'Viento'
    ataqueAleatorioEnemigo() 
}
function ataqueRayo(){
    ataqueJugador = 'Rayo'
    ataqueAleatorioEnemigo() 
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo() 
}
function ataqueOscuridad(){
    ataqueJugador = 'Oscuridad'
    ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    
        if(ataqueAleatorio == 1){
            ataqueEnemigo = 'Fuego'
        }else if (ataqueAleatorio == 2){
            ataqueEnemigo = 'Hielo'
        }else if (ataqueAleatorio == 3){
            ataqueEnemigo = 'Viento'
        }else if (ataqueAleatorio == 4){
            ataqueEnemigo = 'Rayo'
        }else if (ataqueAleatorio == 5){
            ataqueEnemigo = 'Agua'
        }else{
            ataqueEnemigo = 'Oscuridad'
        }
    combate()
}

function combate(){
    

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Hielo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Hielo' && ataqueEnemigo == 'Viento'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Viento' && ataqueEnemigo == 'Rayo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Rayo' && ataqueEnemigo == 'Agua'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Oscuridad' && ataqueEnemigo == 'Rayo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Viento' && ataqueEnemigo == 'Oscuridad'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else{
        crearMensaje("Perdistes")
        vidaJugador--
        spanvida.innerHTML = vidaJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidaEnemigo == 0){
        crearMensajeFinal("GANASTES")
    }else if (vidaJugador == 0)[
        crearMensajeFinal("PERDISTES")
    ]
}

function crearMensaje(resultado){
    
    parrafo.innerHTML =  resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){

    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    botonFuego.disabled = true
    botonHielo.disabled = true
    botonViento.disabled = true
    botonRayo.disabled = true
    botonAgua.disabled = true
    botonOscuridad.disabled = true
    sectionReiniciar.style.display = 'block'
}


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ReinciarJuego(){
    location.reload()
}


window.addEventListener('load', iniciarjuego)
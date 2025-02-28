const elementos = [
    { nombre: "Hidrógeno", simbolo: "H", numero: 1, masa: "1.008", configuracion: "1s¹", estado: "Gas", columna: 1, fila: 1, categoria: "no-metal"},
    { nombre: "Helio", simbolo: "He", numero: 2, masa: "4.0026", configuracion: "1s²", estado: "Gas", columna: 18, fila: 1, categoria: "gas-noble"},

    { nombre: "Litio", simbolo: "Li", numero: 3, masa: "6.94", configuracion: "[He] 2s¹", estado: "Sólido", columna: 1, fila: 2, categoria: "metal-alcalino"},
    { nombre: "Berilio", simbolo: "Be", numero: 4, masa: "9.0122", configuracion: "[He] 2s²", estado: "Sólido", columna: 2, fila: 2, categoria: "metal-alcalinoterreo" },
    { nombre: "Boro", simbolo: "B", numero: 5, masa: "10.81", configuracion: "[He] 2s² 2p¹", estado: "Sólido", columna: 13, fila: 2, categoria: "metaloide" },
    { nombre: "Carbono", simbolo: "C", numero: 6, masa: "12.011", configuracion: "[He] 2s² 2p²", estado: "Sólido", columna: 14, fila: 2, categoria: "no-metal" },
    { nombre: "Nitrógeno", simbolo: "N", numero: 7, masa: "14.007", configuracion: "[He] 2s² 2p³", estado: "Gas", columna: 15, fila: 2, categoria: "no-metal" },
    { nombre: "Oxígeno", simbolo: "O", numero: 8, masa: "15.999", configuracion: "[He] 2s² 2p⁴", estado: "Gas", columna: 16, fila: 2, categoria: "no-metal" },
    { nombre: "Flúor", simbolo: "F", numero: 9, masa: "18.998", configuracion: "[He] 2s² 2p⁵", estado: "Gas", columna: 17, fila: 2, categoria: "halogeno" },
    { nombre: "Neón", simbolo: "Ne", numero: 10, masa: "20.180", configuracion: "[He] 2s² 2p⁶", estado: "Gas", columna: 18, fila: 2, categoria: "gas-noble" },
    /* V 1.1 */
    { nombre: "Sodio", simbolo: "Na", numero: 11, masa: "22.990", configuracion: "[Ne] 3s¹", estado: "Sólido", columna: 1, fila: 3, categoria: "metal-alcalino" },
    { nombre: "Magnesio", simbolo: "Mg", numero: 12, masa: "24.305", configuracion: "[Ne] 3s²", estado: "Sólido", columna: 2, fila: 3, categoria: "metal-alcalinoterreo" },
    { nombre: "Aluminio", simbolo: "Al", numero: 13, masa: "26.982", configuracion: "[Ne] 3s² 3p¹", estado: "Sólido", columna: 13, fila: 3, categoria: "metal-posttransicion" },
    { nombre: "Silicio", simbolo: "Si", numero: 14, masa: "28.085", configuracion: "[Ne] 3s² 3p²", estado: "Sólido", columna: 14, fila: 3, categoria: "metaloide" },
    { nombre: "Fósforo", simbolo: "P", numero: 15, masa: "30.974", configuracion: "[Ne] 3s² 3p³", estado: "Sólido", columna: 15, fila: 3, categoria: "no-metal" },
    { nombre: "Azufre", simbolo: "S", numero: 16, masa: "32.06", configuracion: "[Ne] 3s² 3p⁴", estado: "Sólido", columna: 16, fila: 3, categoria: "no-metal" },
    { nombre: "Cloro", simbolo: "Cl", numero: 17, masa: "35.45", configuracion: "[Ne] 3s² 3p⁵", estado: "Gas", columna: 17, fila: 3, categoria: "halogeno" },
    { nombre: "Argón", simbolo: "Ar", numero: 18, masa: "39.95", configuracion: "[Ne] 3s² 3p⁶", estado: "Gas", columna: 18, fila: 3, categoria: "gas-noble" },

    { nombre: "Potasio", simbolo: "K", numero: 19, masa: "39.098", configuracion: "[Ar] 4s¹", estado: "Sólido", columna: 1, fila: 4, categoria: "metal-alcalino" },
    { nombre: "Calcio", simbolo: "Ca", numero: 20, masa: "40.078", configuracion: "[Ar] 4s²", estado: "Sólido", columna: 2, fila: 4, categoria: "metal-alcalinoterreo" },
    { nombre: "Escandio", simbolo: "Sc", numero: 21, masa: "44.956", configuracion: "[Ar] 3d¹ 4s²", estado: "Sólido", columna: 3, fila: 4, categoria: "metal-transicion" },
    { nombre: "Titanio", simbolo: "Ti", numero: 22, masa: "47.867", configuracion: "[Ar] 3d² 4s²", estado: "Sólido", columna: 4, fila: 4, categoria: "metal-transicion" },
    { nombre: "Vanadio", simbolo: "V", numero: 23, masa: "50.942", configuracion: "[Ar] 3d³ 4s²", estado: "Sólido", columna: 5, fila: 4, categoria: "metal-transicion" },
    { nombre: "Cromo", simbolo: "Cr", numero: 24, masa: "51.996", configuracion: "[Ar] 3d⁵ 4s¹", estado: "Sólido", columna: 6, fila: 4, categoria: "metal-transicion" },
    { nombre: "Manganeso", simbolo: "Mn", numero: 25, masa: "54.938", configuracion: "[Ar] 3d⁵ 4s²", estado: "Sólido", columna: 7, fila: 4, categoria: "metal-transicion" },
    { nombre: "Hierro", simbolo: "Fe", numero: 26, masa: "55.845", configuracion: "[Ar] 3d⁶ 4s²", estado: "Sólido", columna: 8, fila: 4, categoria: "metal-transicion" },
    { nombre: "Cobalto", simbolo: "Co", numero: 27, masa: "58.933", configuracion: "[Ar] 3d⁷ 4s²", estado: "Sólido", columna: 9, fila: 4, categoria: "metal-transicion" },
    { nombre: "Níquel", simbolo: "Ni", numero: 28, masa: "58.693", configuracion: "[Ar] 3d⁸ 4s²", estado: "Sólido", columna: 10, fila: 4, categoria: "metal-transicion" },
    { nombre: "Cobre", simbolo: "Cu", numero: 29, masa: "63.546", configuracion: "[Ar] 3d¹⁰ 4s¹", estado: "Sólido", columna: 11, fila: 4, categoria: "metal-transicion" },
    { nombre: "Zinc", simbolo: "Zn", numero: 30, masa: "65.38", configuracion: "[Ar] 3d¹⁰ 4s²", estado: "Sólido", columna: 12, fila: 4, categoria: "metal-transicion" },
    { nombre: "Galio", simbolo: "Ga", numero: 31, masa: "69.723", configuracion: "[Ar] 3d¹⁰ 4s² 4p¹", estado: "Sólido", columna: 13, fila: 4, categoria: "metal-posttransicion" },
    { nombre: "Germanio", simbolo: "Ge", numero: 32, masa: "72.630", configuracion: "[Ar] 3d¹⁰ 4s² 4p²", estado: "Sólido", columna: 14, fila: 4, categoria: "metaloide" },
    { nombre: "Arsénico", simbolo: "As", numero: 33, masa: "74.922", configuracion: "[Ar] 3d¹⁰ 4s² 4p³", estado: "Sólido", columna: 15, fila: 4, categoria: "metaloide" },
    { nombre: "Selenio", simbolo: "Se", numero: 34, masa: "78.971", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁴", estado: "Sólido", columna: 16, fila: 4, categoria: "no-metal" },
    { nombre: "Bromo", simbolo: "Br", numero: 35, masa: "79.904", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁵", estado: "Liquido", columna: 17, fila: 4, categoria: "halogeno" },
    { nombre: "Criptón", simbolo: "Kr", numero: 36, masa: "83.798", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁶", estado: "Gas", columna: 18, fila: 4, categoria: "gas-noble" }
];

const coloresCategorias = {
    "metal-alcalino": "#FF6666",
    "metal-alcalinoterreo": "#FFB266",
    "metal-transicion": "#6699FF",
    "metaloide": "#66CC66",
    "no-metal": "#FFFF66",
    "halogeno": "#FF66B2",
    "gas-noble": "#CC99FF",
    "lantanido": "#AAAAAA",
    "actinido": "#888888"
};

const tabla = document.getElementById("tabla");
const modal = document.getElementById("modal");
const elementoNombre = document.getElementById("elemento-nombre");
const elementoSimbolo = document.getElementById("elemento-simbolo");
const elementoNumero = document.getElementById("elemento-numero");
const elementoMasa = document.getElementById("elemento-masa");
const elementoConfiguracion = document.getElementById("elemento-configuracion");
const elementoEstado = document.getElementById("elemento-estado");

elementos.forEach(el => {
    let div = document.createElement("div");
    div.className = "elemento";
    div.textContent = el.simbolo;
    div.style.gridColumn = el.columna;
    div.style.gridRow = el.fila;

    // 1) Calculamos tamaños según el ancho de la ventana
    let tamaño = window.innerWidth < 600 ? "8vw" : "50px";
    let fontSize = window.innerWidth < 600 ? "3vw" : "20px";
    let borderWidth = window.innerWidth < 600 ? "4px" : "6px";

    // 2) Asignamos estilos
    div.style.backgroundColor = "#000"; 
    div.style.border = `${borderWidth} solid ${coloresCategorias[el.categoria] || "#2196F3"}`;
    div.style.color = "#FFF";
    div.style.textAlign = "center";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.fontSize = fontSize;
    div.style.fontWeight = "bold";
    div.style.width = tamaño;
    div.style.height = tamaño;
    div.style.borderRadius = "10px";

    // 3) Evento de clic
    div.onclick = () => mostrarInfo(el);
    tabla.appendChild(div);
});



function mostrarInfo(elemento) {
    elementoNombre.textContent = elemento.nombre;
    elementoSimbolo.textContent = elemento.simbolo;
    elementoNumero.textContent = elemento.numero;
    elementoMasa.textContent = elemento.masa;
    elementoConfiguracion.textContent = elemento.configuracion;
    elementoEstado.textContent = elemento.estado;
    modal.style.display = "flex";
}

function cerrarModal() {
    modal.style.display = "none";
}
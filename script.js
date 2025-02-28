const elementos = [
    { nombre: "Hidrógeno", simbolo: "H", numero: 1, masa: "1.008", configuracion: "1s¹", estado: "Gas", columna: 1, fila: 1 },
    { nombre: "Helio", simbolo: "He", numero: 2, masa: "4.0026", configuracion: "1s²", estado: "Gas", columna: 18, fila: 1 },
    { nombre: "Litio", simbolo: "Li", numero: 3, masa: "6.94", configuracion: "[He] 2s¹", estado: "Sólido", columna: 1, fila: 2 },
    { nombre: "Berilio", simbolo: "Be", numero: 4, masa: "9.0122", configuracion: "[He] 2s²", estado: "Sólido", columna: 2, fila: 2 },
    { nombre: "Boro", simbolo: "B", numero: 5, masa: "10.81", configuracion: "[He] 2s² 2p¹", estado: "Sólido", columna: 13, fila: 2 },
    { nombre: "Carbono", simbolo: "C", numero: 6, masa: "12.011", configuracion: "[He] 2s² 2p²", estado: "Sólido", columna: 14, fila: 2 },
    { nombre: "Nitrógeno", simbolo: "N", numero: 7, masa: "14.007", configuracion: "[He] 2s² 2p³", estado: "Gas", columna: 15, fila: 2 },
    { nombre: "Oxígeno", simbolo: "O", numero: 8, masa: "15.999", configuracion: "[He] 2s² 2p⁴", estado: "Gas", columna: 16, fila: 2 },
    { nombre: "Flúor", simbolo: "F", numero: 9, masa: "18.998", configuracion: "[He] 2s² 2p⁵", estado: "Gas", columna: 17, fila: 2 },
    { nombre: "Neón", simbolo: "Ne", numero: 10, masa: "20.180", configuracion: "[He] 2s² 2p⁶", estado: "Gas", columna: 18, fila: 2 },
    /* V 1.1 */
    { nombre: "Sodio", simbolo: "Na", numero: 11, masa: "22.990", configuracion: "[Ne] 3s¹", estado: "Sólido", columna: 1, fila: 3 },
    { nombre: "Magnesio", simbolo: "Mg", numero: 12, masa: "24.305", configuracion: "[Ne] 3s²", estado: "Sólido", columna: 2, fila: 3 },
    { nombre: "Aluminio", simbolo: "Al", numero: 13, masa: "26.982", configuracion: "[Ne] 3s² 3p¹", estado: "Sólido", columna: 13, fila: 3 },
    { nombre: "Silicio", simbolo: "Si", numero: 14, masa: "28.085", configuracion: "[Ne] 3s² 3p²", estado: "Sólido", columna: 14, fila: 3 },
    { nombre: "Fósforo", simbolo: "P", numero: 15, masa: "30.974", configuracion: "[Ne] 3s² 3p³", estado: "Sólido", columna: 15, fila: 3 },
    { nombre: "Azufre", simbolo: "S", numero: 16, masa: "32.06", configuracion: "[Ne] 3s² 3p⁴", estado: "Sólido", columna: 16, fila: 3 },
    { nombre: "Cloro", simbolo: "Cl", numero: 17, masa: "35.45", configuracion: "[Ne] 3s² 3p⁵", estado: "Gas", columna: 17, fila: 3 },
    { nombre: "Argón", simbolo: "Ar", numero: 18, masa: "39.95", configuracion: "[Ne] 3s² 3p⁶", estado: "Gas", columna: 18, fila: 3 },

    { nombre: "Potasio", simbolo: "K", numero: 19, masa: "39.098", configuracion: "[Ar] 4s¹", estado: "Sólido", columna: 1, fila: 4 },
    { nombre: "Calcio", simbolo: "Ca", numero: 20, masa: "40.078", configuracion: "[Ar] 4s²", estado: "Sólido", columna: 2, fila: 4 },
    { nombre: "Escandio", simbolo: "Sc", numero: 21, masa: "44.956", configuracion: "[Ar] 3d¹ 4s²", estado: "Sólido", columna: 3, fila: 4 },
    { nombre: "Titanio", simbolo: "Ti", numero: 22, masa: "47.867", configuracion: "[Ar] 3d² 4s²", estado: "Sólido", columna: 4, fila: 4 },
    { nombre: "Vanadio", simbolo: "V", numero: 23, masa: "50.942", configuracion: "[Ar] 3d³ 4s²", estado: "Sólido", columna: 5, fila: 4 },
    { nombre: "Cromo", simbolo: "Cr", numero: 24, masa: "51.996", configuracion: "[Ar] 3d⁵ 4s¹", estado: "Sólido", columna: 6, fila: 4 },
    { nombre: "Manganeso", simbolo: "Mn", numero: 25, masa: "54.938", configuracion: "[Ar] 3d⁵ 4s²", estado: "Sólido", columna: 7, fila: 4 },
    { nombre: "Hierro", simbolo: "Fe", numero: 26, masa: "55.845", configuracion: "[Ar] 3d⁶ 4s²", estado: "Sólido", columna: 8, fila: 4 },
    { nombre: "Cobalto", simbolo: "Co", numero: 27, masa: "58.933", configuracion: "[Ar] 3d⁷ 4s²", estado: "Sólido", columna: 9, fila: 4 },
    { nombre: "Níquel", simbolo: "Ni", numero: 28, masa: "58.693", configuracion: "[Ar] 3d⁸ 4s²", estado: "Sólido", columna: 10, fila: 4 },
    { nombre: "Cobre", simbolo: "Cu", numero: 29, masa: "63.546", configuracion: "[Ar] 3d¹⁰ 4s¹", estado: "Sólido", columna: 11, fila: 4 },
    { nombre: "Zinc", simbolo: "Zn", numero: 30, masa: "65.38", configuracion: "[Ar] 3d¹⁰ 4s²", estado: "Sólido", columna: 12, fila: 4 },
    { nombre: "Galio", simbolo: "Ga", numero: 31, masa: "69.723", configuracion: "[Ar] 3d¹⁰ 4s² 4p¹", estado: "Sólido", columna: 13, fila: 4 },
    { nombre: "Germanio", simbolo: "Ge", numero: 32, masa: "72.630", configuracion: "[Ar] 3d¹⁰ 4s² 4p²", estado: "Sólido", columna: 14, fila: 4 },
    { nombre: "Arsénico", simbolo: "As", numero: 33, masa: "74.922", configuracion: "[Ar] 3d¹⁰ 4s² 4p³", estado: "Sólido", columna: 15, fila: 4 },
    { nombre: "Selenio", simbolo: "Se", numero: 34, masa: "78.971", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁴", estado: "Sólido", columna: 16, fila: 4 },
    { nombre: "Bromo", simbolo: "Br", numero: 35, masa: "79.904", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁵", estado: "Liquido", columna: 17, fila: 4 },
    { nombre: "Criptón", simbolo: "Kr", numero: 36, masa: "83.798", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁶", estado: "Gas", columna: 18, fila: 4 }
];

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
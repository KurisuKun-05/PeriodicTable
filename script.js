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
    { nombre: "Criptón", simbolo: "Kr", numero: 36, masa: "83.798", configuracion: "[Ar] 3d¹⁰ 4s² 4p⁶", estado: "Gas", columna: 18, fila: 4, categoria: "gas-noble" },

    { nombre: "Rubidio", simbolo: "Rb", numero: 37, masa: "85.468", configuracion: "[Kr] 5s¹", estado: "Sólido", columna: 1, fila: 5, categoria: "metal-alcalino" },
    { nombre: "Estroncio", simbolo: "Sr", numero: 38, masa: "87.62", configuracion: "[Kr] 5s²", estado: "Sólido", columna: 2, fila: 5, categoria: "" },
    { nombre: "Itrio", simbolo: "Y", numero: 39, masa: "88.906", configuracion: "[Kr] 4d¹ 5s²", estado: "Sólido", columna: 3, fila: 5, categoria: "" },
    { nombre: "Circonio", simbolo: "Zr", numero: 40, masa: "91.224", configuracion: "[Kr] 4d² 5s²", estado: "Sólido", columna: 4, fila: 5, categoria: "" },
    { nombre: "Niobio", simbolo: "Nb", numero: 41, masa: "92.906", configuracion: "[Kr] 4d⁴ 5s¹", estado: "Sólido", columna: 5, fila: 5, categoria: "" },
    { nombre: "Molibdeno", simbolo: "Mo", numero: 42, masa: "95.95", configuracion: "[Kr] 4d⁵ 5s¹", estado: "Sólido", columna: 6, fila: 5, categoria: "" },
    { nombre: "Tecnecio", simbolo: "Tc", numero: 43, masa: "98", configuracion: "[Kr] 4d⁵ 5s²", estado: "Sólido", columna: 7, fila: 5, categoria: "" },
    { nombre: "Rutenio", simbolo: "Ru", numero: 44, masa: "101.07", configuracion: "[Kr] 4d⁷ 5s¹", estado: "Sólido", columna: 8, fila: 5, categoria: "" },
    { nombre: "Rodio", simbolo: "Rh", numero: 45, masa: "102.91", configuracion: "[Kr] 4d⁸ 5s¹", estado: "Sólido", columna: 9, fila: 5, categoria: "" },
    { nombre: "Paladio", simbolo: "Pd", numero: 46, masa: "106.42", configuracion: "[Kr] 4d¹⁰", estado: "Sólido", columna: 10, fila: 5, categoria: "" },
    { nombre: "Plata", simbolo: "Ag", numero: 47, masa: "107.87", configuracion: "[Kr] 4d¹⁰ 5s¹", estado: "Sólido", columna: 11, fila: 5, categoria: "" },
    { nombre: "Cadmio", simbolo: "Cd", numero: 48, masa: "112.41", configuracion: "[Kr] 4d¹⁰ 5s²", estado: "Sólido", columna: 12, fila: 5, categoria: "" },
    { nombre: "Indio", simbolo: "In", numero: 49, masa: "114.82", configuracion: "[Kr] 4d¹⁰ 5s² 5p¹", estado: "Sólido", columna: 13, fila: 5, categoria: "" },
    { nombre: "Estaño", simbolo: "Sn", numero: 50, masa: "118.71", configuracion: "[Kr] 4d¹⁰ 5s² 5p²", estado: "Sólido", columna: 14, fila: 5, categoria: "" },
    { nombre: "Antimonio", simbolo: "Sb", numero: 51, masa: "121.76", configuracion: "[Kr] 4d¹⁰ 5s² 5p³", estado: "Sólido", columna: 15, fila: 5, categoria: "" },
    { nombre: "Telurio", simbolo: "Te", numero: 52, masa: "127.60", configuracion: "[Kr] 4d¹⁰ 5s² 5p⁴", estado: "Sólido", columna: 16, fila: 5, categoria: "" },
    { nombre: "Yodo", simbolo: "I", numero: 53, masa: "126.90", configuracion: "[Kr] 4d¹⁰ 5s² 5p⁵", estado: "Sólido", columna: 17, fila: 5, categoria: "" },
    { nombre: "Xenón", simbolo: "Xe", numero: 54, masa: "131.29", configuracion: "[Kr] 4d¹⁰ 5s² 5p⁶", estado: "Gas", columna: 18, fila: 5, categoria: "" },

    { nombre: "Cesio", simbolo: "Cs", numero: 55, masa: "132.91", configuracion: "[Xe] 6s¹", estado: "Sólido", columna: 1, fila: 6, categoria: "" },
    { nombre: "Bario", simbolo: "Ba", numero: 56, masa: "137.33", configuracion: "[Xe] 6s²", estado: "Sólido", columna: 2, fila: 6, categoria: "" },
    //{ nombre: "Lantano", simbolo: "La", numero: 57, masa: "138.91", configuracion: "[Xe] 5d¹ 6s²", estado: "Sólido", columna: 3, fila: 6, categoria: "" },
    { nombre: "Hafnio", simbolo: "Hf", numero: 72, masa: "178.49", configuracion: "[Xe] 4f¹⁴ 5d² 6s²", estado: "Sólido", columna: 4, fila: 6, categoria: "" },
    { nombre: "Tantalio", simbolo: "Ta", numero: 73, masa: "180.95", configuracion: "[Xe] 4f¹⁴ 5d³ 6s²", estado: "Sólido", columna: 5, fila: 6, categoria: "" },
    { nombre: "Wolframio", simbolo: "W", numero: 74, masa: "183.84", configuracion: "[Xe] 4f¹⁴ 5d⁴ 6s²", estado: "Sólido", columna: 6, fila: 6, categoria: "" },
    { nombre: "Renio", simbolo: "Re", numero: 75, masa: "186.21", configuracion: "[Xe] 4f¹⁴ 5d⁵ 6s²", estado: "Sólido", columna: 7, fila: 6, categoria: "" },
    { nombre: "Osmio", simbolo: "Os", numero: 76, masa: "190.23", configuracion: "[Xe] 4f¹⁴ 5d⁶ 6s²", estado: "Sólido", columna: 8, fila: 6, categoria: "" },
    { nombre: "Iridio", simbolo: "Ir", numero: 77, masa: "192.22", configuracion: "[Xe] 4f¹⁴ 5d⁷ 6s²", estado: "Sólido", columna: 9, fila: 6, categoria: "" },
    { nombre: "Platino", simbolo: "Pt", numero: 78, masa: "195.08", configuracion: "[Xe] 4f¹⁴ 5d⁹ 6s¹", estado: "Sólido", columna: 10, fila: 6, categoria: "" },
    { nombre: "Oro", simbolo: "Au", numero: 79, masa: "196.97", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", estado: "Sólido", columna: 11, fila: 6, categoria: "" },
    { nombre: "Mercurio", simbolo: "Hg", numero: 80, masa: "200.59", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", estado: "Líquido", columna: 12, fila: 6, categoria: "" },
    { nombre: "Talio", simbolo: "Tl", numero: 81, masa: "204.38", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", estado: "Sólido", columna: 13, fila: 6, categoria: "" },
    { nombre: "Plomo", simbolo: "Pb", numero: 82, masa: "207.2", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", estado: "Sólido", columna: 14, fila: 6, categoria: "" },
    { nombre: "Bismuto", simbolo: "Bi", numero: 83, masa: "208.98", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", estado: "Sólido", columna: 15, fila: 6, categoria: "" },
    { nombre: "Polonio", simbolo: "Po", numero: 84, masa: "209", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", estado: "Sólido", columna: 16, fila: 6, categoria: "" },
    { nombre: "Astato", simbolo: "At", numero: 85, masa: "210", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", estado: "Sólido", columna: 17, fila: 6, categoria: "" },
    { nombre: "Radón", simbolo: "Rn", numero: 86, masa: "222", configuracion: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", estado: "Gas", columna: 18, fila: 6, categoria: "" },

    { nombre: "Francio", simbolo: "Fr", numero: 87, masa: "223", configuracion: "[Rn] 7s¹", estado: "Sólido", columna: 1, fila: 7, categoria: "" },
    { nombre: "Radio", simbolo: "Ra", numero: 88, masa: "226", configuracion: "[Rn] 7s²", estado: "Sólido", columna: 2, fila: 7, categoria: "" },
    //{ nombre: "Actinio", simbolo: "Ac", numero: 89, masa: "227", configuracion: "[Rn] 6d¹ 7s²", estado: "Sólido", columna: 3, fila: 7, categoria: "" },
    { nombre: "Rutherfordio", simbolo: "Rf", numero: 104, masa: "267", configuracion: "[Rn] 5f¹⁴ 6d² 7s²", estado: "Sólido", columna: 4, fila: 7, categoria: "" },
    { nombre: "Dubnio", simbolo: "Db", numero: 105, masa: "270", configuracion: "[Rn] 5f¹⁴ 6d³ 7s²", estado: "Sólido", columna: 5, fila: 7, categoria: "" },
    { nombre: "Seaborgio", simbolo: "Sg", numero: 106, masa: "271", configuracion: "[Rn] 5f¹⁴ 6d⁴ 7s²", estado: "Sólido", columna: 6, fila: 7, categoria: "" },
    { nombre: "Bohrio", simbolo: "Bh", numero: 107, masa: "270", configuracion: "[Rn] 5f¹⁴ 6d⁵ 7s²", estado: "Sólido", columna: 7, fila: 7, categoria: "" },
    { nombre: "Hassio", simbolo: "Hs", numero: 108, masa: "277", configuracion: "[Rn] 5f¹⁴ 6d⁶ 7s²", estado: "Sólido", columna: 8, fila: 7, categoria: "" },
    { nombre: "Meitnerio", simbolo: "Mt", numero: 109, masa: "278", configuracion: "[Rn] 5f¹⁴ 6d⁷ 7s²", estado: "Desconocido", columna: 9, fila: 7, categoria: "" },
    { nombre: "Darmstadtio", simbolo: "Ds", numero: 110, masa: "281", configuracion: "[Rn] 5f¹⁴ 6d⁸ 7s²", estado: "Desconocido", columna: 10, fila: 7, categoria: "" },
    { nombre: "Roentgenio", simbolo: "Rg", numero: 111, masa: "282", configuracion: "[Rn] 5f¹⁴ 6d⁹ 7s²", estado: "Desconocido", columna: 11, fila: 7, categoria: "" },
    { nombre: "Copernicio", simbolo: "Cn", numero: 112, masa: "285", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", estado: "Desconocido", columna: 12, fila: 7, categoria: "" },
    { nombre: "Nihonio", simbolo: "Nh", numero: 113, masa: "286", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", estado: "Desconocido", columna: 13, fila: 7, categoria: "" },
    { nombre: "Flerovio", simbolo: "Fl", numero: 114, masa: "289", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", estado: "Desconocido", columna: 14, fila: 7, categoria: "" },
    { nombre: "Moscovio", simbolo: "Mc", numero: 115, masa: "290", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", estado: "Desconocido", columna: 15, fila: 7, categoria: "" },
    { nombre: "Livermorio", simbolo: "Lv", numero: 116, masa: "293", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", estado: "Desconocido", columna: 16, fila: 7, categoria: "" },
    { nombre: "Tenesio", simbolo: "Ts", numero: 117, masa: "294", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", estado: "Desconocido", columna: 17, fila: 7, categoria: "" },
    { nombre: "Oganesón", simbolo: "Og", numero: 118, masa: "294", configuracion: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", estado: "Gas", columna: 18, fila: 7, categoria: "" },

    { nombre: "Lantano", simbolo: "La", numero: 57, masa: "138.91", configuracion: "[Xe] 5d¹ 6s²", estado: "Sólido", columna: 3, fila: 9, categoria: "" },
    { nombre: "Cerio", simbolo: "Ce", numero: 58, masa: "140.12", configuracion: "[Xe] 4f² 6s²", estado: "Sólido", columna: 4, fila: 9, categoria: "" },
    { nombre: "Praseodimio", simbolo: "Pr", numero: 59, masa: "140.91", configuracion: "[Xe] 4f³ 6s²", estado: "Sólido", columna: 5, fila: 9, categoria: "" },
    { nombre: "Neodimio", simbolo: "Nd", numero: 60, masa: "144.24", configuracion: "[Xe] 4f⁴ 6s²", estado: "Sólido", columna: 6, fila: 9, categoria: "" },
    { nombre: "Prometio", simbolo: "Pm", numero: 61, masa: "145", configuracion: "[Xe] 4f⁵ 6s²", estado: "Sólido", columna: 7, fila: 9, categoria: "" },
    { nombre: "Samario", simbolo: "Sm", numero: 62, masa: "150.36", configuracion: "[Xe] 4f⁶ 6s²", estado: "Sólido", columna: 8, fila: 9, categoria: "" },
    { nombre: "Europio", simbolo: "Eu", numero: 63, masa: "151.96", configuracion: "[Xe] 4f⁷ 6s²", estado: "Sólido", columna: 9, fila: 9, categoria: "" },
    { nombre: "Gadolinio", simbolo: "Gd", numero: 64, masa: "157.25", configuracion: "[Xe] 4f⁷ 5d¹ 6s²", estado: "Sólido", columna: 10, fila: 9, categoria: "" },
    { nombre: "Terbio", simbolo: "Tb", numero: 65, masa: "158.93", configuracion: "[Xe] 4f⁹ 6s²", estado: "Sólido", columna: 11, fila: 9, categoria: "" },
    { nombre: "Disprosio", simbolo: "Dy", numero: 66, masa: "162.50", configuracion: "[Xe] 4f¹⁰ 6s²", estado: "Sólido", columna: 12, fila: 9, categoria: "" },
    { nombre: "Holmio", simbolo: "Ho", numero: 67, masa: "164.93", configuracion: "[Xe] 4f¹¹ 6s²", estado: "Sólido", columna: 13, fila: 9, categoria: "" },
    { nombre: "Erbio", simbolo: "Er", numero: 68, masa: "167.26", configuracion: "[Xe] 4f¹² 6s²", estado: "Sólido", columna: 14, fila: 9, categoria: "" },
    { nombre: "Tulio", simbolo: "Tm", numero: 69, masa: "168.93", configuracion: "[Xe] 4f¹³ 6s²", estado: "Sólido", columna: 15, fila: 9, categoria: "" },
    { nombre: "Iterbio", simbolo: "Yb", numero: 70, masa: "173.04", configuracion: "[Xe] 4f¹⁴ 6s²", estado: "Sólido", columna: 16, fila: 9, categoria: "" },
    { nombre: "Lutecio", simbolo: "Lu", numero: 71, masa: "174.97", configuracion: "[Xe] 4f¹⁴ 5d¹ 6s²", estado: "Sólido", columna: 17, fila: 9, categoria: "" },

    { nombre: "Actinio", simbolo: "Ac", numero: 89, masa: "227", configuracion: "[Rn] 6d¹ 7s²", estado: "Sólido", columna: 3, fila: 10, categoria: "" },
    { nombre: "Torio", simbolo: "Th", numero: 90, masa: "232.04", configuracion: "[Rn] 6d² 7s²", estado: "Sólido", columna: 4, fila: 10, categoria: "" },
    { nombre: "Protactinio", simbolo: "Pa", numero: 91, masa: "231.04", configuracion: "[Rn] 5f² 6d¹ 7s²", estado: "Sólido", columna: 5, fila: 10, categoria: "" },
    { nombre: "Uranio", simbolo: "U", numero: 92, masa: "238.03", configuracion: "[Rn] 5f³ 6d¹ 7s²", estado: "Sólido", columna: 6, fila: 10, categoria: "" },
    { nombre: "Neptunio", simbolo: "Np", numero: 93, masa: "237", configuracion: "[Rn] 5f⁴ 6d¹ 7s²", estado: "Sólido", columna: 7, fila: 10, categoria: "" },
    { nombre: "Plutonio", simbolo: "Pu", numero: 94, masa: "244", configuracion: "[Rn] 5f⁶ 7s²", estado: "Sólido", columna: 8, fila: 10, categoria: "" },
    { nombre: "Americio", simbolo: "Am", numero: 95, masa: "243", configuracion: "[Rn] 5f⁷ 7s²", estado: "Sólido", columna: 9, fila: 10, categoria: "" },
    { nombre: "Curio", simbolo: "Cm", numero: 96, masa: "247", configuracion: "[Rn] 5f⁷ 6d¹ 7s²", estado: "Sólido", columna: 10, fila: 10, categoria: "" },
    { nombre: "Berkelio", simbolo: "Bk", numero: 97, masa: "247", configuracion: "[Rn] 5f⁹ 7s²", estado: "Sólido", columna: 11, fila: 10, categoria: "" },
    { nombre: "Californio", simbolo: "Cf", numero: 98, masa: "251", configuracion: "[Rn] 5f¹⁰ 7s²", estado: "Sólido", columna: 12, fila: 10, categoria: "" },
    { nombre: "Einstenio", simbolo: "Es", numero: 99, masa: "252", configuracion: "[Rn] 5f¹¹ 7s²", estado: "Sólido", columna: 13, fila: 10, categoria: "" },
    { nombre: "Fermio", simbolo: "Fm", numero: 100, masa: "257", configuracion: "[Rn] 5f¹² 7s²", estado: "Sólido", columna: 14, fila: 10, categoria: "" },
    { nombre: "Mendelevio", simbolo: "Md", numero: 101, masa: "258", configuracion: "[Rn] 5f¹³ 7s²", estado: "Sólido", columna: 15, fila: 10, categoria: "" },
    { nombre: "Nobelio", simbolo: "No", numero: 102, masa: "259", configuracion: "[Rn] 5f¹⁴ 7s²", estado: "Sólido", columna: 16, fila: 10, categoria: "" },
    { nombre: "Laurencio", simbolo: "Lr", numero: 103, masa: "262", configuracion: "[Rn] 5f¹⁴ 6d¹ 7s²", estado: "Sólido", columna: 17, fila: 10, categoria: "" }
];

// 🎨 Definir los colores de cada categoría
const coloresCategorias = {
    "metal-alcalino": "#FF6666",
    "metal-alcalinoterreo": "#FFB266",
    "metal-transicion": "#6699FF",
    "metal-posttransicion": "#2FC8E1",
    "metaloide": "#66CC66",
    "no-metal": "#F7D547",
    "halogeno": "#FF66B2",
    "gas-noble": "#CC99FF",
    "lantanido": "#AAAAAA",
    "actinido": "#888888"
};

// 📏 Definir los breakpoints y tamaños según el ancho de pantalla
const breakpoints = [
    { min: 1024, max: Infinity, tamaño: "min(8vw, 65px)", fontSize: "min(3vw, 24px)", borderWidth: "4px" },
    { min: 769, max: 1023, tamaño: "min(6vw, 45px)", fontSize: "clamp(0.7rem, 1.5vw, 1rem)", borderWidth: "3.5px" },
    { min: 601, max: 768, tamaño: "min(7vw, 42px)", fontSize: "clamp(0.65rem, 1.4vw, 0.95rem)", borderWidth: "3px" },
    { min: 376, max: 600, tamaño: "min(9vw, 38px)", fontSize: "clamp(0.55rem, 1.2vw, 0.85rem)", borderWidth: "2.5px" },
    { min: 320, max: 375, tamaño: "min(11vw, 32px)", fontSize: "clamp(0.45rem, 0.9vw, 0.75rem)", borderWidth: "2px" }
];

function getResponsiveValues() {
    let width = window.innerWidth;
    return breakpoints.find(bp => width >= bp.min && width <= bp.max) || breakpoints[breakpoints.length - 1];
}


const tabla = document.getElementById("tabla");

const modal = document.getElementById("modal");
const elementoNombre = document.getElementById("elemento-nombre");
const elementoSimbolo = document.getElementById("elemento-simbolo");
const elementoNumero = document.getElementById("elemento-numero");
const elementoMasa = document.getElementById("elemento-masa");
const elementoConfiguracion = document.getElementById("elemento-configuracion");
const elementoEstado = document.getElementById("elemento-estado");

// 🆕 Obtener valores responsivos
const { tamaño, fontSize, borderWidth } = getResponsiveValues();

// Crear una celda vacía para separación visual
const separador = document.createElement("div");
separador.style.gridColumn = "span 18";
separador.style.height = "25px"; 
tabla.appendChild(separador);

const lantanidos = document.createElement("div");
lantanidos.className = "bloque-no-clickeable"; 
lantanidos.style.border = `${borderWidth} solid ${coloresCategorias["lantanido"]}`;
lantanidos.classList.add("lantanido");
lantanidos.textContent = "57-71";
lantanidos.style.gridColumn = 3;
lantanidos.style.gridRow = 6;
lantanidos.style.width = tamaño;
lantanidos.style.height = tamaño;
tabla.appendChild(lantanidos);

const actinidos = document.createElement("div");
actinidos.className = "bloque-no-clickeable";
actinidos.style.border = `${borderWidth} solid ${coloresCategorias["actinido"]}`;
actinidos.classList.add("actinido");
actinidos.textContent = "89-103";
actinidos.style.gridColumn = 3;
actinidos.style.gridRow = 7;
actinidos.style.width = tamaño;
actinidos.style.height = tamaño;
tabla.appendChild(actinidos);


elementos.forEach(el => {
    let div = document.createElement("div");
    div.className = "elemento";
    div.textContent = el.simbolo;
    div.style.gridColumn = el.columna;
    div.style.gridRow = el.fila;

    // Aplicar valores responsivos
    div.style.width = tamaño;
    div.style.height = tamaño;
    div.style.fontSize = fontSize;
    div.style.border = `${borderWidth} solid ${coloresCategorias[el.categoria] || "#2196F3"}`;
    
    div.style.backgroundColor = "#000"; 
    div.style.color = "#FFF";
    div.style.textAlign = "center";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.fontWeight = "bold";
    div.style.borderRadius = "10px";

    div.onclick = () => mostrarInfo(el);
    tabla.appendChild(div);
});

function mostrarInfo(elemento) {
    // Actualizar contenido del modal
    elementoNombre.textContent = elemento.nombre;
    elementoSimbolo.textContent = elemento.simbolo;
    elementoNumero.textContent = elemento.numero;
    elementoMasa.textContent = elemento.masa;
    elementoConfiguracion.textContent = elemento.configuracion;
    elementoEstado.textContent = elemento.estado;

    // Obtener color del borde según la categoría del elemento
    let colorBorde = obtenerColorPorElemento(elemento);

    // Aplicar color del borde al modal
    document.querySelector(".modal-contenido").style.setProperty("--borde-color", colorBorde);

    // Mostrar el modal
    modal.style.display = "flex";
}

// Función para definir colores según la categoría del elemento
function obtenerColorPorElemento(elemento) {
    const colores = {
        "metal-alcalino": "#FF6666",
        "metal-alcalinoterreo": "#FFB266",
        "metal-transicion": "#6699FF",
        "metal-posttransicion": "#2FC8E1",
        "metaloide": "#66CC66",
        "no-metal": "#F7D547",
        "halogeno": "#FF66B2",
        "gas-noble": "#CC99FF",
        "lantanido": "#AAAAAA",
        "actinido": "#888888"        
    };

    return colores[elemento.categoria] || "#FFF"; // Color por defecto si no se encuentra la categoría
}

function cerrarModal() {
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el modal al cargar la página
    document.getElementById("modal-anuncio").style.display = "flex";
});

function cerrarAnuncio() {
    document.getElementById("modal-anuncio").style.display = "none";
}







/*if x==0 : C et CE : disabled*/

let ecran2 = document.getElementById("nombre_bas");
let ecran1 = document.getElementById("nombre_haut");

const pourc = document.getElementById("pourc");
const ce = document.getElementById("ce");
const c = document.getElementById("c");
const eff = document.getElementById("eff");
const sept = document.getElementById("sept");
const huit = document.getElementById("huit");
const neuf = document.getElementById("neuf");
const divi = document.getElementById("divi");
const quatre = document.getElementById("quatre");
const cinq = document.getElementById("cinq");
const six = document.getElementById("six");
const x = document.getElementById("x");
const un = document.getElementById("un");
const deux = document.getElementById("deux");
const trois = document.getElementById("trois");
const moins = document.getElementById("moins");
const zero = document.getElementById("zero");
const virgule = document.getElementById("virgule");
const plus = document.getElementById("plus");
const egal = document.getElementById("egal");

const liste_chiffre = [zero,un,deux,trois,quatre,cinq,six,sept,huit,neuf,pourc,divi,x,moins,virgule,plus]

let nombre_haut = []

let dern_chiffre = []


function eff_ligne() {
	ecran2.value = 0
}

function tout_eff() {
	ecran2.value = 0
	ecran1.value = ""
	nombre_haut = []
}

function eff_dernier() {
	if (ecran2.value == 0) {
		ecran2.value = nombre_haut
		
		nombre_haut = []
		ecran1.value = ""
	}
	else {
		if (ecran2.value < 10) {
			ecran2.value = 0
		}
		else {
			ecran2.value -= Number(dern_chiffre.pop())
			ecran2.value /= 10
		}
		if (ecran2.value == 0) {
			ecran2.value = nombre_haut
			
			nombre_haut = []
			ecran1.value = ""
		}
	}
}

function chiffre(le_chiffre) {
	if (ecran2.value == 0) {
		ecran2.value = le_chiffre.value
	}
	else {
		ecran2.value += le_chiffre.value
		console.log(typeof(ecran2.value))
	}
	console.log(le_chiffre.value)
}

function symbols(le_symbol) {
	if (le_symbol.value == ".") {
		ecran2.value += le_symbol.value
	}
	else {
		nombre_haut.push(ecran2.value)
		nombre_haut.push(le_symbol.value)
		longueur = nombre_haut.length
		if (ecran1.value == 0) {
			ecran1.value = Number(nombre_haut[0])
		}
		else {
			ecran1.value += Number(nombre_haut[longueur-2])
		}
		ecran1.value += nombre_haut[longueur-1]
		console.log(typeof(nombre_haut[longueur-1]))
		console.log(nombre_haut)
		ecran2.value = 0
	}
}



function egale() {
	if (ecran1.value != "" && nombre_haut.length%2 == 0 && ecran2.value != 0) {
		nombre_haut.push(ecran2.value)
		ecran1.value += ecran2.value
		ecran2.value = 0
		resultat = 0
		longueur = nombre_haut.length
		if (longueur == 3) {
			resultats(nombre_haut,longueur)
		}
		else {
			for (let i=0;i<longueur;i++) { //prioritaire
				if (nombre_haut[i]==" x ") {
					if (resultat == 0) {
						resultat = Number(nombre_haut[i-1])
						resultat *= Number(nombre_haut[i+1])
					}
					else {
						
					}
				}
				else if (nombre_haut[i]==" ÷ ") {
					if (resultat == 0) {
						resultat = Number(nombre_haut[i-1])
						resultat /= Number(nombre_haut[i+1])
					}
					else {
						
					}
				}
			}
			for (let j=0;j<longueur;j++) {
				if (nombre_haut[j]==" + ") {
					if (resultat == 0) {
						
						variable = []
						selec = longueur-1
						while(selec != j+1){
							variable.push(nombre_haut[selec])
							selec -= 1
						}
						console.log(nombre_haut)
						calcul = []
						calcul.push(nombre_haut.pop())
						calcul.push(nombre_haut.pop())
						calcul.push(nombre_haut.pop())
						console.log("Calcul",calcul)
						
						new_longueur = calcul.length
						res = resultats(calcul,new_longueur)
						console.log("resultat",res)
						
						nombre_haut.push(res)
						
						console.log("nb_ahut",nombre_haut)
						
						resultat = Number(nombre_haut[j-1])
						resultat += Number(nombre_haut[j+1])
						console.log(j)
						nombre_haut.pop(j-1)
						test = nombre_haut.pop(2)
						console.log(test)
						console.log(nombre_haut)
					}
					else {
						
					}
				}
				else if (nombre_haut[j]==" - ") {
					if (resultat == 0) {
						resultat = Number(nombre_haut[j-1])
						resultat -= Number(nombre_haut[j+1])
						console.log(j)
						console.log(nombre_haut)
					}
					else {
						resultat -= Number(nombre_haut[j+1])
					}
				}
			}
		}
	}
	else {
		alert("Veuillez compléter les deux écrans.")
	}
}

function resultats(nombre_haut,longueur){
	if (nombre_haut[1]=="% de "){
		console.log("%")
	}
	else {
		if (nombre_haut[longueur-2]==" x ") {
			resultat = Number(nombre_haut[longueur-3])
			resultat *= Number(nombre_haut[longueur-1])
		}
		else if (nombre_haut[longueur-2]==" ÷ ") {
			resultat = Number(nombre_haut[longueur-3])
			resultat /= Number(nombre_haut[longueur-1])
		}
		else if (nombre_haut[longueur-2]==" + ") {
			resultat = Number(nombre_haut[longueur-3])
			resultat += Number(nombre_haut[longueur-1])
		}
		else if (nombre_haut[longueur-2]==" - ") {
			resultat = Number(nombre_haut[longueur-3])
			resultat -= Number(nombre_haut[longueur-1])
		}
	}
	ecran2.value = resultat
	return resultat
}
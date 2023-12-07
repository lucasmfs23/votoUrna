var vt = "";
var inNum = ""; 
var vtCon = false; 

function votar() {
    if (vtCon) {
        return;
    }

    switch (inNum) {
        case '0011':
            vt = 'Votou no presidente Jj';
            break;
        case '0025':
            vt = 'Votou no presidente Mfz';
            break;
        default:
            vt = 'Voto nulo';
    }
    document.getElementById('Resultadof').innerHTML = vt;
}

function insert(num) {
    if (!vtCon) {
        if (document.getElementById('resultado').innerHTML.length < 1) {
            document.getElementById('resultado').innerHTML = num;
        } else if (document.getElementById('resultado2').innerHTML.length < 1) {
            document.getElementById('resultado2').innerHTML = num;
        } else if (document.getElementById('resultado3').innerHTML.length < 1) {
            document.getElementById('resultado3').innerHTML = num;
        } else if (document.getElementById('resultado4').innerHTML.length < 1) {
            document.getElementById('resultado4').innerHTML = num;
        }
        inNum = document.getElementById('resultado').innerHTML +
                        document.getElementById('resultado2').innerHTML +
                        document.getElementById('resultado3').innerHTML +
                        document.getElementById('resultado4').innerHTML;
    }
}

function confirmar() {
    vtCon = true;
    votar();
}

function corrigir() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado2').innerHTML = "";
    document.getElementById('resultado3').innerHTML = "";
    document.getElementById('resultado4').innerHTML = "";
    inNum = "";
    vtCon = false;
    document.getElementById('Resultadof').innerHTML = "";
}
function branco(){
    document.getElementById('resultado').innerHTML = "0";
    document.getElementById('resultado2').innerHTML = "0";
    document.getElementById('resultado3').innerHTML = "0";
    document.getElementById('resultado4').innerHTML = "0";
    inNum = "";
    vtCon = false;
    document.getElementById('Resultadof').innerHTML = "Voto em branco";
}

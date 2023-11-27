let rValue = document.querySelector('[data-rValue]')
let gValue = document.querySelector('[data-gValue]')
let bValue = document.querySelector('[data-bValue]')
let result = document.querySelector('#result')

function convertToHex(a, b, c){
    if (a<=255 && b<=255 && c<=255){
        d = ~~eval(a/16)
        switch (d){
            case 10:
                d = 'A';
                break;
            case 11:
                d = 'B';
                break;
            case 12:
                d = 'C';
                break;
            case 13:
                d = 'D';
                break;
            case 14:
                d = 'E';
                break;
            case 15:
                d = 'F';
                break;
            default:
                d = d;
        }
        e = eval(a%16)
        switch (e){
            case 10:
                e = 'A';
                break;
            case 11:
                e = 'B';
                break;
            case 12:
                e = 'C';
                break;
            case 13:
                e = 'D';
                break;
            case 14:
                e = 'E';
                break;
            case 15:
                e = 'F';
                break;
            default:
                e = e;
        }
        f = ~~eval(b/16)
        switch (f){
            case 10:
                f = 'A';
                break;
            case 11:
                f = 'B';
                break;
            case 12:
                f = 'C';
                break;
            case 13:
                f = 'D';
                break;
            case 14:
                f = 'E';
                break;
            case 15:
                f = 'F';
                break;
            default:
                f = f;
        }
        g = eval(b%16)
        switch (g){
            case 10:
                g = 'A';
                break;
            case 11:
                g = 'B';
                break;
            case 12:
                g = 'C';
                break;
            case 13:
                g = 'D';
                break;
            case 14:
                g = 'E';
                break;
            case 15:
                g = 'F';
                break;
            default:
                g = g;
        }
        h = ~~eval(b/16)
        switch (h){
            case 10:
                h = 'A';
                break;
            case 11:
                h = 'B';
                break;
            case 12:
                h = 'C';
                break;
            case 13:
                h = 'D';
                break;
            case 14:
                h = 'E';
                break;
            case 15:
                h = 'F';
                break;
            default:
                h = h;
        }
        i = eval(c%16)
        switch (i){
            case 10:
                i = 'A';
                break;
            case 11:
                i = 'B';
                break;
            case 12:
                i = 'C';
                break;
            case 13:
                i = 'D';
                break;
            case 14:
                i = 'E';
                break;
            case 15:
                i = 'F';
                break;
            default:
                i = i;
        }
        return result.textContent=`The hex code of your color is #${d}${e}${f}${g}${h}${i}`
    } else{
        return result.textContent="Please enter the correct R, G and B values"
    }
}

let convertBtn = document.querySelector('#convertBtn')
convertBtn.addEventListener('click', ()=> convertToHex(parseInt(rValue.value), parseInt(gValue.value), parseInt(bValue.value)))
const PrimeiroBi = 8;
const SegundoBi = 6.3;
const TerceiroBi = 7;
const QuartoBi = 9.3;

let media =  (PrimeiroBi + SegundoBi + TerceiroBi + QuartoBi) / 4;

if ( media >= 7 ){
    media += media * 0.1;
}

console.log(`A média é: ${media.toFixed(2)}`)
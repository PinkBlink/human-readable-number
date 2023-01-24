let readableX=function (x){
    let numbers={
        0:'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        15: 'fifteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
    }
    return numbers[x]
    };

let readableXX=function(xx){
        let xxString=xx+'';
        
        let phrase =  (xx==10) ? readableX(xx):
        (xx==11) ? readableX(xx):
        (xx==12) ? readableX(xx):
        (xx==13) ? readableX(xx):
        (xx==15) ? readableX(xx):
        (xx>13 && xx<18) ? readableX(xxString.slice(-1))+'teen':
        (xx==18)? readableX(xxString.slice(-1)).slice(0,4)+'teen':
        (xx>18 && xx<20)? readableX(xxString.slice(-1))+'teen':
        (xx==20) ? readableX(xx):
        (xx==30) ? readableX(xx):
        (xx==40) ? readableX(xx):
        (xx==50) ? readableX(xx):
        (xxString[0]==2) ? readableX(20)+' '+readableX(xxString.slice(-1)) :
        (xxString[0]==3) ? readableX(30)+' '+readableX(xxString.slice(-1)):
        (xxString[0]==4) ? readableX(40)+' '+readableX(xxString.slice(-1)):
        (xxString[0]==5) ? readableX(50)+' '+readableX(xxString.slice(-1)):
        (xx==80) ? readableX(xxString[0]).slice(0,4)+'ty':
        (xxString[0]==8)? readableX(xxString[0]).slice(0,4)+'ty '+readableX(xxString.slice(-1)):
        (xxString%10==0) ? readableX(xxString [0])+'ty':
        readableX(xxString[0])+'ty '+readableX(xxString.slice(-1));
        return phrase;
    }
let readableXXX=function(xxx){
    let xxxString=xxx+'';
    let phrase;
    phrase=(xxx%100==0)? readableX(xxxString[0])+' hundred':
    (xxxString[1]==0)? readableX(xxxString[0])+' hundred '+ readableX(xxxString.slice(-1)):
    readableX(xxxString[0])+' hundred '+ readableXX(xxxString.slice(1));
    return phrase;
}
        
module.exports=function toReadable (arr) {
    let arrString=arr+'';
    return(arrString.length==1) ? readableX(arr) :
    arrString.length==2 ? readableXX(arr):
    readableXXX(arr);
}





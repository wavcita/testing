let array4: any [] = [];
array4.push(1);
array4.push('');
array4.push({});

array4 = [true, 15, 89];

let rantext: any = 'dsfds';
//casteo convertir valor a numero
const rr = rantext as string;
const rr1 = <string>rantext;


function sumNum (a: any, b: any){
    const resp = a+b;
    console.log(resp);
    if (typeof a === 'string')
    {
        console.log("es string", resp)
    }
}

sumNum(1,3);
sumNum('fdsf', true);

// # Grundlagen der Programmierung: Verschachtelte Schleifen (mit Arrays)

// **Verwende verschachtelte Schleifen in jeder deiner Lösungen**

// * Arbeite in der Datei `main.js`, die du in diesem Repository findest.

// Q1. Gib das folgende Muster auf der Konsole aus:
// ```
// *
// * *
// * * *
// * * * *
// ```


function star(){

    let starArr= new Array();

    for (let i=0; i<4;i++){
starArr.push("*");
console.log( starArr.join(""));
    }
}

star();


function star2(){

    let starArr= new Array();
    let text="";

    for (let i=0; i<4;i++){
            text=(text+"*");
        console.log(text);
    }
}

star2();

function star3(){
    let starArr= new Array();
    let text="";

    for(let i=0;i<4;i++){

        for(let j=0;j<=i;j++){
            text=(text+"*");
            starArr.push(text);
        }
        console.log(starArr[i]);
    }
    
}

star3();








// Q2. Gegeben ist das folgende Array:
// ```
// const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// ```
// Erzeuge die folgende Ausgabe in der Konsole:
// ```
// row 0 
// 1 
// 2 
// 1
// 24
// row 1
// 8 
// 11 
// 9
// 4
// row 2
//  ...
// (und so weiter)
// ```


function row(){
    const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

    for (let i=0;i<ARR.length;i++){

    console.log("row"+" "+i);
    for (let j=0; j<4; j++){
        console.log(ARR[i][j]);

    }

      
    }

}

row();


// Q3. Gib das Folgende in der Konsole aus, indem du verschachtelte Schleifen verwendest:
// ```
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```

function number(){
const numArr=new Array();
let num=1;
    for(i=0;i<4;i++){
        
        for(j=0;j<3;j++){
            
            numArr.push(num);

        }
        num=num+1;
    }

    const numArray=new Array();
    for(i=0;i<3;i++){
        for(j=0;j<5;j++){
            numArray.push(j);
        }
        
    }

    
    console.log(numArr.join(""));
    console.log(numArray.join(""));
}





number();



// **BONUSAUFGABE**
// Schreibe eine Lösung für Q3 mit verschachtelten Schleifen, die alle in einer einzigen äußeren Schleife verschachtelt sind.

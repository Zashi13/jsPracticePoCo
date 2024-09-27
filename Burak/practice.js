// ----- 4.1.8 --------

// let i = 1;
// while (i<11){
//     console.log(`7 * ${i} =` , i*7  );
//     i++;
// }

// ------ 4.1.9 ------


// for (i=0; i<21; i++) {
//     console.log(i)
// }


// for (i=3; i<30; i++){
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// for (i=12; i>-15; i--){
//     if (i%2 === 0){
//         console.log(i);
//     }
// }

// for (i=50; i>19; i--){
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }


// ----- 4.2.2 ------


for(let i =1; i<11; i++){
    let list = [];
    list.push(i);
    for (let y = 1; y<11; y++){
        list.push(i*y)
    }
    console.log(i,list)
}

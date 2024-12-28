const gf = async()=>{
    console.log("my gf's name mou");
}

const main= async()=>{
    let a = await gf();
}
main();

async function main2() {

    let promise =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("myself suman")
        },3000)
        
    }) 
    let p = await promise;
    console.log("yor Promise is here:"+p);   
}


let b2 = async()=>{
    let c = await main2();
    
}
b2();
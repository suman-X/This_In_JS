
// const name = ()=>{
// setTimeout(function (){
//     alert("suman Tripathi")
// },4000)

// }

// const dp = async()=>{
//   let fullname = await name();
// }
// dp();


async function name(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Suman Tripathi");
        },2000)
    })

    let a = await promise1;
    console.log(a)
    
    }
    
    const dp = async()=>{
      let fullname = await name();
    }
    dp();
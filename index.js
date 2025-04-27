async function suman() {
  let kolkataWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("28 deg");
    }, 1000);
  });
  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("20 deg");
    }, 2000);
  });

  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 2000);
  });

//    kolkataWeather.then(alert);
//    bangaloreWeather.then(alert);
//    delhiWeather.then(alert);

// using await 
console.log("Fetching Kolkata weather Please wait ...")
let kolkataW = await kolkataWeather;
console.log("Fetched Kolkata weather:"+kolkataW)
console.log("Fetching Bangalore weather Please wait ...")
let blrW = await bangaloreWeather;
console.log("Fetched Bangalore weather:"+blrW)
console.log("Fetching Delhi weather Please wait ...")
let delW = await delhiWeather;
console.log("Fetched Delhi weather:"+delW);
return [kolkataW,blrW,delW]
// kolkataWeather.then((msg)=>{
//     console.log("no1 is:"+msg);
//     return "kokata is too hot city"
// }).then((msg)=>{
//     console.log("inner msg is:"+msg);
// })
// bangaloreWeather.then((msg)=>{
//     console.log("no2 is:"+msg);
// })
// delhiWeather.then((msg)=>{
//     console.log("no3 is:"+msg)
// })
}


const gf = async()=>{
    console.log("moumita")
}
const main = async()=>{
let a = await suman();
let b = await gf();
// a.then((value)=>{
//     console.log(value);
// })

}
main();
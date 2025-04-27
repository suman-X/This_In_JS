let obt = {
    num1:50,
    num2:80,
    num3:40,
    name:'suman',
    add:'barangi'
}


getObjCopy (obt) 
 function getObjCopy(obj){
for(let key in obj){
   // console.log(key,'',obj[key])
   if(typeof obj[key]==='number'){
        obj[key] = obj[key] *2; 
    }
}
}
console.log(obt)
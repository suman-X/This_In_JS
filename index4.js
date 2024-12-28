// let using then operator


class ActorPaid{
    Hollywood = '1200 cr';
    #Bollywood = '500 cr';  // --> (#) it's stand for hidden 
    Tollywood = '700 cr'


    constructor(newPaidHolly,newPaidBolly,newPaidTolly){
        this.Hollywood=newPaidHolly;
        this.Bollywood = newPaidBolly;
        this.Tollywood = newPaidTolly;
    }


     inside() {
        console.log("Hy i am inside")
        
    }

    outside(){
        console.log("Hy i am outside");
    }

    // using get set method
    get fetchbollywood(){
        return this.Bollywood;
    }
}

let newP = new ActorPaid(1500,750,1100);
console.log(newP.Tollywood);
newP.inside();
console.log(newP.fetchbollywood);
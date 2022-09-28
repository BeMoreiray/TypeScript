
function megaSena(){
    
    let max = 61;
    let random = [];

    for(let i = 0; i <= 5 ; i++){
        
        let temp = Math.floor(Math.random() * max);
        
        if(random.indexOf(temp) == -1){
            if(temp > 0){
                random.push(temp);
            }
        }
        else
         i--;
    }
   return random;
}
//console.log(megaSena());



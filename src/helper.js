function genTicket(n){
     let arr= new Array(n);
     for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
     }
     return arr;
}
function winTicket(arr){
    let sum=0;
    for(let i=0;i<3;i++){
        sum=arr[i]+sum
    }
    if(sum==15){
        return true;
    }
    else{
        return false;
    }
    console.log(sum)
}
export {genTicket,winTicket}
 
function Greet(no){
    count=1;
    for(row=0;row<no;row++){
        for(col=0;col<row;col++){
            console.log(count);
            count++;
        }
    }
}

module.exports={
    Greet
}
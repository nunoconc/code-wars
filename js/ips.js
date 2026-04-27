function ipsBetween(start, end){
    const endList = end.split('.').reverse();
    const startList = start.split('.').reverse();

    return endList.reduce((acc, curr, index)=>{

        return acc + (curr - startList[index]) * (256**index);

    }, 0);

}


console.log(ipsBetween("150.0.0.0", "150.0.0.1")) // 1;


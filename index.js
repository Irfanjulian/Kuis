const shoesSize = [6,9,5,4,2,1,6,5,9,7]

const findShoes = ( shoesSize ) =>{
    const duplicates = []
    const sizeDuplicate = [...shoesSize].sort()
    
    for (let i = 0; i < sizeDuplicate.length; i++) {
      if (sizeDuplicate[i + 1] === sizeDuplicate[i]) {
        duplicates.push(sizeDuplicate[i])
      }
      if (duplicates[i] >= 1){
        
      }
    }
    // console.log(`Available Size = ${duplicates.length}`)
    console.log(duplicates.length);
}

findShoes(shoesSize)

const encontrarMayor = (arr) => {
    // Caso base: si solo hay un número, ese es el mayor
    if (arr.length === 1) return arr[0];
  
    const medio = Math.floor(arr.length / 2);
    const izq = encontrarMayor(arr.slice(0, medio));
    const der = encontrarMayor(arr.slice(medio));
  
    return izq > der ? izq : der;
  };
  
  console.log(encontrarMayor([4, 9, 1, 12, 7, 18, 5])); // 18
  


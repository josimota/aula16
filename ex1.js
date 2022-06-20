function fizzBuzz(a, b) {
    for (let i = 0; i <= 100; i++) {
      if (i % a === 0 && i % b === 0) {
        console.log(`FizzBuzz`);
      } else if (i % a === 0) {
        console.log(`Fizz`);
      } else if (i % b === 0) {
        console.log(`Buz`);
      }
    }
  }
  
  fizzBuzz(2, 4);
  
  // ●	Criar uma função que calcula o fatorial usando loop (for);
  // ●	Recriar esta mesma função usando recursividade (sem o uso de for)
  
  function calculaFatorial(numeroFatorial) {
    var fatorial = numeroFatorial;
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
      resultado *= i;
    }
    console.log(resultado);
  }
  
  calculaFatorial(5);
  
  /* sem loop */
  const fatorialSemLoop = (valor) => {
    if (valor > 1) {
      return valor * fatorialSemLoop(valor - 1);
    }
    console.log(valor);
  };
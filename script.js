function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function createPrimeRangeToHexObject() {
  const primesToHex = {};
  for (let i = 2; i <= 100_000; i++) {
    if (isPrime(i)) {
      primesToHex[i] = i.toString(16);
    }
  }
  return primesToHex;
}

function getHexEndingInBCount() {
  const primesToHexObject = createPrimeRangeToHexObject();
  const hexEndingInBArray = Object.keys(primesToHexObject).filter((num) => {
    const lastHexValue = primesToHexObject[num][primesToHexObject[num].length - 1];
    if (lastHexValue === 'b') {
      console.log(`Hex Ending in 'b' - ${num}: ${primesToHexObject[num]}`);
      return num;
    }
  });
  console.log(`Final Hex Ending in 'b' count: ${hexEndingInBArray.length} `);
  return hexEndingInBArray.length;
}

getHexEndingInBCount()

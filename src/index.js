module.exports = function toReadable (number) {
  let result = '';
  const words = {
  	a: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  	b: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    setA(index) {
     return this.a[index - 1];
    },
    setB(index) {
      return this.b[Math.floor(index / 10 - 2)];
    }
  }

  if (number === 0) result = 'zero'; 

  if (number / 100 >= 1) {
    result = words.setA(Math.floor(number / 100)) + ' hundred';
    number = number % 100;
  }

  if (number > 19){
    result += ' ' + words.setB(number);
    number = number % 10;
  }

  if (number > 0 && number <= 19) {
    result += ' ' + words.setA(number);
  } 
  
  return result.trim();
}

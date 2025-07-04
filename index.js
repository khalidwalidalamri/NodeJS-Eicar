const fs = require('fs');

class Eicar {
  constructor() {
    this.string = 'X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*';
  }

  print() {
    try {
      console.log(this.string);
      return true;
    } catch (err) {
      console.error('Error printing EICAR string:', err);
      return false;
    }
  }

  writeToFile(filePath) {
    try {
      fs.appendFileSync(filePath, this.string + '\n');
      console.log(`Successfully wrote EICAR string to ${filePath}`);
      return true;
    } catch (err) {
      console.error('Error writing to file:', err);
      return false;
    }
  }
}

module.exports = Eicar;

const fs = require('fs');
const crypto = require('crypto');

// Path to your P12 file
const p12FilePath = 'Dab-csrs/dab-axis.p12';

// Password for the P12 file
const p12Password = '1234';

// Read the P12 file
const p12File = fs.readFileSync(p12FilePath);

// Extract the private key and certificate
const { privateKey, cert } = crypto.createCredentials({
  pfx: p12File,
  passphrase: p12Password
}).context;

// Now you can use privateKey and cert as needed
console.log(privateKey);
console.log(cert);

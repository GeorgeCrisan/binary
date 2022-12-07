import fetch from "node-fetch";

// Helpers 
// 1. Transform base 10 integer to binary
const transformUint8ArrayToBinaryString = (bytes) => {
  const result = bytes.reduce((str, byte) => {
    return str + byte.toString(2).padStart(8, '0') + " ";
  }, '');
  return result.trim();
}

// 2. Transform from binary (Base 2) to integer and then to char code
const transformBinaryToASCIIString = (str) => {

  var binString = '';

  str.split(' ').map(function (bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  return binString;
}

// Do a http GET request to some text
const fetchSomeTextData = async () => {
  const response = await fetch('https://www.georgecrisan.com');

  // data Buffer (raw data)
  const buffer = await response.arrayBuffer();

  console.log("!1", buffer);

  // Data to Uint8
  const uint = new Uint8Array(buffer);
  console.log("!2", uint);

  let decoder = new TextDecoder();
  let decodedText = decoder.decode(uint);

  // const text = await response.text(); alternatively 
  // Website Text 
  console.log("!3", decodedText);
};


// Part 1 

// fetchSomeTextData();

// Part 2

const binaryData = transformUint8ArrayToBinaryString([60, 33, 68, 79]);

// console.log("buffer Array to binary ****:", binaryData);
// console.log("Binary to ASCII ****:", transformBinaryToASCIIString('00111100 00100001 01000100'));
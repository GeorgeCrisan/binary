import fetch from "node-fetch";

// helpers 
const toBinString = (bytes) =>
    bytes.reduce((str, byte) => str + byte.toString(2).padStart(8, '0'), '');

function binaryAgent(str) {

    var binString = '';

    str.split(' ').map(function (bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
}
binaryAgent('00111100 00100001 01000100');



// Do a http GET request to some text
(async function() {
    const response = await fetch('https://www.georgecrisan.com');

    // data Buffer (raw data)
    const buffer = await res.arrayBuffer();

      console.log("!1", buffer);

    // Data to Uint8
    const uint = new Uint8Array(buffer);
        console.log("!2", uint);

    // let decoder = new TextDecoder(); -> same as res text
    // let decodedText = decoder.decode(uint);
    
    const text = response.text();
        console.log("!3", text);
})()
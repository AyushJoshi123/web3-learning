// Problem: Find a string that produces a hash starting with five leading zeros.

// Description:
// In this assignment, the goal is to simulate a simplified version of blockchain
// Proof-of-Work. Given a base string (for example "hello"), repeatedly append
// an increasing integer (nonce) to the base string and compute its SHA-256 hash.

// The program should continue generating hashes until it finds a hash that
// starts with five leading zeros ("00000").

// Steps:
// 1. Start with a base string.
// 2. Append an integer (nonce) starting from 0.
// 3. Generate the SHA-256 hash of the resulting string.
// 4. Check whether the hash begins with "00000".
// 5. If it does not, increment the nonce and repeat.
// 6. Stop when a valid hash is found.

// Expected Output:
// The program should print:
// - the final string that produced the valid hash
// - the nonce used
// - the hash value that begins with five zeros

// Concepts Practiced:
// - Cryptographic hashing
// - SHA-256 hashing algorithm
// - Brute-force search
// - Basic simulation of Proof-of-Work used in blockchain systems

const crypto = require('crypto')
let basestr = "hello"
const hash = crypto.createHash('sha256').update("hello").digest("hex");
console.log(hash)

function stringcheck(str){
    const firstFive = str.slice(0, 5);
    return firstFive !== "00000"

}
var hash1 = crypto.createHash('sha256').update("hello").digest("hex");
for (i =0 ; stringcheck(hash1);i++){
    var str = basestr + i;
    hash1 = crypto.createHash('sha256').update(str).digest("hex");
}

console.log(str , hash1)
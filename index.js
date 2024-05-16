import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("private", keypair.secretKey);
console.log("public", keypair.publicKey.toBase58());

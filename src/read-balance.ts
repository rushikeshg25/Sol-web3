import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

async function main() {
  const connection = new Connection(clusterApiUrl("devnet"));
  const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
  let balance = await connection.getBalance(address);
  balance = balance / LAMPORTS_PER_SOL;
  console.log(`The balance of the account at ${address} is ${balance} SOL`);
  console.log(`✅ Finished!`);
}
main();

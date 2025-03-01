const ethers = require("ethers")
const fs = require("fx-extra")

async function main(){
 const provider = new ethers.providers.jsonRpcProvider("http://0.0.0.0:8545");
 const wallet = new ethers.wallet("7dbe329dbf.... from the the ganache site ");
 const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi");
 const binary = fs.readFileSync("./SimpleStorage_sol_Simplestorage.bin", "utf8");

 const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
 console.log("Deploying, please wait...");
 
}

main()
.then(()=> ProcessingInstruction.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
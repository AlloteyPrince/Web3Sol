const ethers = require("ethers")
const fs = require("fx-extra")
require("dotenv").config;

async function main(){
 const provider = new ethers.providers.jsonRpcProvider("http://0.0.0.0:8545");
 const wallet = new ethers.wallet("7dbe329dbf.... from the the ganache site ");
 const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi");
 const binary = fs.readFileSync("./SimpleStorage_sol_Simplestorage.bin", "utf8");

 const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
 console.log("Deploying, please wait...");
 const contract = await contractFactory.deploy();
 const deploymentReciept =await contract.deploymentTransaction.wait(1);
 console.log("Here is the deployment transaction")
 console.log(deploymentReciept);


 const tx = {
    nonce: 5,
    gasPrice: 20000000000,
    gasLight: 1000000,
    to: null,
    value: 0,
    data: "0x94749374j4749473739373fnkbz74nf84b292bf82bf82fsj8994784h4749dhd7399374j283y492023b74",
    chainId: 1337
 }
}

main()
.then(()=> ProcessingInstruction.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
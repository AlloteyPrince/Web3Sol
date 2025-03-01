const ethers = require("ethers")


async function main(){
 const provider = new ethers.providers.jsonRpcProvider("http://0.0.0.0:8545");
 const wallet = new ethers.wallet("7dbe329dbf.... from the the ganache site ")
}

main()
.then(()=> ProcessingInstruction.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
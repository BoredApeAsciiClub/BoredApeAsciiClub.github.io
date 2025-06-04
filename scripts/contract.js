const CONTRACT_ADDR="0x140a0b73ae0a8f1e555d6630c9db5cc4d6c167b6"
const CHAIN_ID = 33139
const abi=
[{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hiddenMetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmountPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_freeSupply","type":"uint256"}],"name":"setFreeSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"name":"setHiddenMetadataUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintAmountPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const FREE_NFT =5

let accounts=[]
let is_connected = 0

function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

let update=0
const update_counters=async ()=>{
      if (update) return
      update=1
      const web3 = new Web3('https://rpc.apechain.com/http')
      const contract=new web3.eth.Contract(abi, CONTRACT_ADDR)

      const totalSupply = await contract.methods.totalSupply().call()
      document.getElementById("totalSupply").innerHTML=totalSupply

      const maxSupply = await contract.methods.maxSupply().call()
      document.getElementById("maxSupply").innerHTML=maxSupply
      
      update=0
return
}

const connect= async (e)=>{
  if (typeof window.ethereum !== 'undefined') {
    accounts=await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0){
    if (window.ethereum.chainId == CHAIN_ID) {
        is_connected = 1
    }
    else {
      try {
          await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{chainId: CHAIN_ID}],
          })
          is_connected = 1

      } catch (e) {
            console.log(e)
          }
      }

      const web3= new Web3(window.ethereum)
      const user_balance = await web3.eth.getBalance(accounts[0])
      const text=accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) + ": " + roundUp( web3.utils.fromWei(user_balance),3) + " ETH"
      document.getElementById("connect_button").textContent=text
    }
    else
         document.getElementById("connect_button").innerHTML="Connect wallet";
  }
  return false;
}


const mint=async(e)=>{
  if (is_connected == 0 ) return
  const web3= new Web3(window.ethereum)
  const contract=new web3.eth.Contract(abi, CONTRACT_ADDR, {from:accounts[0],gas: 3000000})
  const amount = document.getElementById("mint_amount").value
  try{
      if (!amount) throw {"message":"Amount should be not zero"}
      const salePaused = await contract.methods.paused().call()
      if (salePaused) throw {"message":"Sale is off"}
      const cost = await contract.methods.cost().call()
      const balance= await contract.methods.balanceOf(accounts[0]).call()
      let amount_to_pay=amount
      if (balance < FREE_NFT){
        if (amount > FREE_NFT){
            amount_to_pay=amount - FREE_NFT - balance
        }else{
            amount_to_pay=0
        }
      }
console.log("PAY: ",amount_to_pay)

      const value = Web3.utils.toBN(amount_to_pay).mul( Web3.utils.toBN(cost) )
    
      const block = await web3.eth.getBlock('latest')
      const baseFee = block.baseFeePerGas

      const priorityFee = Number(baseFee)
      const maxFee = Number(baseFee)

      console.log('BaseFee',web3.utils.fromWei(baseFee.toString(),'gwei'))
      console.log('priorityFee',web3.utils.fromWei(priorityFee.toString(),'gwei'))
      console.log('maxFee',web3.utils.fromWei(maxFee.toString(),'gwei'))

      const gas = await contract.methods.mint(amount).estimateGas({from: accounts[0], value: value })
      const result = await contract.methods.mint(amount).send({from: accounts[0], value: value.toString(),
                    gas:gas,
                    maxFeePerGas: maxFee,
                    maxPriorityFeePerGas: Number(priorityFee),
              })

    await update_counters()
  }  catch(e){
    console.log(e)
    alert( e.message || JSON.parse("{" + e.message.split("{")[1]).message )
  }
}

window.addEventListener('load', async () => {
  document.getElementById('connect_button').onclick=connect
  document.getElementById('mint_button').onclick=mint
  await update_counters()
  await connect()
  window.setInterval( async function(){ console.log("update: " + new Date(Date.now())); await update_counters() }, 5000)
})
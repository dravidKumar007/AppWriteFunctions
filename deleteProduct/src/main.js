import Web3 from 'web3';


export default async ({ req, res, log, error }) => {
  const alchemyUrl = process.env.ALCHEMY_URL;
  const web3 = new Web3(new Web3.providers.HttpProvider(alchemyUrl));

  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_buyerId",
          "type": "string"
        }
      ],
      "name": "addBuyer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_count",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_sellerId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_wholePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_decimalPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageUrl",
          "type": "string"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "deleteProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "sellerId",
          "type": "string"
        }
      ],
      "name": "ProductAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "id",
          "type": "string"
        }
      ],
      "name": "ProductDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "sellerId",
          "type": "string"
        }
      ],
      "name": "ProductUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_count",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_sellerId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_wholePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_decimalPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageUrl",
          "type": "string"
        }
      ],
      "name": "updateProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productId",
          "type": "string"
        }
      ],
      "name": "getBuyers",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "getProductById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "count",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "sellerId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "wholePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "decimalPrice",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "category",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageUrl",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "buyers",
              "type": "string[]"
            }
          ],
          "internalType": "struct ProductManagement.Product",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "sellerId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "wholePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "decimalPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageUrl",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_page",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_limit",
          "type": "uint256"
        }
      ],
      "name": "searchProductsByName",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "count",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "sellerId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "wholePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "decimalPrice",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "category",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageUrl",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "buyers",
              "type": "string[]"
            }
          ],
          "internalType": "struct ProductManagement.Product[]",
          "name": "resultsArray",
          "type": "tuple[]"
        },
        {
          "internalType": "bool",
          "name": "outOfRange",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  var {productID}=req.body;

  log("My PRODUCTID is :"+productID+"\n")
  log("My BODY  is :"+req.body["productID"]+"\n")

 
  try{
    const estimatedGas = await contract.methods
            .deleteProduct(productID)
            .estimateGas({ from: process.env.FROM_ADDRESS });

            const tx = {
              from: process.env.FROM_ADDRESS,
              gas: estimatedGas, // Ensure you estimate gas first
              maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'), // Example value for priority fee
              maxFeePerGas: web3.utils.toWei('20', 'gwei'), // Example value for max fee
              to: contractAddress,
              data: contract.methods.deleteProduct(productID).encodeABI()
          };
          
    const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    return res.json({status:200,
      data:  {id:productID}
       })
  }catch(e){
    log(e)

    log ("Sample1"+Object.keys(e).length )

    log("Sample2"+e.constructor === Object)
    
      return res.json({status:500,error:e})

  }
 

};

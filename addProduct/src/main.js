import { Client, Users,ID } from 'node-appwrite';
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

  const { name, count, sellerId, description, wholePrice, decimalPrice, category, imageUrl } = req.body;
  const productID = ID.unique().toString();

  // Convert to BigNumber
  const bigCount = web3.utils.toBN(count);
  const bigWholePrice = web3.utils.toBN(wholePrice);
  const bigDecimalPrice = web3.utils.toBN(decimalPrice);

  try {
    const estimatedGas = await contract.methods
      .addProduct(productID, name, bigCount, sellerId, description, bigWholePrice, bigDecimalPrice, category, imageUrl)
      .estimateGas({ from: process.env.FROM_ADDRESS });

    const tx = {
      from: process.env.FROM_ADDRESS,
      gas: estimatedGas,
      maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
      maxFeePerGas: web3.utils.toWei('20', 'gwei'),
      to: contractAddress,
      data: contract.methods.addProduct(productID, name, bigCount, sellerId, description, bigWholePrice, bigDecimalPrice, category, imageUrl).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    return res.json({ status: 200, id: productID, data: receipt });

  } catch (e) {
    console.error("Transaction Error:", e); // Improved error logging
    return res.json({ status: 500, error: e.message }); // Better error response
  }
}

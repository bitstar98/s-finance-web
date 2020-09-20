/* Function */
// user_checkpoint bool

// claimable_tokens uint256
// claimable_reward uint256
// claimable_reward2 uint256

// kick 
// set_approve_deposit 
// deposit 
// withdraw
// claim_rewards 
// integrate_checkpoint uint256
// minter address
// crv_token address
// lp_token address
// controller address
// voting_escrow address
// balanceOf uint256
// totalSupply uint256 // 总抵押量
// future_epoch_time uint256
// approved_to_deposit bool
// working_balances uint256
// working_supply uint256
// period int128
// period_timestamp uint256
// integrate_inv_supply uint256
// integrate_inv_supply_of uint256
// integrate_checkpoint_of uint256
// integrate_fraction uint256
// inflation_rate uint256
// claimed_rewards_for uint256


export default [
  {
      "name":"Deposit",
      "inputs":[
          {
              "type":"address",
              "name":"provider",
              "indexed":true
          },
          {
              "type":"uint256",
              "name":"value",
              "indexed":false
          }
      ],
      "anonymous":false,
      "type":"event",
      "signature":"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c"
  },
  {
      "name":"Withdraw",
      "inputs":[
          {
              "type":"address",
              "name":"provider",
              "indexed":true
          },
          {
              "type":"uint256",
              "name":"value",
              "indexed":false
          }
      ],
      "anonymous":false,
      "type":"event",
      "signature":"0x884e`dad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364"
  },
  {
      "name":"UpdateLiquidityLimit",
      "inputs":[
          {
              "type":"address",
              "name":"user",
              "indexed":false
          },
          {
              "type":"uint256",
              "name":"original_balance",
              "indexed":false
          },
          {
              "type":"uint256",
              "name":"original_supply",
              "indexed":false
          },
          {
              "type":"uint256",
              "name":"working_balance",
              "indexed":false
          },
          {
              "type":"uint256",
              "name":"working_supply",
              "indexed":false
          }
      ],
      "anonymous":false,
      "type":"event",
      "signature":"0x7ecd84343f76a23d2227290e0288da3251b045541698e575a5515af4f04197a3"
  },
  {
      "outputs":[

      ],
      "inputs":[
          {
              "type":"address",
              "name":"lp_addr"
          },
          {
              "type":"address",
              "name":"_minter"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"constructor"
  },
  {
      "name":"user_checkpoint",
      "outputs":[
          {
              "type":"bool",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"addr"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "gas":2079152,
      "signature":"0x4b820093"
  },
  {
      "name":"claimable_tokens",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"addr"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1998318,
      "constant":true,
      "signature":"0x33134583"
  },
  {
      "name":"claimable_reward",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"addr"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1998318,
      "constant":true,
      "signature":"0xd2797b59"
  },
  {
    "name":"claimable_reward2",
    "outputs":[
        {
            "type":"uint256",
            "name":""
        }
    ],
    "inputs":[
        {
            "type":"address",
            "name":"addr"
        }
    ],
    "stateMutability":"view",
    "type":"function",
    "gas":1998318,
    "constant":true,
    "signature":"0xd2797b59"
  },
  {
      "name":"kick",
      "outputs":[

      ],
      "inputs":[
          {
              "type":"address",
              "name":"addr"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "gas":2084532,
      "signature":"0x96c55175"
  },
  {
      "name":"set_approve_deposit",
      "outputs":[

      ],
      "inputs":[
          {
              "type":"address",
              "name":"addr"
          },
          {
              "type":"bool",
              "name":"can_deposit"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "gas":35766,
      "signature":"0x1d2747d4"
  },
  {
      "name":"deposit",
      "outputs":[

      ],
      "inputs":[
          {
              "type":"uint256",
              "name":"_value"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "signature":"0xb6b55f25"
  },
  {
      "name":"deposit",
      "outputs":[

      ],
      "inputs":[
          {
              "type":"uint256",
              "name":"_value"
          },
          {
              "type":"address",
              "name":"addr"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "signature":"0x6e553f65"
  },
  {
      "name":"withdraw",
      "outputs":[

      ],
      "inputs":[
          {
              "type":"uint256",
              "name":"_value"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "gas":2208318,
      "signature":"0x2e1a7d4d"
  },
  {
      "name":"claim_rewards",
      "outputs":[

      ],
      "inputs":[
          {
              "type":"address",
              "name":"addr"
          }
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "signature":"0x84e9bd7e"
  },
  {
      "name":"integrate_checkpoint",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":2297,
      "constant":true,
      "signature":"0xd31f3f6d"
  },
  {
      "name":"minter",
      "outputs":[
          {
              "type":"address",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1421,
      "constant":true,
      "signature":"0x07546172"
  },
  {
      "name":"crv_token",
      "outputs":[
          {
              "type":"address",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1451,
      "constant":true,
      "signature":"0x76d8b117"
  },
  {
      "name":"lp_token",
      "outputs":[
          {
              "type":"address",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1481,
      "constant":true,
      "signature":"0x82c63066"
  },
  {
      "name":"controller",
      "outputs":[
          {
              "type":"address",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1511,
      "constant":true,
      "signature":"0xf77c4791"
  },
  {
      "name":"voting_escrow",
      "outputs":[
          {
              "type":"address",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1541,
      "constant":true,
      "signature":"0xdfe05031"
  },
  {
      "name":"balanceOf",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1725,
      "constant":true,
      "signature":"0x70a08231"
  },
  {
      "name":"totalSupply",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1601,
      "constant":true,
      "signature":"0x18160ddd"
  },
  {
      "name":"future_epoch_time",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1631,
      "constant":true,
      "signature":"0xbe5d1be9"
  },
  {
      "name":"approved_to_deposit",
      "outputs":[
          {
              "type":"bool",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          },
          {
              "type":"address",
              "name":"arg1"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1969,
      "constant":true,
      "signature":"0xe1522536"
  },
  {
      "name":"working_balances",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1845,
      "constant":true,
      "signature":"0x13ecb1ca"
  },
  {
      "name":"working_supply",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1721,
      "constant":true,
      "signature":"0x17e28089"
  },
  {
      "name":"period",
      "outputs":[
          {
              "type":"int128",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1751,
      "constant":true,
      "signature":"0xef78d4fd"
  },
  {
      "name":"period_timestamp",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"uint256",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1890,
      "constant":true,
      "signature":"0x7598108c"
  },
  {
      "name":"integrate_inv_supply",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"uint256",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1920,
      "constant":true,
      "signature":"0xfec8ee0c"
  },
  {
      "name":"integrate_inv_supply_of",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1995,
      "constant":true,
      "signature":"0xde263bfa"
  },
  {
      "name":"integrate_checkpoint_of",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":2025,
      "constant":true,
      "signature":"0x9bd324f2"
  },
  {
      "name":"integrate_fraction",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":2055,
      "constant":true,
      "signature":"0x09400707"
  },
  {
      "name":"inflation_rate",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[

      ],
      "stateMutability":"view",
      "type":"function",
      "gas":1931,
      "constant":true,
      "signature":"0x180692d0"
  },
  {
      "name":"claimed_rewards_for",
      "outputs":[
          {
              "type":"uint256",
              "name":""
          }
      ],
      "inputs":[
          {
              "type":"address",
              "name":"arg0"
          }
      ],
      "stateMutability":"view",
      "type":"function",
      "gas":2355,
      "constant":true,
      "signature":"0xfd96044b"
  }
]
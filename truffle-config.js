// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*" // Match any network id
//     }
//   }
// };

var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC =
  "kitten mention liquid broom chapter body glide silk plunge sunny exist laundry";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          MNEMONIC,
          "https://rinkeby.infura.io/v3/0b144c081d084f57a1050eafef93c6bb"
        );
      },
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};

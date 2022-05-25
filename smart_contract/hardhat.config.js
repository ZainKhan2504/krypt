require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/NG025vo4K3pxmUVd3i7FFDpcI8Ain6l4",
      accounts: [
        "fba00f1c8125602590d8b0eb16d043543c085bba0b38a88b04683eca9488f798",
      ],
    },
  },
};

// https://eth-ropsten.alchemyapi.io/v2/OsSrCj-PQF1mKz0QmwfBhpxLkmH9tGFo
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/OsSrCj-PQF1mKz0QmwfBhpxLkmH9tGFo',
      accounts: ['d6c38a1cf834d6877762ce6fffce3d8cd7a0e347e4117958da08367a2a1385f1'],
    },
  },
};
// https://eth-ropsten.alchemyapi.io/v2/wNnxSCuTKueLQabqtLei5T6TdLkZCvi-  

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks :{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/FKvR7LcBvHCKs1_0QmS4oi8PC1DosoZa',
      accounts: ['5f384972f82e5242342c91aaa3cffc6dd167c8be32b521c6f299cc27dd33f8a8']
    }
  }
}
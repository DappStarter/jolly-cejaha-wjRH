require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach razor praise code gentle light army general'; 
let testAccounts = [
"0x7cfffba62f08b1d3140638c7e73e8d1c95c2de28e30642d6be325ad0a883e36c",
"0xe3b7e23c3ff3c07ba6865eb0df061ab58383e6435133437d4776059bc429e440",
"0x4bff93ec1f1988addc696188c226d045516dd04e0673f2bfe1416f94100e28b8",
"0x1ebbb5cb7089a5ee8cba01ecc6d2f44a702a3b405fa314f55e0b50e0054f5731",
"0x5bee294251dbffbb1a4486028796658f9225aae9be54ca797ef338c703f9a5a5",
"0x233bdc4450f13a8f4e0ac5b0c9c6cb9dd9690c9c999be67d76825d1a0d44ba21",
"0x82d58ebbd36023543484da180d31d183458988c9a3dad8459778f09f55124683",
"0x61eea1f7dd991ea52fe1e07f0973f62f56a88bfa5b0dd355698061308567c1dd",
"0x99b6f0ebccc9114817b04a2cdddc1da8bdcc7a9414f52f2b14da62aa8b2407d5",
"0x567df257f1dcd23d29e06938b19ce1658666133daf8265e6a82b6adb79458b71"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


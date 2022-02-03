require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture hill fresh skull drift rescue machine upgrade hidden knee slot gaze'; 
let testAccounts = [
"0x5a877175b5eaeb6c6cf1d2e0e55f353c71e4350143835b38fe03f978576c94e7",
"0x4ccdf7770238534ac734bef5a2d917690f9363a1e8f81008702b79c0e3e21aae",
"0x155b14b512db110d7d85488d7f8d0ae2eead59ec73650b30469cfa88a925bda8",
"0x9c4a031108557a7bbfa32a7788eea0e32b8170ef0fee5f421868173a68a2a9c0",
"0x447695e11852c1a6dac57a137e296b8a92ef2a6cae103c45f68cf94d63ed31ff",
"0xbd37fd2f690a0a297217b0b47399d8670caf81096645b8498e463bad282ef434",
"0xa7ef54da20ed3fc740c732456129a7930415b1f46cda02e618c58eb43a972881",
"0x746ac6a84295dedc73ab0c5e44da186dc94d08a124700283aca66767dc84a3f3",
"0xda639969c86f9fe662df9ac7bf4f337370eabd95564e61ef9dda156da51db8bb",
"0xf34fcdce0cbec4c72cb2aff02040d856457249d6f1103d6ed29f14eb7235dfcc"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



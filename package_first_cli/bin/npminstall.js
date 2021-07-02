const npminstall = require('npminstall');
const path = require('path');
const userHome = require('user-home');

npminstall({
    root: path.resolve(userHome, '.package-demo-cli'),
    storeDir: path.resolve(userHome, '.package-demo-cli', 'node_modules'),
    registry: "https://registry.npmjs.org",
    pkgs: [
        { name: 'foo', version: '~1.0.0'},
    ],
})
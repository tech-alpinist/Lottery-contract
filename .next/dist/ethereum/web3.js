'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask

  /*
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/qAudSy87uo2SByV57ETq'
  );
  web3 = new Web3(provider);
  
  */
  web3 = new _web2.default("http://localhost:8545");
}

exports.default = web3;
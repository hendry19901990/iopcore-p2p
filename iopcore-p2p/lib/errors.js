'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on iopcore-p2p Module {0}'
};

module.exports = require('iopcore-lib').errors.extend(spec);

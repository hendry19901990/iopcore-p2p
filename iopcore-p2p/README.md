Iopcore P2P
=======
 
`iopcore-p2p` adds IoP protocol support for Iopcore.

## Getting Started

```sh
npm install iopcore-p2p
```
In order to connect to the IoP network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('iopcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## License

Code released under [the MIT license](https://github.com/hendry19901990/iopcore-lib/blob/master/LICENSE).

Copyright 2017 IoP, Inc. Iopcore is a trademark maintained by IoP Community, Inc.

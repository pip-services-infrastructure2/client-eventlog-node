# EventLog Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-eventlog](https://github.com/pip-services-infrastructure2/service-eventlog-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP/REST client
* Seneca client (see http://www.senecajs.org)
* Direct client for monolythic deployments
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-eventlog-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('client-eventlog-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.EventLogHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Log system event
let event = await client.logEvent(
    null,
    { 
        type: 'restart',
        source: 'server 1',
        message: 'Server restarted'
    },
);
```

```javascript
var now = new Date();

// Get the list system events
let page = await client.getEvents(
    null,
    {
        from: new Date(now.getTime() - 24 * 3600 * 1000),
        to: now,
        source: 'server 1'
    },
    {
        total: true,
        skip: 0, 
        take: 100
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.


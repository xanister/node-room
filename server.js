var NodeRoomServer = require('./NodeRoomServer');

// Create the sever
var server = new NodeRoomServer(42501);

// Listen for connections
server.onclientconnect = function (client) {
    console.log("Client connected");

    // Do something with client input events
    client.oninput = function (inputs) {
        // Trigger a custom event to all clients
        server.trigger("customevent", {message: "Someone hit G"});
    };
};

// Start it up
server.start();
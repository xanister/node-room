var NodeRoomServer = require('./NodeRoomServer');

// Create the sever, make sure port used is open and available
var server = new NodeRoomServer(42501);

// Listen for connections
server.onclientconnect = function (client) {
    console.log("Client connected");

    // Do something with client input events as an example
    client.oninput = function (inputs) {
        // Trigger a custom event to all clients
        if (inputs.events.keydown.G)
            server.trigger("customevent", {message: "Someone hit G"});
    };
};

// Start it up
server.start();
# encrypted-chat-example

This is the modified version of the socket.io chat example. It adds a local
encryption wich uses the Crypto API to encrypt messages before transmission.

It's an end-to-end implementation so the backend has absolutely no insight
of the transmitted messages.

The original source code is for a very simple chat example used for 
the [Getting Started](http://socket.io/get-started/chat/) guide 
of the Socket.IO website.

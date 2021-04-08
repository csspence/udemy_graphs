/*
Udemy JavaScript Algorithms and Data Structures Masterclass - Graphs

Building an undirected graph
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexName) {
        this.adjacencyList[vertexName] = [];
    }
}
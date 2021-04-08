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
    
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        const filter = (array, value) => {
            let newArr = [];
            for(let i = 0; i < array.length; i++) {
                if(array[i] !== value) {
                    newArr.push(array[i]);
                }
            }
            return newArr;
        }

        this.adjacencyList[vertex1] = filter(this.adjacencyList[vertex1], vertex2);
        this.adjacencyList[vertex2] = filter(this.adjacencyList[vertex2], vertex1);
    }
}
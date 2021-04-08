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

    removeVertex(vertex) {
        for(let i = 0; i < this.adjacencyList[vertex].length; i++) {
            this.removeEdge(vertex, this.adjacencyList[vertex][i]);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursiveTraverse(start) {
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(node) {
            if(!node) {
                return null;
            }
            results.push(node);
            visited[node] = true;
            adjacencyList[node].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start);

        return results;
    }

    depthFirstIterativeTraverse(start) {
        const stack = [start];
        const results = [];
        const visited = {};
        let current;
        visited[start] = true;

        while(stack.length) {
             current = stack.pop();
            results.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor) 
                }
            })
        }
        return results;
    }
}
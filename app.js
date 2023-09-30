

const Node = (pos, prevPos, visited) => {
console.log("-----NODE-----")
    console.log("position: ", pos )
     console.log("previous position: ", prevPos )
     console.log("visted: ", visited )
     console.log("---------------")
    const neighbours = []
    const position = pos

  
     let visitedSquares = [pos, ...visited]  //   const visitedSquares = [pos, ...visited]
       

    //  ROW  ---- COLUMN
    const getNeighbours = () => {
 
        if (pos[0] + 1 < 7 && pos[1] + 2 < 7) {     // one right, two down
            // visitedSquares.push(pos)
            let neighbour = Node( [pos[0] + 1, pos[1] + 2], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if (pos[0] + 1 < 7 && pos[1] - 2 >= 0) { // one right, two 
            //  visitedSquares.push(pos)      
            let neighbour = Node( [pos[0] + 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if (pos[0] + 2 < 7 && pos[1] + 1 < 7) { // two right, one down
            //  visitedSquares.push(pos)       
            let neighbour = Node( [pos[0] + 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if (pos[0] + 2 < 7 && pos[1] - 1 >= 0) { // two right, one up
            //  visitedSquares.push(pos)        
            let neighbour = Node( [pos[0] + 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0) { // two left, one up
            //  visitedSquares.push(pos)       
            let neighbour = Node( [pos[0] - 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0) { // one left, two up
            //  visitedSquares.push(pos)      
            let neighbour = Node( [pos[0] - 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if (pos[0] - 2 >= 0 && pos[1] + 1 < 7) { // two left, one down
            //  visitedSquares.push(pos)      
            let neighbour = Node( [pos[0] - 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if (pos[0] - 1 >= 0 && pos[1] + 2 < 7) { // one left, two down
            //  visitedSquares.push(pos)     
            let neighbour = Node( [pos[0] - 1, pos[1] + 2], prevPos, visitedSquares )
            neighbours.push(neighbour) 
        }
    }
    return { getNeighbours, visitedSquares, position,  neighbours }
};


// TREE ------- TREE ------- TREE

const Tree = (start, previous = start, visited = start, end) => {
    
    let root = [];
    root.push(buildTree(start, previous, visited));

    const search = (end) => {
        
        lastIndex = root.length - 1

        for (const prop of root[lastIndex].neighbours) {
            console.log(prop.position)
            console.log(end)
            if ( prop.position[0] === end[0] && prop.position[1] === end[1] ) {
                console.log(prop, end)
                console.log("yes")
            }
        }
    };


// this should receive the correct root[index] from search, i think
    const insert = (previousNode) => {

        const neighbours = previousNode.neighbours
        
     //   console.log("neighbours: ", neighbours)

        neighbours.forEach(neighbour => {
            // calculate previous position
            console.log("-----INSERT-----")
            console.log(neighbour.position)
            console.log(previousNode.position)
            console.log(previousNode.visitedSquares)
            console.log("--------------")
            root.push(buildTree(neighbour.position, previousNode.position, previousNode.visitedSquares ))
        });     
    };

    getRoot = () => root

    return { root, insert, search, getRoot }  // levelOrder, 
}

// function log(array = [0,0], end = [1,2]) {
//     let some = Tree(array)
//     console.log(some)
//    // some.insert()
//     some.search(end)   
// }

function buildTree(start, prevPos, visitedSquares) {

    let root = Node(start, prevPos, visitedSquares)

    root.getNeighbours()

    // if level order traversal not successful then build next part of the tree

    return root
};



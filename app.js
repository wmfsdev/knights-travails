

const Node = (pos) => {

    const neighbours = []
    const position = pos

    //const edge = 
    //  ROW  ---- COLUMN
    const getNeighbours = () => {

        if (pos[0] + 1 < 7 && pos[1] + 2 < 7) {     // one right, two down
            neighbours.push([pos[0] + 1, pos[1] + 2])
        
        }  if (pos[0] + 1 < 7 && pos[1] - 2 >= 0) { // one right, two up
            neighbours.push([pos[0] + 1, pos[1] - 2])

        }  if (pos[0] + 2 < 7 && pos[1] + 1 < 7) { // two right, one down
            neighbours.push([pos[0] + 2, pos[1] + 1])
        
        }  if (pos[0] + 2 < 7 && pos[1] - 1 >= 0) { // two right, one up
            neighbours.push([pos[0] + 2, pos[1] - 1])

        }  if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0) { // two left, one up
            neighbours.push([pos[0] - 2, pos[1] - 1])

        }  if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0) { // one left, two up
            neighbours.push([pos[0] - 1, pos[1] - 2])

        }  if (pos[0] - 2 >= 0 && pos[1] + 1 < 7) { // two left, one down
            neighbours.push([pos[0] - 2, pos[1] + 1])

        }  if (pos[0] - 1 >= 0 && pos[1] + 2 < 7) { // one left, two down
            neighbours.push([pos[0] - 1, pos[1] + 2]) 
        } 
    }
    return { getNeighbours, position, neighbours }
};



const Tree = (start, end) => {

    let root = buildTree(start, end)
    
    const levelOrder = (cb) => { 

        let queue = [root]
        let store = []
    
        while ( queue.length !== 0 ) {  
            
            let current = queue[0]
            store.push(root)
           
            // if (current.left !== null) {
            //     queue.push(current.left)
            // }
        
            // if (current.right !== null) {
            //     queue.push(current.right)
            // }
    
            // if (cb) {
            //     console.log(queue[0].data)
            // }
        
            queue.shift()
        }
        
        if ( queue.length === 0 ) {
            return store
        }
    };

    const loopNeighbours = (current = root) => {
        console.log(current)

        for (const prop of current.neighbours) {

            buildTree(prop, end)  // every array element needs to create its own node

            // if ( prop[0] === end[0] && prop[1] === end[1] ) {
            // console.log(prop[0][1], end[0][1])
            ///    console.log("yes")
            //  return root.neighbours
            // } else buildTree(prop, end)
        }
    // console.log("mmm...")
    }

    // let adjList = [

    //     { // A1:  index 0
    //         position: adjList[0],
    //         neighbours: [ adjList[10], adjList[17] ]
    //     },
    //     // index 1 through 9...

    //     { // C2:  index 10
    //         position: adjList[10], 
    //         neighbours: [ adjList[4], adjList[16], adjList[20], adjList[25], adjList[27] ]
    //     },
    // ]
    getRoot = () => root

    return { root, levelOrder, loopNeighbours, getRoot }
}

function log(array = [0,0]) {
    let some = Tree(array)
    console.log(some)
    some.loopNeighbours(some.neighbours)
}


function buildTree(start, end) {

    let root = Node(start, end)

    root.getNeighbours()

    console.log(root)

    console.log(root.neighbours)

    // let some = test.levelOrder()
    // console.log(some)

    // if level order traversal not successful then build next part of the tree 
    return root
};



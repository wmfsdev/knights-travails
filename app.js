

const Node = (pos) => {    // [...pos]

    const neighbours = []
    const position = pos
//  for (const prop of pos) {       
//         console.log(prop)
//         console.log(pos)
    //const edge = 
    //  ROW  ---- COLUMN
    const getNeighbours = () => {
        console.log(pos)
     //   for (let i = 0 ; i < pos.length ; i++) {    // for every argument passed do the following
      
        if (pos[0] + 1 < 7 && pos[1] + 2 < 7) {     // one right, two down
            let neighbour = Node( [pos[0] + 1, pos[1] + 2] )
            neighbours.push(neighbour)
        
        }  if (pos[0] + 1 < 7 && pos[1] - 2 >= 0) { // one right, two 
            let neighbour = Node( [pos[0] + 1, pos[1] - 2] )
            neighbours.push(neighbour)

        }  if (pos[0] + 2 < 7 && pos[1] + 1 < 7) { // two right, one down
            let neighbour = Node( [pos[0] + 2, pos[1] + 1] )
            neighbours.push(neighbour)
        
        }  if (pos[0] + 2 < 7 && pos[1] - 1 >= 0) { // two right, one up
            let neighbour = Node( [pos[0] + 2, pos[1] - 1] )
            neighbours.push(neighbour)

        }  if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0) { // two left, one up
            let neighbour = Node( [pos[0] - 2, pos[1] - 1] )
            neighbours.push(neighbour)

        }  if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0) { // one left, two up
            let neighbour = Node( [pos[0] - 1, pos[1] - 2] )
            neighbours.push(neighbour)

        }  if (pos[0] - 2 >= 0 && pos[1] + 1 < 7) { // two left, one down
            let neighbour = Node( [pos[0] - 2, pos[1] + 1] )
            neighbours.push(neighbour)

        }  if (pos[0] - 1 >= 0 && pos[1] + 2 < 7) { // one left, two down
            let neighbour = Node( [pos[0] - 1, pos[1] + 2] )
            neighbours.push(neighbour) 
        }
  //  }
    }
    return { getNeighbours, position, neighbours }
};

// const getNeighbours = () => {

//     if (pos[0] + 1 < 7 && pos[1] + 2 < 7) {     // one right, two down
//         neighbours.push([pos[0] + 1, pos[1] + 2])
    
//     }  if (pos[0] + 1 < 7 && pos[1] - 2 >= 0) { // one right, two up
//         neighbours.push([pos[0] + 1, pos[1] - 2])

//     }  if (pos[0] + 2 < 7 && pos[1] + 1 < 7) { // two right, one down
//         neighbours.push([pos[0] + 2, pos[1] + 1])
    
//     }  if (pos[0] + 2 < 7 && pos[1] - 1 >= 0) { // two right, one up
//         neighbours.push([pos[0] + 2, pos[1] - 1])

//     }  if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0) { // two left, one up
//         neighbours.push([pos[0] - 2, pos[1] - 1])

//     }  if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0) { // one left, two up
//         neighbours.push([pos[0] - 1, pos[1] - 2])

//     }  if (pos[0] - 2 >= 0 && pos[1] + 1 < 7) { // two left, one down
//         neighbours.push([pos[0] - 2, pos[1] + 1])

//     }  if (pos[0] - 1 >= 0 && pos[1] + 2 < 7) { // one left, two down
//         neighbours.push([pos[0] - 1, pos[1] + 2]) 
//     } 
// }

const Tree = (start, end) => {
    
    let root = [];

    root.push(buildTree(start));
    

    const levelOrder = (cb) => { 

        let queue = root
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

    const search = (end) => {
        
        lastIndex = root.length - 1

        for (const prop of root[lastIndex].neighbours) {
            console.log(prop.position)
            console.log(end)
            if ( prop.position[0] === end[0] && prop.position[1] === end[1] ) {
                console.log(prop, end)
                console.log("yes")
            // return root.neighbours
            }
        }
    };


    const insert = (...arr) => {
        const test = [...arr]
        console.log(test)

        test.forEach(element => {
            root.push(buildTree(element))
        });

        // lastIndex = root.length - 1
        // console.log()
        
        // console.log(root[lastIndex])
        
        
    };


    // const loopNeighbours = (current = root) => {
    //     console.log(current)

    //     for (const prop of current.neighbours) {

    //         buildTree(prop, end)  // every array element needs to create its own node

    //         // if ( prop[0] === end[0] && prop[1] === end[1] ) {
    //         // console.log(prop[0][1], end[0][1])
    //         ///    console.log("yes")
    //         //  return root.neighbours
    //         // } else buildTree(prop, end)
    //     }
    // };

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

    return { root, levelOrder, insert, search, getRoot }
}

function log(array = [0,0], end = [1,2]) {
    let some = Tree(array)
    console.log(some)
   // some.insert()
    some.search(end)

    // some.loopNeighbours(some.neighbours)
    // console.log(some.root.neighbours[0].position)
    // buildTree(some.root.neighbours[0].position)

    // console.log(some)


  //  console.log(some.root)
  // some.root.loopNeighbours(some.root.neighbours)
     
}


function buildTree(start, end) {

    let root = Node(start, end)

    root.getNeighbours()

    // console.log(root)
    // console.log(root.neighbours)

    // let some = test.levelOrder()
    // console.log(some)
    // if level order traversal not successful then build next part of the tree

    return root
};



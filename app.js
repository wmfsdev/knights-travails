

const Node = (pos) => {    // [...pos]

    const neighbours = []
    const position = pos

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


const Tree = (start, end) => {
    
    let root = [];

    root.push(buildTree(start));
    

    // const levelOrder = (cb) => { 

    //     let queue = root
    //     let store = []
    
    //     while ( queue.length !== 0 ) {  
            
    //         let current = queue[0]
    //         store.push(root)
           
    //         if (current.left !== null) {
    //             queue.push(current.left)
    //         }
        
    //         if (current.right !== null) {
    //             queue.push(current.right)
    //         }
    
    //         if (cb) {
    //             console.log(queue[0].data)
    //         }
        
    //         queue.shift()
    //     }
        
    //     if ( queue.length === 0 ) {
    //         return store
    //     }
    // };

    // const search = (end) => {
        
    //     lastIndex = root.length - 1

    //     for (const prop of root[lastIndex].neighbours) {
    //         console.log(prop.position)
    //         console.log(end)
    //         if ( prop.position[0] === end[0] && prop.position[1] === end[1] ) {
    //             console.log(prop, end)
    //             console.log("yes")
    //         }
    //     }
    // };


    const insert = (...arr) => {
        const test = [...arr]
        console.log(test)

        test.forEach(element => {
            root.push(buildTree(element))
        });     
    };

    getRoot = () => root

    return { root, levelOrder, insert, search, getRoot }
}

// function log(array = [0,0], end = [1,2]) {
//     let some = Tree(array)
//     console.log(some)
//    // some.insert()
//     some.search(end)   
// }


function buildTree(start, end) {

    let root = Node(start, end)

    root.getNeighbours()

    // if level order traversal not successful then build next part of the tree

    return root
};



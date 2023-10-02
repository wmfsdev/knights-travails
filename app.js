// const some = 5
// console.log(some.toString(2))

const Node = (pos, prevPos, visited) => {
// console.log("-----NODE-----")

     console.log("position: ", pos )
    // console.log("previous position: ", prevPos )
     console.log("visited: ", visited )
    // console.log("---------------")
    const neighbours = []
    const position = pos

    const numAsString = `${pos[0]}${pos[1]}`
       
   
    let visitedSquares = new Set(visited)
    visitedSquares.add(numAsString)
    visitedSquares.delete(0)
   

    // console.log(visitedSquares)
    //  visitedSquares.add(numAsString)
    //  visitedSquares.add(...visited)
    //  console.log(visitedSquares)
    //  visitedSquares.add(...visited)
    // console.log(visitedSquares)
    // let visitedSquares = [pos, ...visited]  //   const visitedSquares = [pos, ...visited]

    
        // if any value in the Set matches a proposed move skip
            const a = `${pos[0 ]+ 1}${pos[1 ]+ 2}`
            const b = `${pos[0 ]+ 1}${pos[1 ]- 2}`
            const c = `${pos[0 ]+ 2}${pos[1 ]+ 1}`
            const d = `${pos[0 ]+ 2}${pos[1 ]- 1}`
            const e = `${pos[0 ]- 2}${pos[1 ]- 1}`
            const f = `${pos[0 ]- 1}${pos[1 ]- 2}`
            const g = `${pos[0 ]- 2}${pos[1 ]+ 1}`
            const h = `${pos[0 ]- 1}${pos[1 ]+ 2}`

            console.log(a, b, c, d,e, f, g, h)
   
    
  
    console.log(visitedSquares, numAsString)
 
  
    const getVisited = () => {
        return true
    };

    //  ROW  ---- COLUMN
    const getNeighbours = () => {
 
        if ( (pos[0] + 1 < 7 && pos[1] + 2 < 7) && !visitedSquares.has(a)   ) {     // one right, two down
            console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 1, pos[1] + 2], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if ( (pos[0] + 1 < 7 && pos[1] - 2 >= 0)  && !visitedSquares.has(b)  ) { // one right, two 
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] + 2 < 7 && pos[1] + 1 < 7)  && !visitedSquares.has(c)  ) { // two right, one down
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if ( (pos[0] + 2 < 7 && pos[1] - 1 >= 0)  && !visitedSquares.has(d)  ) { // two right, one up
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 2 >= 0 && pos[1] - 1 >= 0)  && !visitedSquares.has(e)  ) { // two left, one up
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 1 >= 0 && pos[1] - 2 >= 0)  && !visitedSquares.has(f)  ) { // one left, two up
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 2 >= 0 && pos[1] + 1 < 7)  && !visitedSquares.has(g)  ) { // two left, one down
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 1 >= 0 && pos[1] + 2 < 7) && !visitedSquares.has(h)  ) { // one left, two down
             console.log(pos)
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 1, pos[1] + 2], prevPos, visitedSquares )
            neighbours.push(neighbour) 
        }
    };
    return { getNeighbours, position, neighbours, visitedSquares }
};


// TREE ------- TREE ------- TREE

const Tree = (start, previous = start, visited = start) => {

    let root = [];
    root.push(buildTree(start, previous, visited));


    const search = (end, index = 0) => {

        for (const prop of root[index].neighbours) {

            console.log(prop.position)
            
            console.log(index)

            if ( prop.position[0] === end[0] && prop.position[1] === end[1] ) {
                console.log(prop.position[0], prop.position[1], end)
                console.log("match")
                return index
            } 
        }
        return index
    };


// this should receive the correct root[index] from search, i think
    const insert = (previousNode, index) => {
        console.log(previousNode)

        const neighbours = previousNode.neighbours

        neighbours.forEach(neighbour => {
            // calculate previous position
            // console.log("-----INSERT-----")
            // console.log(neighbour.position)
            // console.log(previousNode.position)
            // console.log(previousNode.visitedSquares)
            // console.log("--------------")
            root.push(buildTree(neighbour.position, previousNode.position, previousNode.visitedSquares ))
        });     
    };

    getRoot = () => root

    return { root, insert, search, getRoot }  // levelOrder, 
}

function log(array = [0,0], end = [0,4]) {
    let tree = Tree(array)
    console.log(tree)

    let index = tree.search(end)
    console.log(index)
    tree.insert(tree.root[index])
    console.log(tree)
    index++
    tree.search(end, index)

    // if search not successful then build next part of the tree
}

function buildTree(start, prevPos, visitedSquares) {

    let root = Node(start, prevPos, visitedSquares)

    root.getNeighbours()

    return root
};


// let test = Tree([0,0])
// test.insert(test.root[0])
// test.insert(test.root[1])
// console.log(test)
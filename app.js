
const Node = (pos, prevPos, visited) => {
// console.log("-----NODE-----")

   // console.log("position: ", pos )
   // console.log("visited: ", visited )
    // console.log("---------------")
    const neighbours = []
    const position = pos

    const numAsString = `${pos[0]}${pos[1]}`
       
    let visitedSquares = new Set(visited)
    visitedSquares.add(numAsString)
    visitedSquares.delete(0)
   
    // let visitedSquares = [pos, ...visited]  //   const visitedSquares = [pos, ...visited]

    // if any value in the Set matches a proposed move skip
        
        const a = `${pos[0]+ 1}${pos[1]+ 2}`
        const b = `${pos[0]+ 1}${pos[1]- 2}`
        const c = `${pos[0]+ 2}${pos[1]+ 1}`
        const d = `${pos[0]+ 2}${pos[1]- 1}`
        const e = `${pos[0]- 2}${pos[1]- 1}`
        const f = `${pos[0]- 1}${pos[1]- 2}`
        const g = `${pos[0]- 2}${pos[1]+ 1}`
        const h = `${pos[0]- 1}${pos[1]+ 2}`

        // console.log(a, b, c, d,e, f, g, h)
        // console.log(visitedSquares, numAsString)
 
    // const getVisited = () => {
    //     return true
    // };
    //  HORIZONTAL - VERTICAL
    //  ROW  ---- COLUMN
    const getNeighbours = () => {
 
        if ( (pos[0] + 1 <= 7 && pos[1] + 2 <= 7) && !visitedSquares.has(a)   ) {     // one right, two up
            console.log( "one right, two up" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 1, pos[1] + 2], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if ( (pos[0] + 1 <= 7 && pos[1] - 2 >= 0)  && !visitedSquares.has(b)  ) { // one right, two down
            console.log( "one right, two down" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] + 2 <= 7 && pos[1] + 1 <= 7)  && !visitedSquares.has(c)  ) { // two right, one up
            console.log( "two right, one up" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if ( (pos[0] + 2 <= 7 && pos[1] - 1 >= 0)  && !visitedSquares.has(d)  ) { // two right, one down
            console.log( "two right, one down" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 2 >= 0 && pos[1] - 1 >= 0)  && !visitedSquares.has(e)  ) { // two left, one down
            console.log( "two left, one up" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 1 >= 0 && pos[1] - 2 >= 0)  && !visitedSquares.has(f)  ) { // one left, two down
            console.log( "one left, two up" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 2 >= 0 && pos[1] + 1 <= 7)  && !visitedSquares.has(g)  ) { // two left, one down
            console.log( "two left, one down" )
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 1 >= 0 && pos[1] + 2 <= 7) && !visitedSquares.has(h)  ) { // one left, two down
            console.log( "one left, two down" )
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


    const search = (end, index) => {

        for (const prop of root[index].neighbours) {

            // console.log(prop.position)
            // console.log(index)

            if ( prop.position[0] === end[0] && prop.position[1] === end[1] ) {
                console.log(root[index])
                console.log(prop.position[0], prop.position[1], end)
                console.log("match")
                return end
            } 
        }
        return index
    };

// this should receive the correct root[index] from search, i think
    const insert = (previousNode) => {
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

    return { root, insert, search, getRoot }
};


function knight(array = [2,2], end = [5,6]) {

    let tree = Tree(array)
    console.log(tree)

    next(tree, end) 
};


function next(tree, end, test = 0) {
  //  console.log(test)
    let index = tree.search(end, test)
// console.log(index)
    if (Array.isArray(index)) {
      console.log(index)
      return
    } 
 
    tree.insert(tree.root[index])
    test++
    next(tree, end, test)
    // if search not successful then build next part of the tree
};


function buildTree(start, prevPos, visitedSquares) {

    let root = Node(start, prevPos, visitedSquares)
    root.getNeighbours()

    return root
};
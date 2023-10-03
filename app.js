
const Node = (pos, prevPos, visited) => {

    const neighbours = []
    const position = pos
    const numAsString = `${pos[0]}${pos[1]}`
       
    let visitedSquares = new Set(visited) 
    visitedSquares.add(numAsString)

        // if any value in the Set matches a proposed move skip
        const a = `${pos[0]+ 1}${pos[1]+ 2}`
        const b = `${pos[0]+ 1}${pos[1]- 2}`
        const c = `${pos[0]+ 2}${pos[1]+ 1}`
        const d = `${pos[0]+ 2}${pos[1]- 1}`
        const e = `${pos[0]- 2}${pos[1]- 1}`
        const f = `${pos[0]- 1}${pos[1]- 2}`
        const g = `${pos[0]- 2}${pos[1]+ 1}`
        const h = `${pos[0]- 1}${pos[1]+ 2}`

    //  ROW  ---- COLUMN // HORIZONTAL - VERTICAL
    const getNeighbours = () => {
 
        if ( (pos[0] + 1 <= 7 && pos[1] + 2 <= 7) && !visitedSquares.has(a)   ) {     // one right, two up
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 1, pos[1] + 2], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if ( (pos[0] + 1 <= 7 && pos[1] - 2 >= 0)  && !visitedSquares.has(b)  ) { // one right, two down
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] + 2 <= 7 && pos[1] + 1 <= 7)  && !visitedSquares.has(c)  ) { // two right, one up
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)
        
        }  if ( (pos[0] + 2 <= 7 && pos[1] - 1 >= 0)  && !visitedSquares.has(d)  ) { // two right, one down
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] + 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 2 >= 0 && pos[1] - 1 >= 0)  && !visitedSquares.has(e)  ) { // two left, one down
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 2, pos[1] - 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 1 >= 0 && pos[1] - 2 >= 0)  && !visitedSquares.has(f)  ) { // one left, two down
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 1, pos[1] - 2], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 2 >= 0 && pos[1] + 1 <= 7)  && !visitedSquares.has(g)  ) { // two left, one up
            
            visitedSquares.add(numAsString)
            visitedSquares.add(...visited)
            let neighbour = Node( [pos[0] - 2, pos[1] + 1], prevPos, visitedSquares )
            neighbours.push(neighbour)

        }  if ( (pos[0] - 1 >= 0 && pos[1] + 2 <= 7) && !visitedSquares.has(h)  ) { // one left, two up
            
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

    const buildTree = (start, prevPos, visitedSquares) => {
        
        let root = Node(start, prevPos, visitedSquares)
        root.getNeighbours()
    
        return root
    };

    root.push(buildTree(start, previous, visited));

    const search = (end, index) => {

        for (const prop of root[index].neighbours) {

            if ( prop.position[0] === end[0] && prop.position[1] === end[1] ) {
                return root[index].visitedSquares
            } 
        }
        return index
    };

    // this should receive the correct root[index] from search
    const insert = (previousNode) => {

        const neighbours = previousNode.neighbours

        neighbours.forEach(neighbour => {
            // calculate previous position
            root.push(buildTree(neighbour.position, previousNode.position, previousNode.visitedSquares ))
        });     
    };

    const levelOrder = (tree, end, node = 0) => {

        let result = tree.search(end, node)
    
        if (result instanceof Set) return convertSet(result, end)

        tree.insert(tree.root[result])
        node++
        // if search not successful then build next part of the tree
        levelOrder(tree, end, node)   
    };

    return { root, insert, search, buildTree, levelOrder }
};

const convertSet = (result, end) => {

    const path = []

    const removeNumbers = (result) => {
        result.forEach(item => {    
            if (item < 10) {
                result.delete(item)
            }
        });
        return result
    };

    const convertToNumbers = (set) => {
        
        set.forEach(ele => {
            path.push( [Number(ele.charAt(0)), Number(ele.charAt(1))] )
        });
    };

    const revisedSet = removeNumbers(result, end)
    convertToNumbers(revisedSet)
    path.push(end)

    console.log("shortest path: ", path)
    console.log("steps taken: ", path.length - 1)
};


function knight(array = [1,2], end = [5,5]) {

    let tree = Tree(array)
    tree.levelOrder(tree, end) 
};
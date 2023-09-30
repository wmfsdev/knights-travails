


if (position[0] + 1 < 7 && position[1] + 2 < 7) {     // one right, two down
    let neighbour = Node( [position[0] + 1, position[1] + 2] )
    neighbours.push(neighbour)

}  if (position[0] + 1 < 7 && position[1] - 2 >= 0) { // one right, two 
    let neighbour = Node( [position[0] + 1, position[1] - 2] )
    neighbours.push(neighbour)

}  if (position[0] + 2 < 7 && position[1] + 1 < 7) { // two right, one down
    let neighbour = Node( [position[0] + 2, position[1] + 1] )
    neighbours.push(neighbour)

}  if (position[0] + 2 < 7 && position[1] - 1 >= 0) { // two right, one up
    let neighbour = Node( [position[0] + 2, position[1] - 1] )
    neighbours.push(neighbour)

}  if (position[0] - 2 >= 0 && position[1] - 1 >= 0) { // two left, one up
    let neighbour = Node( [position[0] - 2, position[1] - 1] )
    neighbours.push(neighbour)

}  if (position[0] - 1 >= 0 && position[1] - 2 >= 0) { // one left, two up
    let neighbour = Node( [position[0] - 1, position[1] - 2] )
    neighbours.push(neighbour)

}  if (position[0] - 2 >= 0 && position[1] + 1 < 7) { // two left, one down
    let neighbour = Node( [position[0] - 2, position[1] + 1] )
    neighbours.push(neighbour)

}  if (position[0] - 1 >= 0 && position[1] + 2 < 7) { // one left, two down
    let neighbour = Node( [position[0] - 1, position[1] + 2] )
    neighbours.push(neighbour) 
}
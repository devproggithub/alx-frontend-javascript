function createGrid(width, height, depth) {
    width = width !== undefined ? width : 10;
    height = height !== undefined ? height : 10;
    depth = depth !== undefined ? depth : 10;
    return { width, height, depth };
}

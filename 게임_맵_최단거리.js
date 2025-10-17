const directions = [ [0,1], [0,-1], [1,0], [-1,0]]
function solution(maps) {
    let queue = [[0,0,1]];
    let idx = 0
    const width = maps[0].length;
    const height = maps.length;
    // let visited = Array.from({ length : height }, () => new Array(width).fill(false))
    let visited = maps.map((r) => r.map ((_) => false))
    visited[0][0] = true
    
    while (idx < queue.length) {
        const [cx, cy, d] = queue[idx++]
        if (cy === height-1 && cx === width-1) { return d }
        for (const [dx, dy] of directions) {
            const [nx, ny] = [dx + cx, dy + cy]
            if (nx<0 || nx >= width || ny < 0 || ny >= height) { continue }
            if (visited[ny][nx] === true || maps[ny][nx] === 0 ) { continue }
            queue.push([nx, ny, d+1])
            visited[ny][nx] = true
        }
    }
    return -1;
}

let res = solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])
console.log(res)
const direction = [[-1,0],[1,0],[0,1],[0,-1]]
function solution(maps) {
    let board = maps.map(e=>[...e])
    let [width, height] = [board[0].length, board.length]
    let [start, end, 레버] = [[0,0,0], [0,0], [0,0]]
    
    let visited = board.map((e, y)=>e.map((칸,x)=>{
        if (칸 ==='S') start = [x,y,0]
        if (칸 ==='E') end = [x,y]
        return false
    }))
    
    let queue = [start]
    visited[start[1]][start[0]] = true
    let idx = 0
    let hasPulled = false
    
    while (queue.length > idx) {
        let [cx, cy, cnt] = queue[idx++]
        if (hasPulled && (cx === end[0] && cy === end[1])) return cnt
        /// 1. 레버 땡기고 2. 도착지점 가야함 ㅇㅅㅇ
        if (!hasPulled && maps[cy][cx] === 'L') {
            visited = board.map(e=>e.map(_=>false))
            visited[cy][cx] = true
            hasPulled = true
            queue = [[cx, cy, cnt]]
            idx = 0
            continue
        }
        
        for ([dx, dy] of direction) {
            let [nx, ny] = [cx+dx, cy+dy]
            if (nx<0 || nx>=width || ny<0 || ny>= height) continue
            if (visited[ny][nx]) continue
            if (maps[ny][nx] === 'X') continue
            queue.push([nx,ny,cnt+1])
            visited[ny][nx] = true
        }
    }
    return -1
}

solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])
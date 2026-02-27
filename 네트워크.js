/// 코드를 줄여보자
const solution = (n, computers) => {
    const visited = computers.map(_=>false);
    /// JS에서 || 오어 (or) 연산자는 A || B에서 A가 트루면 b실행안함 근데 a false면 b실행 
    /// if(1) 이거도 true, 그러니까 forEach돌면서 computers[i][j]가 1이라면 이값이 c인건데,
    /// && 연산자는 A && B이라면 A가 true여야만 B를 실행함. 근데 A가 true(1이 아니라면! 이어져 있지않다면 dfs(j)실행 안함;;)
    const dfs = (i) => visited[i] || (visited[i] = true, computers[i].forEach((c, j) => c && dfs(j)))
    
    /// dfs대박이네 쉽네
    /// 지금부터 dfs도는거야..
    // 오히려 dfs가 bfs보다 더 쉽기도하네;;; 그냥 딱 돌면서 어 맞아? -> ok하면 그 경로통째로 안쓸수있게되는거니까 굳이 동시에 탐색안해도되긋네
    return computers.map(_=>_).reduce((acc,_,i) => visited[i] ? acc : (dfs(i), acc+1),0)
}

//오히려 dfs가 더쉽고 더편하네.....
const solution2 = (n,computers) => {
    const visited = computers.map(_=>false);
    const dfs = (i) => {
        visited[i] = true;
        for (let j=0;j<n;j++) {
            ///자 만약에 [j][i]라면 이둘은 연결된거쟈냐~ 헐 이렇게 추가해버린다고??? 대박 대박이네?
            /// 재귀의 꽃은 중단점인데 if 문자체가중단점
            if (computers[j][i] === 1 && !visited[j]) dfs[j];
        }
    }
    let count = 0;
    for (let i = 0; i<n;i++) {
        if(!visited[i]) { 
            dfs[i]
            count++;
        }
    }
    return count;
}


// bfs벼젼

const solution = (n, computers) => {
    const network = {}
    for (let y=0; y<n;y++) {
        for (let x=y; x<n;x++) {
            if (y===x) continue;
            if (computers[y][x] == 0) continue 
            network[y] ??= []
            network[y].push(x);
            network[x] ??= []
            network[x].push(y);
        }
        network[y] ??= [y]
    }
    
    const visited = computers.map( _ => false);
    return Object.keys(network).filter (e => {
        if (visited[e]) return false;
        visited[e] = true;
        const queue = [e]
        let queueIdx = 0
        while(queue.length > queueIdx) {
            const cur = queue[queueIdx++]
            for (const next of network[cur]) {
                if (visited[next]) continue;
                visited[next] = true
                queue.push(next)
            }
        }
        return true;
    }).length
}
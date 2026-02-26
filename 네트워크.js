// bfs버젼
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
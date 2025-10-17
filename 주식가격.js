/// 엥 fill(0)을 해야만 테스트케이스 3 번 문제 시간초과가 통과됨
const solution = (price) => {
    let answer = Array(price.length).fill(0)
    let tracked = price.reduce( (tracked, cur, idx) => {
        // 다시 생각해보니 while문 조건이 있기 때문에 이로직 필요없음 ㅇㅅㅇ
        // if (idx === 0) {
        //     tracked.push([cur, 0])
        //     return tracked
        // }
        while (tracked.length > 0 && tracked.at(-1)[0] > cur) {
            let popped = tracked.at(-1)
            answer[popped[1]] = idx - popped[1]
            tracked.pop()
        }
        tracked.push([cur,idx])
        return tracked
    }, [])
    tracked.forEach(e => { answer[e[1]] = price.length-1 - e[1] })
    return answer
}

console.log(solution([1, 2, 3, 1, 3]))
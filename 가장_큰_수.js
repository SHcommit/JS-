const comparer = (a,b) => (b+a) - (a+b)
function solution(numbers) {
    const sorted = [...numbers]
        .map( e=> String(e))
        .sort(comparer)
    if (sorted[0] === '0') return '0'
    return sorted.join('')
}

solution([6, 10, 2])
const typeChecker = ((누적, [_, type]) => 
    누적.set(type, (누적.get(type) || 0) + 1)
)
const reducer = (prev, count) => prev * (count + 1)

// Falsely 이게 좀 낯서네,,
// 이름, 종류
// Map.values() MapIterator 반환함
function solution(clothes) {
    return Array.from(
        clothes
        .reduce (typeChecker, new Map())
        .values() // MapIterator 반환
    ).reduce(reducer, 1) - 1   
}

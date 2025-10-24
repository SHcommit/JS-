// 엥 sort()하면 자동 정렬 안될 수 있음ㄷㄷ,,,,
// toSorted()는 환경따라 안될수있음 은근 최신형 문법이랭

function solution(people, limit) {
    let [lhs, rhs, ans] = [0, people.length-1, 0];
    let sorted = [...people].sort((a,b) => a-b)
    while (lhs <= rhs) {
        if (sorted[lhs] + sorted[rhs] <= limit) 
            lhs++
        rhs--
        ans++
    }    
    return ans
}


solution([70, 80, 50], 100)
function solution(s){
    return [...s].reduce(
        (acc, value) => { 
            acc += value === '(' ? 1 : -1
            if (acc === -1) return -100000
            return acc
        }, 0) === 0
}

function solution(s){
    return Array.from(s).reduce(
        (stack, value) => {
            if (stack.length === 0) {
                stack.push(value)
                return stack
            }
            let last = stack.at(-1)
            if (last == '(' && value == ')') {
                stack.pop()
            } else {
                stack.push(value)
            }

            return stack
        }, []).length == 0 
}
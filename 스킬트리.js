// [...cur].filter (v => { skillSet.has(v) })) // 아우 아무리해도 빈배열인데 무저건 반환해줘야함 swift랑 다름 swift는 단일 행이면 반환안해줘도되는데 ㅡ.ㅡ

function solution(skill, skill_trees) {
    let skillSet = new Set(skill)
    return skill_trees.reduce(((prev, _skill) => {
        let filtered = [..._skill].filter (v => skillSet.has(v) ).join('')
        if (filtered === skill) prev++ 
        else if (filtered.length < skill.length) { 
            prev += skill.substring(0, filtered.length) === filtered ? 1 : 0 
        }
        return prev
    }), 0)
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])
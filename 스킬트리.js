function solution(skill, skill_trees) {
    let skillSet = new Set(skill)
    return skill_trees.reduce(((prev, _skill) => {
        let filtered = [..._skill].filter (v => skillSet.has(v) ).join('') 
        prev += skill.substring(0, filtered.length) === filtered ? 1 : 0
        return prev
    }), 0)
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])
function solution(skill, skill_trees) {
    return skill_trees.reduce(((prev, _skill) => {
        let filtered = [..._skill].filter (v => skill.includes(v) ).join('') 
        prev += skill.substring(0, filtered.length) === filtered ? 1 : 0
        return prev
    }), 0)
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])
function solution(genres, plays) {
    const genreIdList = genres.reduce((acc, genre, idx) => {
        acc[genre] ??= {music:[], totalPlays:0}
        acc[genre].music.push({id:idx, play:plays[idx]})
        acc[genre].totalPlays+= plays[idx]
        
        return acc;
    }, {})
    
    let sorted = Object.values(genreIdList).sort((l,r) => r.totalPlays - l.totalPlays)
    
    const answer = []
    sorted.forEach((genre) => {
        let sortedMusics = genre.music.sort((lhs,rhs)=> {
            if (lhs.play===rhs.play) return lhs.id - rhs.id;
            return rhs.play - lhs.play
        })
        answer.push(...sortedMusics.slice(0,2).map(m=>m.id))
    })
    return answer;
}

function solution(genres, plays) {
    return Object.values(
        genres.reduce((acc, genre, idx) => {
            acc[genre] ??= {music:[], totalPlays:0}
            acc[genre].music.push({id:idx, play:plays[idx]})
            acc[genre].totalPlays+= plays[idx]
            return acc;
        }, {}))
        .sort((l,r) => r.totalPlays - l.totalPlays)
        .flatMap(genre => {
        return genre.music.sort((lhs,rhs) => {
                if (lhs.play===rhs.play) return lhs.id - rhs.id;
                return rhs.play-lhs.play
            }
        ).slice(0,2).map(m=>m.id)
    })
}
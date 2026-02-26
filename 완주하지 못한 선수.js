const solution = (players, compl) => {
    const _players = players.reduce((acc, cur)=> {
        acc[cur] ??= 0
        acc[cur]++;
        return acc;
    }, {})
    compl.forEach(e=> {
        _players[e]--;
    })
    return Object.keys(_players).find(e=> _players[e]>0 )
}
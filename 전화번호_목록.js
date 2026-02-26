// const solution = (list) => {
//     const sorted = [...list].sort()
//     for(let i =0;i<sorted.length-1;i++) {
//         if (sorted[i+1].startsWith(sorted[i])) return false;
//     }
//     return true;
// }

const solution = (l) =>
  ![...l].sort().some((e, i, seq) => seq[i + 1]?.startsWith(e));

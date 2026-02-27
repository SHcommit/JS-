function solution(n, times) {
    let l = 1;
    let r = Math.max(...times) *n;
    let ans = r;
    while(l<=r) {
        const mid = Math.floor((l+r)/2);
        let people = 0
        for (const time of times) {
            people+= Math.floor(mid/time);
        }
        if (people >= n) {
            r=mid-1;
            ans = mid;
        } else {
            l = mid+1;
        }
    }
    return ans;
}
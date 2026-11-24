const fn = (grid) => {
    const rows = grid.length
    const cols = grid[0].length
    const dist = Array.from({ length: rows }, () => new Array(cols).fill(-1))
    const que = []

    // every source starts at distance 0, all in the queue before the first pop
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === SOURCE) {
                dist[r][c] = 0
                que.push([r, c])
            }
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    for (let head = 0; head < que.length; head++) {
        const [r, c] = que[head]
        // TODO: logic
        for (const [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc
            // TODO: skip cells that can't be entered
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1
                que.push([nr, nc])
            }
        }
    }

    return dist
}

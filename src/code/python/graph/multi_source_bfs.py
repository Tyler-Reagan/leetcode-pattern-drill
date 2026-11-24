from collections import deque


def fn(grid):
    rows, cols = len(grid), len(grid[0])
    que = deque()
    dist = [[-1] * cols for _ in range(rows)]

    # every source starts at distance 0, all in the queue before the first pop
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == SOURCE:
                dist[r][c] = 0
                que.append((r, c))

    while que:
        r, c = que.popleft()
        # TODO: logic
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            # TODO: skip cells that can't be entered
            if 0 <= nr < rows and 0 <= nc < cols and dist[nr][nc] == -1:
                dist[nr][nc] = dist[r][c] + 1
                que.append((nr, nc))

    return dist

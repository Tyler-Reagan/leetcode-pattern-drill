import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;


public int[][] fn(int[][] grid) {
    int rows = grid.length;
    int cols = grid[0].length;
    int[][] dist = new int[rows][cols];
    Queue<int[]> que = new LinkedList<>();
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    // every source starts at distance 0, all in the queue before the first pop
    for (int r = 0; r < rows; r++) {
        Arrays.fill(dist[r], -1);
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == SOURCE) {
                dist[r][c] = 0;
                que.offer(new int[]{r, c});
            }
        }
    }

    while (!que.isEmpty()) {
        int[] cell = que.remove();
        int r = cell[0];
        int c = cell[1];
        // TODO: Logic
        for (int[] d: directions) {
            int nr = r + d[0];
            int nc = c + d[1];
            // TODO: skip cells that can't be entered
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && dist[nr][nc] == -1) {
                dist[nr][nc] = dist[r][c] + 1;
                que.offer(new int[]{nr, nc});
            }
        }
    }

    return dist;
}

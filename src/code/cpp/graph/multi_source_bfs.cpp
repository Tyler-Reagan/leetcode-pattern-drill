#include <queue>
#include <utility>
#include <vector>

using namespace std;


vector<vector<int>> fn(vector<vector<int>>& grid) {
    int rows = grid.size();
    int cols = grid[0].size();
    vector<vector<int>> dist(rows, vector<int>(cols, -1));
    queue<pair<int, int>> que;
    int directions[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    // every source starts at distance 0, all in the queue before the first pop
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == SOURCE) {
                dist[r][c] = 0;
                que.push({r, c});
            }
        }
    }

    while (!que.empty()) {
        auto [r, c] = que.front();
        que.pop();
        // TODO: logic
        for (auto& d: directions) {
            int nr = r + d[0];
            int nc = c + d[1];
            // TODO: skip cells that can't be entered
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && dist[nr][nc] == -1) {
                dist[nr][nc] = dist[r][c] + 1;
                que.push({nr, nc});
            }
        }
    }

    return dist;
}

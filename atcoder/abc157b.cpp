#include <iostream>
#define CELL 3
using namespace std;

int main()
{
    int bingoCard[CELL][CELL];
    int row_agg[CELL] = {0}, col_agg[CELL] = {0}, slant_agg[2] = {0};
    int N;
    for (int i = 0; i < CELL; i++)
    {
        for (int j = 0; j < CELL; j++)
        {
            cin >> bingoCard[i][j];
        }
    }
    cin >> N;
    int b[N];
    for (int n = 0; n < N; n++)
    {
        cin >> b[n];
        // check bingo
        for (int i = 0; i < CELL; i++)
        {
            for (int j = 0; j < CELL; j++)
            {
                if (bingoCard[i][j] == b[n])
                {
                    row_agg[i]++;
                    col_agg[j]++;
                    if (i == j)
                    {
                        slant_agg[0]++;
                    }
                    if ((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0))
                    {
                        slant_agg[1]++;
                    }
                }
            }
        }
    }
    for (int i = 0; i < CELL; i++)
    {
        if (row_agg[i] == CELL || col_agg[i] == CELL)
        {
            cout << "Yes" << endl;
            return 0;
        }
    }
    if (slant_agg[0] == CELL || slant_agg[1] == CELL)
    {
        cout << "Yes" << endl;
        return 0;
    }
    cout << "No" << endl;
    return 0;
}

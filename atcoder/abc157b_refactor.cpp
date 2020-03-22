/*
abc157bのリファクタ版

変更点
・row_agg, col_agg, slant_aggで行、列、斜めごとに集計していたビンゴ判定をif文へ変更
*/

#include <iostream>
#define CELL 3
using namespace std;

int main()
{
    int bingoCard[CELL][CELL];
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
                    bingoCard[i][j] = 0;
                }
            }
        }
    }
    bool bingo = false;
    for (int i = 0; i < CELL; i++)
    {
        if ((bingoCard[i][0] == 0 && bingoCard[i][1] == 0 && bingoCard[i][2] == 0) ||
            (bingoCard[0][i] == 0 && bingoCard[1][i] == 0 && bingoCard[2][i] == 0))
        {
            bingo = true;
        }
    }
    if ((bingoCard[0][0] == 0 && bingoCard[1][1] == 0 && bingoCard[2][2] == 0) ||
        (bingoCard[0][2] == 0 && bingoCard[1][1] == 0 && bingoCard[2][0] == 0))
    {
        bingo = true;
    }
    if (bingo)
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }
    return 0;
}

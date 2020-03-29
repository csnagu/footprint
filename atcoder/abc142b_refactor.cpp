#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int N, K;
    cin >> N >> K;
    int h[N];
    int passNum = 0;
    for (int i = 0; i < N; i++)
    {
        cin >> h[i];
        if (h[i] >= K)
            passNum++;
    }
    cout << passNum << endl;
    return 0;
}

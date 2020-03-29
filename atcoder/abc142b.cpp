#include <iostream>
using namespace std;

int main()
{
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

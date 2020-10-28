#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    // つけてみたver
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int N;
    float K;
    cin >> N >> K;
    int A[N];
    for (int i = 0; i < N; i++)
        cin >> A[i];

    int res = 1;
    if (N != K)
    {
        res += ceil((N - K) / (K - 1.0));
    }
    cout << res << endl;
    return 0;
}

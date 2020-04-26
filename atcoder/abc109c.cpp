#include <iostream>
#include <algorithm>
using namespace std;

long long gcd(long long a, long long b)
{
    if (b == 0)
        return a;
    if (b > 0)
        return gcd(b, a % b);
}

int main()
{
    // つけてみたver
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    long long N, X;
    cin >> N >> X;
    long long x[N + 1];
    for (int i = 0; i < N; i++)
    {
        cin >> x[i];
    }
    x[N] = X;
    sort(x, x + N + 1); // 昇順にソート

    long long diff[N];
    for (int i = 1; i <= N; i++)
    {
        diff[i - 1] = x[i] - x[i - 1];
    }
    long long res = 0;
    for (int i = 0; i < N; i++)
    {
        res = gcd(res, diff[i]);
    }
    cout << res << endl;
    return 0;
}

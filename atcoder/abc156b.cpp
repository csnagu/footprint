#include <iostream>
using namespace std;

int main()
{
    long N, K;
    cin >> N >> K;
    int ans = 0;
    for (int i = N; i > 0; i /= K)
    {
        ans++;
    }
    cout << ans << endl;
    return 0;
}

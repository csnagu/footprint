#include <iostream>
#include <string>
using namespace std;

int main()
{
    int N;
    string S;
    cin >> N >> S;
    int ans = 0;
    for (int i = 0; i < N; i++)
    {
        if (S[i] == 'A' && N - i >= 3)
        {
            if (S[i + 1] == 'B' && S[i + 2] == 'C')
                ans++;
        }
    }
    cout << ans << endl;
    return 0;
}

#include <iostream>
using namespace std;

int main()
{
    string S;
    cin >> S;
    int len = S.length();
    int ans = 0;
    for (int i = 0; i < len; i++)
    {
        if (S[i] != S[len - 1 - i])
            ans++;
    }
    cout << ans / 2 << endl;
    return 0;
}

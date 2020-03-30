#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    string S;
    cin >> S;
    string ans = "Yes";
    for (int i = 0; i < S.length(); i++)
    {
        if (S[i] == 'U' || S[i] == 'D')
        {
        }
        else if (((i + 1) % 2 == 1 && S[i] != 'R') || ((i + 1) % 2 == 0 && S[i] != 'L'))
        {
            ans = "No";
            break;
        }
    }
    cout << ans << endl;
    return 0;
}

#include <iostream>
using namespace std;

int main()
{
    int N;
    string S, ans = "";
    cin >> N >> S;
    for (int i = 0; i < S.length(); i++)
    {
        char transformed = S[i] + N;
        while (transformed > 90)
            transformed -= 26;
        ans.push_back(transformed);
    }
    cout << ans << endl;
    return 0;
}

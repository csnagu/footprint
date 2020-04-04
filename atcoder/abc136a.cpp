#include <iostream>
using namespace std;

int main()
{
    int A, B, C;
    cin >> A >> B >> C;
    A -= B;
    int ans = C - A;
    if (ans <= 0)
        ans = 0;
    cout << ans << endl;
    return 0;
}

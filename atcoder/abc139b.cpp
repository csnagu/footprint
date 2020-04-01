#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int A, B;
    cin >> A >> B;
    int ans = ceil((B - A) / float(A - 1)) + 1;
    cout << ans << endl;
    return 0;
}

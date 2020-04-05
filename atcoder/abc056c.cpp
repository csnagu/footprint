#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    long long X;
    cin >> X;
    int pos = 0;
    int i;
    for (i = 0; pos < X; i++)
        pos += i;

    cout << --i << endl;

    return 0;
}

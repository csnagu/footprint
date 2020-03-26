#include <iostream>
using namespace std;

int main()
{
    int A, B, max = 0;
    cin >> A >> B;
    max = A + B;
    if (A - B > max)
        max = A - B;
    if (A * B > max)
        max = A * B;
    cout << max << endl;
    return 0;
}

#include <iostream>
using namespace std;

int main()
{
    long long A, B, K;
    cin >> A >> B >> K;
    long long diff = A - K;
    A -= K;
    if (diff < 0)
    {
        A = 0;
        diff *= -1;
        B -= diff;
        if (B < 0)
            B = 0;
    }
    cout << A << " " << B << endl;
    return 0;
}

#include <iostream>
using namespace std;

int main()
{
    string S, T, U;
    int A, B;
    cin >> S >> T;
    cin >> A >> B;
    cin >> U;

    if (U == S)
    {
        A--;
    }
    else
    {
        B--;
    }
    cout << A << " " << B << endl;
    return 0;
}

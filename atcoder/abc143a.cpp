#include <iostream>
using namespace std;

int main()
{
    int A, B;
    cin >> A >> B;
    int diff = A - 2 * B;
    if (diff < 0)
    {
        cout << 0 << endl;
    }
    else
    {
        cout << A - 2 * B << endl;
    }
    return 0;
}

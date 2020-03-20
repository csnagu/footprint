#include <iostream>
using namespace std;

int main()
{
    int A[3];
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        cin >> A[i];
        sum += A[i];
    }
    if (sum >= 22)
    {
        cout << "bust" << endl;
    }
    else
    {
        cout << "win" << endl;
    }
    return 0;
}

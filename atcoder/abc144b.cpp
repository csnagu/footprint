#include <iostream>
using namespace std;

int main()
{
    int N;
    cin >> N;
    if (N > 81)
    {
        cout << "No" << endl;
        return 0;
    }
    for (int i = 1; i <= 9; i++)
    {
        if (N % i == 0 && N / i <= 9)
        {
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
    return 0;
}

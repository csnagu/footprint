#include <iostream>
using namespace std;

int main()
{
    int N;
    string S;
    cin >> N >> S;
    if (N % 2 == 1)
    {
        cout << "No" << endl;
        return 0;
    }
    for (int i = 0; i < N / 2; i++)
    {
        if (S[i] != S[i + N / 2])
        {
            cout << "No" << endl;
            return 0;
        }
    }
    cout << "Yes" << endl;
    return 0;
}

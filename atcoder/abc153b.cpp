#include <iostream>
using namespace std;

int main()
{
    long H;
    int N;
    cin >> H >> N;
    int A[N];
    for (int i = 0; i < N; i++)
    {
        cin >> A[i];
        H -= A[i];
        if (H <= 0)
        {
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
    return 0;
}

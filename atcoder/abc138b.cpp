#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    int A[N];
    double sum = 0;
    for (int i = 0; i < N; i++)
    {
        cin >> A[N];
        sum += 1.0 / A[N];
    }
    cout << 1 / sum << endl;
    return 0;
}

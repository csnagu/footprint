#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    int A[N], B[N], C[N - 1];
    for (int i = 0; i < N; i++)
        cin >> A[i];
    for (int i = 0; i < N; i++)
        cin >> B[i];
    for (int i = 0; i < N - 1; i++)
        cin >> C[i];

    int sum = 0;
    for (int i = 0; i < N; i++)
    {
        sum += B[A[i] - 1];
        if (i > 0 && A[i] - A[i - 1] == 1)
            sum += C[A[i - 1] - 1];
    }
    cout << sum << endl;
    return 0;
}

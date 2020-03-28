#include <iostream>
#include <string>
using namespace std;

int main()
{
    int N, K, M;
    cin >> N >> K >> M;
    int A[N];
    int sum = 0;
    for (int i = 0; i < N - 1; i++)
    {
        cin >> A[i];
        sum += A[i];
    }
    int objective = M * N;
    int diff = objective - sum;
    if (diff > K)
    {
        cout << -1 << endl;
    }
    else if (diff <= 0)
    {
        cout << 0 << endl;
    }
    else
    {
        cout << diff << endl;
    }
    return 0;
}

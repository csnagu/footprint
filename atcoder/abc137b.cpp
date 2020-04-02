#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int K, X;
    cin >> K >> X;
    K--;
    for (int i = X - K; i <= X + K; i++)
    {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}

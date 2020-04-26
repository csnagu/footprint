#include <iostream>
using namespace std;

int digNum(int n)
{
    int digit = 1;
    for (;;)
    {
        if (n / 10 >= 1)
            digit++;
        else
            return digit;
        n /= 10;
    }
}

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    unsigned int N;
    cin >> N;
    int ans = 0;

    for (int i = 0; i <= N; i++)
    {
        if (digNum(i) % 2 == 1)
            ans++;
    }
    cout << --ans << endl;
    return 0;
}

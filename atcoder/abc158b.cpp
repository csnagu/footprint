#include <iostream>
using namespace std;

int main()
{
    long N, A, B;
    cin >> N >> A >> B;

    long blueAndRedNum = N / (A + B);
    long diff = N - blueAndRedNum * (A + B);

    long res = blueAndRedNum * A;
    res += min(diff, A);
    cout << res << endl;

    return 0;
}

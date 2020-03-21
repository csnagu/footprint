#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int N;
    cin >> N;
    float oddNum = ceil(N / 2.0);
    cout << oddNum / N << endl;
    return 0;
}

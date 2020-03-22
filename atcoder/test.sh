#!/usr/local/bin/zsh

# atcoderのテストスクリプト
# 使い方: $ ./test.sh CPP_FILE TESTCASE_DIR
# 例: $ ./test.sh abc001a.cpp ~/atcoder/testcase/abc001a_testcase/
readonly CPP_FILE=$1
readonly TESTCASE_DIR=$2

# 引数チェック
if [ $# != 2 ]; then
    echo "引数の数が間違っています！"
    exit 1
fi

# .cppファイルのコンパイル
if ! g++ $CPP_FILE; then
    echo -e "\e[31mCompile Error\e[m"
    exit 1;
fi

#
for case in $(find $TESTCASE_DIR/in -name '0*');
do
    res=`./a.out < $case`
    ans=`echo $case | sed -e 's/in/out/' | xargs cat`
    if test $res = $ans; then
        echo -e "\e[32mOK\e[m"
    else
        echo -e "\e[31mNG\e[m\ttestcase \"$case\" is failed"
        echo "testcase is ..."
        cat $case
        echo "\nYour result is ..."
        echo $res "\n"
        echo "Answer is ..."
        echo $ans
        exit 0
    fi
done

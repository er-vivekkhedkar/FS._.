#include <stdio.h>

void fun()
{
    static int a; //  by default when value not given in static use 0 so op is a=0

    static int b = 10; // at 2nd time it skip never count
    ++b; // 11 , 11+1 , 12+1 like this not like auto reitialise the variable 
    printf("a = %d , b = %d ", a, b);
}

void main()
{
    fun(); // a=0 , b = 11
    fun(); // a=0 , b=12
    fun();// a=0 , b=13
}
// scope of static is till end the program 
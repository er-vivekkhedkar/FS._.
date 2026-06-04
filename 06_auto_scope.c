#include<stdio.h>

int fun(){
    int a =10 ;
    ++a;
    printf("a = %d \n",a);

    return a;
}

void main() 
{
    auto int num = 12 ;
    auto int a; // it will return a garbage value when we not assign any value
    printf("%d %d \n",num,a);


    fun();
    fun();
    fun(); // when one time value is used that discard and reassign the value op-11
    



}

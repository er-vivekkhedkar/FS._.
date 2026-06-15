#include<stdio.h>

// pointer is a vaariable which store the address of another varibles which is present in memory 
// & - Address of operator . * - Dereference of opertor - use to get the content inside the address stored 
int main(){
    int a = 12;
    int *ptr ;
    ptr = &a ;
    printf("%p \n",ptr); // Address of A = 0x7ffc636c044c 
    printf("%d \n",*ptr); // content of A = 12

    return 0;

}
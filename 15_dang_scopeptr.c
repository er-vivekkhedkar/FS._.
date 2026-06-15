#include<stdio.h>

void main(){
    int a =   12 ;
    int *ptr = NULL;
  printf("%p \n",&a) ; // Address of A = 0x7ffc4f8c17e8 
    {
        int b = 32 ;
        printf("%p \n",&b) ; //  Address of B = 0x7ffc4f8c17ec 
        ptr = &b ;
        printf("%p \n", ptr); // Store address of B in Ptr = 0x7ffc4f8c17ec 

    }

    printf("%p \n",ptr); //  outside also accessible = 0x7ffc4f8c17ec 
    printf("%d \n",*ptr); // now it gives ans = 32 , b is not in this scope still it giving answer from outoff scope that called dangling pointer 
}
#include<stdio.h>

// Dangling Pointer - It points to the unallocated memory or out of scope 
int *ptrs(void){
    int b = 120;
    return &b;
}

void main(){
    int a = 12; 
    int *ptr = NULL;

    printf("%p \n",&a); // Address of A = 0x7ffcb11d7bcc 

    ptr = ptrs();
    printf("%p \n",ptr);  // Address  store in ptr is = (nil) 
    printf("%p \n",&ptr); //  Adress of ptr = (0x7ffcb11d7bd0 )
    printf("%p \n",*ptr); // op - Segmentation fault (core dumped)- when we accessing  the content of (add -0x7ffcb11d7bd0 ) which is not actually present in memory so we got seg fault.
    // because we are trying to access a unallocated memory thats called dangling pointer.

}
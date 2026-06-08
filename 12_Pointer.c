#include<stdio.h>

void main(){
    int x = 10 ;
    int *y = &x;

    printf("x  = %d \n",x);
    printf("x address = %u \n",&x);
    printf("y = %u \n",y); // shows the x addressed store in it 
    printf("y adresss = %u \n",&y); // shows address of  y =3484450048 
    printf("y inside value = %u \n",*y); // access value by a * = 10 
    // %u is used to display a address - address always positive  - also %d work as well
  
}
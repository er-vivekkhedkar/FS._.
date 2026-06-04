#include <stdio.h>>

void main()
{
    // this is a globel variable can acccess from anywhere 
    int a = 10, b = 20; // no need to write auto storage classs everytime it comes default as well when not write
    {
        int a = 12, b = 22, c = 30;
        {
            int a = 14, b = 24, c = 32, d = 40;

            printf("a= %d , b= %d , c = %d , d = %d \n", a, b, c, d); // it will take recent value from the local variaable 
        }
        printf("a= %d , b= %d , c = %d \n", a, b, c);
    }
    printf("a= %d , b= %d  \n", a, b);
}
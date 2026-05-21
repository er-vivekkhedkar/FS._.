#include <stdio.h>

main()
{
    int n = 12;
    float s = (float)n ;
printf("%d \n %f \n", n , s);

int a =10 , b = 3 ;

// float c  = (float)a/b;
// printf("%f",c); // 3.3333

// float c  = (float) (a/b);
// printf("%f",c); // 3.000000
float c  = a/b;
printf("%f",c); // 3.000000
}
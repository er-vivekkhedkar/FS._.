#include<stdio.h>
main () {
    printf("Increment & Decremnet");
    int a = 5 ;
    int n , m ;
    printf("\n a= %d, n = %d , m = %d \n", a ,n,m);
    n = ++a; 
    // pre inc
    m = a++; 
    // post inc
    n--;  
    // post dec
    --m; 
     // pre dec
    n= n-m;
    printf("n=%d , m = %d , a = %d \n",n,m,a);


    // semicolon operator ;
    int c,d;
    c = (2,3,4);
    d = 2,3,4 ;

    printf("\n c = %d ,\n d= %d \n", c,d);

    // size of operator its not a function tell aboute the - no. of bytes required to stored
    int z ;
    printf("%d \n",sizeof(z));
    printf("%d \n",sizeof(int));
    printf("%d \n",sizeof(5));
    printf("%d \n" ,sizeof(float));
    printf("%d \n",sizeof(char));
    printf("%d \n",sizeof(short int));
    printf("%d \n",sizeof(double));
    printf("%d \n",sizeof(long double));



    // ternary operator - also called short hand 
    int x , y , max;
    printf("Enter X and Y VAlue :\n" );
    scanf(" %d %d ",&x , &y);
    max = x > y ? x : y ;

    printf("Ans : %d", max);

      max = x > y ? (x=2 ? x : y) : y ;


 printf("\nAns : %d\n", max);


    return 0;




}
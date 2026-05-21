#include<stdio.h>

main () {
    int a = 12 , b = 34 ;
    if(a < b ) 
    {
        printf("A is Less than B %d \n " , b);

    }
    else
    {
        printf("A is Greather than b \n");
    }


    if(a == b ){
        printf("A == B \n");
    }
    else if(a > b){
        printf(" A > B");
    }
    else {
        printf("A < B \n");
    }
}
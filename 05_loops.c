#include<stdio.h>
main (){
    int a = 0 ;
    while (a <= 5)
    {
        printf("\n %d",a);
        a ++;
    }
      printf("\n %d\n",a);


     int b = 4 ;
     do{
        printf("%d Atleast ones \n", b);
        b++;
     }while (b==4);


     for (int i=1 ; i < 5; i++)
     {
        printf("%d \n",i);
        i++;

     }

     // Beak and continue

   int c = 1;

    while (c <= 10) {

        // print c
        printf("%d\n", c);

        // for loop
        for (int i = 0; i < 10; i++) {

            if (i == 4) {
                break;
            }

            printf("hi %d\t", i);
        }

        // move to next line
        printf("\n");

        // increase c
        c++;

        // skip printing when c becomes 6
        if (c == 6) {
            continue;
        }

        // print updated c
        printf("Updated c = %d\n\n", c);
    }

    return 0;


     

    
}
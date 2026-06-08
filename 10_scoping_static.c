#include <stdio.h>

int x ;// Global x used ONLY by P()

void P(int n) {
    x = (n + 2) / (n - 3); // Modifies the GLOBAL x to 6
}

void q() {
    int x = 3; // Local x inside q()
    int y = 4;
    P(y); 
    printf(" x = %d \n", x); // Prints local x -> Outputs 3
}

void main() {
     x = 7; // Local x inside main()
    int y = 8;
    q();
    printf(" x = %d \n", x); // Prints local x -> Outputs 7
}

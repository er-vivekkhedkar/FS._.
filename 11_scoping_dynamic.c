#include <stdio.h>

// P now accepts a pointer to mimic dynamic binding to the caller's environment
void P(int n, int *caller_x) {
    *caller_x = (n + 2) / (n - 3); // Directly overwrites q's local x to 6
}

void q() {
    int x = 3; 
    int y = 4;
    P(y, &x); // Passes its own local environment to P
    printf(" x = %d \n", x); // Prints its altered x -> Outputs 6
}

void main() {
    int x = 7; 
    int y = 8;
    q();
    printf(" x = %d \n", x); // main's x is untouched -> Outputs 7
}

#include <stdio.h>

int main() { 
    int arr[5] = {3, 4, 7, 5, 8}; 
    int target = 5; 
    int found = 0; // Flag tracker: 0 means not found, 1 means found

    // Loop shifts through index 0 up to 4
    for (int i = 0; i < 5; i++) { 
        if (arr[i] == target) { 
            printf("\nMatch found at index %d (Value: %d)\n", i, arr[i]); 
            found = 1; // Mark as found
            break;     // Stop searching since we found it
        } 
    }

    // Check flag after scanning the entire array
    if (found == 0) {
        printf("Not present\n");
    }

    return 0;
}

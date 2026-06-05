#include<stdio.h>

int f(int n){
    static int i = 1 ; // this skip ony use one time 
    if(n>=5){  // n is 1  , n is 2 , n is 4 
        return n; // 7 return n 
    }
    n = n+i; // n=1+1=2 , 2+2=4 , 4+3 = 7
    i++; // 2 , 3 , 4
    return f(n); // 2  , 4 , 7
}
void main(){
  int i =  f(1);
  printf("%d \n",i); // ans is 7 
}


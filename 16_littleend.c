#include<stdio.h>
// Little Endian = Storage technique = how the data is store into adreesss an memory location 
// LSB => LA , MSB = > HA 
int main(){
    short int a = 321 , b ;
    char cha = 'a',chb;

    b = cha;
    printf(" %d \n",b); // 97 answer 

    chb= (char)a;
    printf("%c \n",chb); // A 

    return 0;

}
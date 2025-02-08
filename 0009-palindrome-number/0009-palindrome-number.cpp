class Solution {
public:
    bool isPalindrome(int x) {
        long  org = x;
         if (x < 0) return false;
        long  Rx = 0;
        while(x>0){
            Rx = Rx*10 + x % 10;
             x = x / 10;
        }
        return Rx==org;
    }
};
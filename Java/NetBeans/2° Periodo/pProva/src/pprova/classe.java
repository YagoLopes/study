/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pprova;

/**
 *
 * @author Yago Lopes Lazaro
 */
public class classe {
    
    
public  int calc(int a) {

        int s = 0;  

        if (!(a < 0 || a % 2 == 0)) {

            for(int i = 1; i <= 3; i++) {

                s += i * 3;     

            }  

        }   else  {

            while(a > 5) { 

                s += a / 2;      

                a--;    

            }  

        }  

        return s;

    }
    
    
}

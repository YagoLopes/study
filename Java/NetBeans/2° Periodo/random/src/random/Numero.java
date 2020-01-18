/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package numero;
import java.util.Random;

/**
 *
 * @author Yago Lopes Lazaro
 */
public class Numero {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        Random  r =   (new Random());
        System.out.printf("O numero e %d",r.nexInt(10) );
    }
 
    
}

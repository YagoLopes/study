/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicio1;
import java.util.Scanner;
/**
 *
 * @author Yago Lopes Lazaro
 */
public class Exercicio1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Escada c = new Escada();
        Scanner ler = new Scanner(System.in);
        System.out.println("Digite a quantidade para o primeiro andar!!");
        c.A11=ler.nextInt();
        System.out.println("Digite a quantidade para o segundo andar!!");
        c.A22 = ler.nextInt();
         System.out.println("Digite a quantidade para o terceiro andar!!");
        c.A33 = ler.nextInt();
        System.out.printf("%d \n",c.sobeEscada());
        
        
        
    }
    
}

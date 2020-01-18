/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pbondinho;

import java.util.Scanner;

/**
 *
 * @author Yago Lopes Lazaro
 */
public class PBondinho {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic 
         Scanner c =new Scanner (System.in);
         System.out.println("Digite o valor da capacidade!");
     int a =c.nextInt();
       System.out.println("Digite o valor de alunos !");
      int b= c.nextInt();
        int saida=(a/(b-1));
       
        System.out.format("O resultado e : %d \n",saida);
    }
   
    
}

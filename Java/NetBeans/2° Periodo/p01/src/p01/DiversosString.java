/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package p01;

/**
 *
 * @author Yago Lopes Lazaro
 */
public class DiversosString {
    String palavra;
    
    
    public int  countChars(String p1){
        
        return p1.length();
    }
    public String somenteMaiusculo(String P){
        return P.toUpperCase(); 
    }
       private static int countVogais(String texto){
        int contarVogais = 0;
        for (int i = 0; i < texto.length(); i++){
            char c = texto.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                contarVogais++;
        }
        return contarVogais;
    }
       
}

package exercicio1;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Yago Lopes Lazaro
 */
public class Escada {
int A11;
   int A22;
   int A33;

    public int sobeEscada() {
        int A1= A11;
       int  A2= A22;
        int A3 = A33;
        int i = 0;
        int r = 0;
        int menor;
        if (i == 0) {
            r = (A2 * 2) + (A3 * 4);
        }
        i++;
        menor = r;
        if (i == 1) {
            r = (A1 * 2) + (A3 * 2);
        }
        i++;
        if (r < menor) {
            menor = r;
        }
        if (i == 2) {
            r = (A1 * 4) + (A2 * 2);
        }
        if (r < menor) {
            menor = r;
        }
     
return menor;
    }

}



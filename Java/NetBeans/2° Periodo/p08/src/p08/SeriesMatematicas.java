/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package p08;

import static java.lang.Math.pow;

/**
 *
 * @author Yago Lopes Lazaro
 */
public class SeriesMatematicas {
    int x;
    int y;
    public int elevadoA(){
       int resultado =  (int) pow(x,y);
       return resultado;
    }
    
}

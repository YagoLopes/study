/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package p07;

/**
 *
 * @author Yago Lopes Lazaro
 */
public class ConversaoDeUnidadesDeTemperatura {
    double c;
    public void calculaTmp(){
        double F = (9 * c/5) + 32;
         double K = c + 273.15;
         double Re = c * 4/5;
        System.out.println("Fahrenheit (F):"+ F);
        System.out.println("Kelvin (K):"+ K);
        System.out.println("Réaumur (Re):" + Re);
    }
    
}

package entidades;
// Generated 26/11/2018 11:29:02 by Hibernate Tools 4.3.1



/**
 * Especialidades generated by hbm2java
 */
public class Especialidades  implements java.io.Serializable {


     private Integer id;
     private String descricao;

    public Especialidades() {
    }

    public Especialidades(String descricao) {
       this.descricao = descricao;
    }
   
    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    public String getDescricao() {
        return this.descricao;
    }
    
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }




}



package com.ucscww.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by wei on 16/03/2018.
 */

@Data
@AllArgsConstructor
@Embeddable
public class Mar {

//    @Column(insertable=false, updatable=false)
    private String miss;
//    @Column(insertable=false, updatable=false)
    private String access;
//    @Column(insertable=false, updatable=false)
    private String ratio;

    public Mar () {}
}

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
public class L2Cache {

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="rd000miss") ),
            @AttributeOverride(name="access", column = @Column(name="rd000access") ),
            @AttributeOverride(name="ratio", column = @Column(name="rd000ratio") )
    } )
    private Mar rd000;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="wr000miss") ),
            @AttributeOverride(name="access", column = @Column(name="wr000access") ),
            @AttributeOverride(name="ratio", column = @Column(name="wr000ratio") )
    } )
    private Mar wr000;


    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="rd001miss") ),
            @AttributeOverride(name="access", column = @Column(name="rd001access") ),
            @AttributeOverride(name="ratio", column = @Column(name="rd001ratio") )
    } )
    private Mar rd001;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="wr001miss") ),
            @AttributeOverride(name="access", column = @Column(name="wr001access") ),
            @AttributeOverride(name="ratio", column = @Column(name="wr001ratio") )
    } )
    private Mar wr001;

    public L2Cache() {

    }
}

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
public class L1Cache {

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="lird000miss") ),
            @AttributeOverride(name="access", column = @Column(name="ird000access") ),
            @AttributeOverride(name="ratio", column = @Column(name="ird000ratio") )
    } )
    private Mar ird000;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="ird001miss") ),
            @AttributeOverride(name="access", column = @Column(name="ird001access") ),
            @AttributeOverride(name="ratio", column = @Column(name="ird001ratio") )
    } )
    private Mar ird001;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="ird002miss") ),
            @AttributeOverride(name="access", column = @Column(name="ird002access") ),
            @AttributeOverride(name="ratio", column = @Column(name="ird002ratio") )
    } )
    private Mar ird002;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="ird003miss") ),
            @AttributeOverride(name="access", column = @Column(name="ird003access") ),
            @AttributeOverride(name="ratio", column = @Column(name="ird003ratio") )
    } )
    private Mar ird003;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="ird004miss") ),
            @AttributeOverride(name="access", column = @Column(name="ird004access") ),
            @AttributeOverride(name="ratio", column = @Column(name="ird004ratio") )
    } )
    private Mar ird004;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="ird005miss") ),
            @AttributeOverride(name="access", column = @Column(name="ird005access") ),
            @AttributeOverride(name="ratio", column = @Column(name="ird005ratio") )
    } )
    private Mar ird005;


    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="drd000miss") ),
            @AttributeOverride(name="access", column = @Column(name="drd000access") ),
            @AttributeOverride(name="ratio", column = @Column(name="drd000ratio") )
    } )
    private Mar drd000;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="dwr000miss") ),
            @AttributeOverride(name="access", column = @Column(name="dwr000access") ),
            @AttributeOverride(name="ratio", column = @Column(name="dwr000ratio") )
    } )
    private Mar dwr000;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="drd001miss") ),
            @AttributeOverride(name="access", column = @Column(name="drd001access") ),
            @AttributeOverride(name="ratio", column = @Column(name="drd001ratio") )
    } )
    private Mar drd001;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="dwr001miss") ),
            @AttributeOverride(name="access", column = @Column(name="dwr001access") ),
            @AttributeOverride(name="ratio", column = @Column(name="dwr001ratio") )
    } )
    private Mar dwr001;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="drd002miss") ),
            @AttributeOverride(name="access", column = @Column(name="drd002access") ),
            @AttributeOverride(name="ratio", column = @Column(name="drd002ratio") )
    } )
    private Mar drd002;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="dwr002miss") ),
            @AttributeOverride(name="access", column = @Column(name="dwr002access") ),
            @AttributeOverride(name="ratio", column = @Column(name="dwr002ratio") )
    } )
    private Mar dwr002;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="drd003miss") ),
            @AttributeOverride(name="access", column = @Column(name="drd003access") ),
            @AttributeOverride(name="ratio", column = @Column(name="drd003ratio") )
    } )
    private Mar drd003;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="dwr003miss") ),
            @AttributeOverride(name="access", column = @Column(name="dwr003access") ),
            @AttributeOverride(name="ratio", column = @Column(name="dwr003ratio") )
    } )
    private Mar dwr003;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="drd004miss") ),
            @AttributeOverride(name="access", column = @Column(name="drd004access") ),
            @AttributeOverride(name="ratio", column = @Column(name="drd004ratio") )
    } )
    private Mar drd004;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="dwr004miss") ),
            @AttributeOverride(name="access", column = @Column(name="dwr004access") ),
            @AttributeOverride(name="ratio", column = @Column(name="dwr004ratio") )
    } )
    private Mar dwr004;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="drd005miss") ),
            @AttributeOverride(name="access", column = @Column(name="drd005access") ),
            @AttributeOverride(name="ratio", column = @Column(name="drd005ratio") )
    } )
    private Mar drd005;

    @Embedded
    @AttributeOverrides( {
            @AttributeOverride(name="miss", column = @Column(name="dwr005miss") ),
            @AttributeOverride(name="access", column = @Column(name="dwr005access") ),
            @AttributeOverride(name="ratio", column = @Column(name="dwr005ratio") )
    } )
    private Mar dwr005;


    public L1Cache(){}
}

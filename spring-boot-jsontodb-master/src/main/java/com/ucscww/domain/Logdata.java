package com.ucscww.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by wei on 13/03/2018.
 */
@Data
@AllArgsConstructor
@Entity
public class Logdata {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    private Long id;
    private String IPC;
    private String totalNumberOfFetchedInstructions;
    private String evenBecameEmptyAtCycle;

    @Embedded
    private ThreadFet threadFetchedInstructions;

    @Embedded
    private L2Cache l2Cache;

    @Embedded
    private L1Cache l1Cache;

    public Logdata() {

    }
}

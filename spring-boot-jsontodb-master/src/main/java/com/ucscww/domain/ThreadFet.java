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
public class ThreadFet {
    private String th0;
    private String th1;
    private String th2;
    private String th3;
    private String th4;
    private String th5;

    public ThreadFet() {}
}

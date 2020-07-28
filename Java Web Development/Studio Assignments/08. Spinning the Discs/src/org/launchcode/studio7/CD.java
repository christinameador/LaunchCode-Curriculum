package org.launchcode.studio7;

import java.util.ArrayList;

public class CD extends BaseDisc implements OpticalDisc{
    public CD(String title, String capacity, ArrayList<String> contents) {
        super(title, capacity, contents);
    }

    public CD(String title) {
        super(title);
    }

    @Override
    public void spinDisc() {
        System.out.println("Disk is spinning!");
    }

    @Override
    public void storeData() {
        System.out.println("Data can be stored!");
    }

}

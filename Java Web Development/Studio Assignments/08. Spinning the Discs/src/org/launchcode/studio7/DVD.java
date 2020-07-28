package org.launchcode.studio7;

import java.util.ArrayList;

public class DVD extends BaseDisc implements OpticalDisc{
    public DVD(String title, String capacity, ArrayList<String> contents) {
        super(title, capacity, contents);
    }

    public DVD(String title) {
        super(title);
    }

    @Override
    public void spinDisc() {
        System.out.println("Spin that disc girl!");
    }

    @Override
    public void storeData() {
        System.out.println("Data can be stored yo!");
    }

}

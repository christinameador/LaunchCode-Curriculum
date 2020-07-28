package org.launchcode.studio7;

import java.util.ArrayList;

public abstract class BaseDisc {
    private String title;
    private String capacity;
    private ArrayList<String> contents;

    public BaseDisc(String title, String capacity, ArrayList<String> contents) {
        this.title = title;
        this.capacity = capacity;
        this.contents = contents;
    }

    public BaseDisc(String title) {
        this.title = title;
    }

    public void writeDataToDisc(String contents){
        this.contents.add(contents);
    }

    public String reportData(){
        return "The disc titled " + this.title +
                " has " + this.capacity + " capacity and already has contents including " +
                this.getContents();
    }

    public String playMedia(){
        return "You are playing that media!";
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getContents() {
        String entry2 = "";

        for(String entry : this.contents){
           entry2 = entry + " " + entry2;
        }

        return entry2;
    }

    public void setContents(ArrayList<String> contents) {
        this.contents = contents;
    }
}

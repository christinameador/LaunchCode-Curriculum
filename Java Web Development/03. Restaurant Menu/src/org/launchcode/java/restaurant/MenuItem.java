package org.launchcode.java.restaurant;

public class MenuItem {

    private double price;
    private String description;
    private String category;
    private boolean newItem;

    public MenuItem (double price, String description, String category, boolean newItem){
        this.price = price;
        this.description = description;
        this.category = category;
        this.newItem = newItem;
    }

    public double getPrice(){ return price; }

    public void setPrice(double price){
        this.price = price;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription( String description) {
        this.description = description;
    }

    public String getCategory (){
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public boolean getNewItem(){
        return newItem;
    }

    public void setNewItem(boolean newItem){
        this.newItem = newItem;
    }


    public String toString(){
        return this.category + "\n" +
                this.description + " $" + this.price + "\n";
    }
}

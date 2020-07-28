package org.launchcode.java.restaurant;

//look up how to actually use local date
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Scanner;

public class Menu {
    //private String lastUpdate;
    private ArrayList<MenuItem> itemsInMenu;

    public Menu (ArrayList<MenuItem> itemsInMenu) {
        //this.lastUpdate = lastUpdate;
        this.itemsInMenu = itemsInMenu;
    }

    public Menu (){
        this.itemsInMenu = new ArrayList<MenuItem>();
    }

    //getters and setters
//    public String getLastUpdate(){ return lastUpdate; }
//
//    public void setLastUpdate(String lastUpdate){ this.lastUpdate = lastUpdate; }

    public ArrayList<MenuItem> getItemsInMenu(){ return itemsInMenu; }

    public void setItemsInMenu(ArrayList<MenuItem> itemsInMenu){ this.itemsInMenu = itemsInMenu; }


    //instance methods
//    public MenuItem createMenuItem (){
//        //creating new menu
//        Menu menuOne = new Menu();
//
//        MenuItem newItem = new MenuItem();
//
//        Scanner itemDescription = new Scanner(System.in);
//        System.out.println("Name of new menu item?");
//        String userSelectedItemDescription = itemDescription.nextLine();
//        newItem.setDescription(userSelectedItemDescription);
//
//        Scanner itemPrice = new Scanner(System.in);
//        System.out.println("Price?");
//        double userSelectedItemPrice = itemPrice.nextDouble();
//        newItem.setPrice(userSelectedItemPrice);
//
//        Scanner itemCategory = new Scanner(System.in);
//        System.out.println("What category does the it belong to?");
//        String userSelectedCategory = itemCategory.nextLine();
//        newItem.setCategory(userSelectedCategory);
//
//        Scanner isItemNew = new Scanner(System.in);
//        System.out.println("New item, true or false?");
//        boolean userSelectedNewOption = isItemNew.nextBoolean();
//        newItem.setNewItem(userSelectedNewOption);
//
//        //create new arraylist to store new item
//        ArrayList<MenuItem> list = new ArrayList<MenuItem>();
//
//        //added item to arraylist
//        list.add(newItem);
//
//        //add arraylist to menu instance
//        menuOne.setItemsInMenu(list);
//
//        return newItem;
//    }

    public void addMenuItem(MenuItem newItem){
        if(!itemsInMenu.contains(newItem)){
            itemsInMenu.add(newItem);
        } else {
            System.out.println("The menu already contains that item!");
        }
    }

    public void removeMenuItem(MenuItem newItem){
        this.itemsInMenu.remove(newItem);
    }

    public void isMenuItemNew(MenuItem menuItem){
        if(menuItem.getNewItem()){
            System.out.println("Yes, the " + menuItem.getDescription() + " is new.");
        } else {
            System.out.println("No, the " + menuItem.getDescription() + " is not new.");
        }
    }

    public void printMenu(){

        for(MenuItem item : itemsInMenu){
            System.out.println(item);
        }
    }

}

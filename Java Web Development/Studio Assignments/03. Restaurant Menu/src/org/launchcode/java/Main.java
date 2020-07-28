package org.launchcode.java;

import org.launchcode.java.restaurant.Menu;
import org.launchcode.java.restaurant.MenuItem;

public class Main {

    public static void main(String[] args) {

        MenuItem soup = new MenuItem(2.00, "Soup of the Day", "Appetizer", false);
        MenuItem salad = new MenuItem(3.00, "House Salad", "Appetizer", false);
        MenuItem steakDinner = new MenuItem(10.00, "Steak Dinner", "Main Course", false);
        MenuItem porkChopDinner = new MenuItem(12.00, "Pork Chop Dinner", "Main Course", false);
        MenuItem lemonPie = new MenuItem(5.00, "Lemon Pie", "Dessert", false);
        MenuItem chocolateMousse = new MenuItem(5.00, "Chocolate Mousse", "Dessert", true);

        Menu menuOne = new Menu();

        menuOne.addMenuItem(soup);
        menuOne.addMenuItem(soup);
        menuOne.addMenuItem(salad);
        menuOne.addMenuItem(steakDinner);
        menuOne.addMenuItem(porkChopDinner);
        menuOne.addMenuItem(lemonPie);
        menuOne.addMenuItem(chocolateMousse);


        menuOne.printMenu();

        menuOne.removeMenuItem(porkChopDinner);

        menuOne.printMenu();

        menuOne.isMenuItemNew(chocolateMousse);
        menuOne.isMenuItemNew(steakDinner);

        System.out.println();
        System.out.println(lemonPie);

    }
}

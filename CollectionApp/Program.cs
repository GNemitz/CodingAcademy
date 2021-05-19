using System;
using System.Collections.Generic;  //adding for list

namespace CollectionApp
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Console.WriteLine("Pratice with classes and objects...");
            Magnet myMagnet1 = new Magnet("VA", "2015", "dolphins");
            Magnet myMagnet2 = new Magnet();
            myMagnet2.Location = "Grand Teton";
            myMagnet2.Year = "2019";
            myMagnet2.Description = "mountains";

            Shirt myShirt1 = new Shirt("NC", "2020", "T-shirt");
            Shirt myShirt2 = new Shirt();
            myShirt2.Location = "Canada";
            myShirt2.Year = "2017";
            myShirt2.ShirtType = "hoodie";

            Glass myGlass1 = new Glass("Boston", "1999", "mug");
            Glass myGlass2 = new Glass();
            myGlass2.Location = "VA";
            myGlass2.Year = "2001";
            myGlass2.Size = "shot glass";

            Console.WriteLine(myMagnet1);
            Console.WriteLine(myMagnet2);
            Console.WriteLine(myShirt1);
            Console.WriteLine(myShirt2);
            Console.WriteLine(myGlass1);
            Console.WriteLine(myGlass2);   */

            //Initialize the array of magnets
            List<Magnet> myMagnets = new List<Magnet>();
            List<Shirt> myShirts = new List<Shirt>();
            List<Glass> myGlasses = new List<Glass>();

            //Declare the user choice
            string souvenirChoice;
            string userChoice;

            //print the menu
            Console.WriteLine("Pick a souvenir:");
            Console.WriteLine("1. Magnet");
            Console.WriteLine("2. Shirt");
            Console.WriteLine("3. Glass");
            Console.WriteLine("Please enter a 1 or 2 or 3: ");
            souvenirChoice = Console.ReadLine();

            switch(souvenirChoice)
            {
                case "1":
                    bool magnetFlag = true;  //initialize the flag for looping
                    while (magnetFlag)
                    {
                        //print the menu
                        Console.WriteLine("1. Add a magnet to the souvenir list.");
                        Console.WriteLine("2. Print the magnet souvenir list.");
                        Console.WriteLine("3. Quit.");
                        Console.WriteLine("Please enter a 1 or 2 or 3: ");
                        userChoice = Console.ReadLine();

                        if (userChoice == "1")
                        {
                            //get new magnet and place it in the object
                            Magnet newMagnet = new Magnet();
                            Console.Write("Where did you get the magnet? ");
                            newMagnet.Location = Console.ReadLine();
                            Console.Write("When did you get the magnet? ");
                            newMagnet.Year = Console.ReadLine();
                            Console.Write("Please enter a description of the magnet: ");
                            newMagnet.Description = Console.ReadLine();

                            //add magnet to the list/array
                            myMagnets.Add(newMagnet);
                        }
                        else if (userChoice == "2")
                        {
                            Console.WriteLine(myMagnets);
                            foreach (Magnet aMagnet in myMagnets)
                                Console.WriteLine(aMagnet);
                        }
                        else if (userChoice == "3")
                        {
                            Console.WriteLine("Good Bye!");
                            magnetFlag = false;
                        }
                        else Console.WriteLine("Please enter 1, 2, or 3");
                    }
                    break;
                case "2":
                    bool shirtFlag = true;  //initialize the flag for looping
                    while (shirtFlag)
                    {
                        //print the menu
                        Console.WriteLine("1. Add a shirt to the souvenir list.");
                        Console.WriteLine("2. Print the shirt souvenir list.");
                        Console.WriteLine("3. Quit.");
                        Console.WriteLine("Please enter a 1 or 2 or 3: ");
                        userChoice = Console.ReadLine();

                        if (userChoice == "1")
                        {
                            //get new shirt and place it in the object
                            Shirt newShirt = new Shirt();
                            Console.Write("Where did you get the shirt? ");
                            newShirt.Location = Console.ReadLine();
                            Console.Write("When did you get the shirt? ");
                            newShirt.Year = Console.ReadLine();
                            Console.Write("What kind of shirt is it? ");
                            newShirt.ShirtType = Console.ReadLine();

                            //add shirt to the list/array
                            myShirts.Add(newShirt);
                        }
                        else if (userChoice == "2")
                        {
                            Console.WriteLine(myShirts);
                            foreach (Shirt aShirt in myShirts)
                                Console.WriteLine(aShirt);
                        }
                        else if (userChoice == "3")
                        {
                            Console.WriteLine("Good Bye!");
                            shirtFlag = false;
                        }
                        else Console.WriteLine("Please enter 1, 2, or 3");
                    }
                    break;
                case "3":
                    bool glassFlag = true;  //initialize the flag for looping
                    while (glassFlag)
                    {
                        //print the menu
                        Console.WriteLine("1. Add a glass to the souvenir list.");
                        Console.WriteLine("2. Print the glass souvenir list.");
                        Console.WriteLine("3. Quit.");
                        Console.WriteLine("Please enter a 1 or 2 or 3: ");
                        userChoice = Console.ReadLine();

                        if (userChoice == "1")
                        {
                            //get new glass and place it in the object
                            Glass newGlass = new Glass();
                            Console.Write("Where did you get the glass? ");
                            newGlass.Location = Console.ReadLine();
                            Console.Write("When did you get the glass? ");
                            newGlass.Year = Console.ReadLine();
                            Console.Write("What size is the glass? ");
                            newGlass.Size = Console.ReadLine();

                            //add magnet to the list/array
                            myGlasses.Add(newGlass);
                        }
                        else if (userChoice == "2")
                        {
                            Console.WriteLine(myGlasses);
                            foreach (Glass aGlass in myGlasses)
                                Console.WriteLine(aGlass);
                        }
                        else if (userChoice == "3")
                        {
                            Console.WriteLine("Good Bye!");
                            glassFlag = false;
                        }
                        else Console.WriteLine("Please enter 1, 2, or 3");
                    }
                    break;
                default:
                    Console.WriteLine("Please enter 1, 2, or 3");
                    break;
            }

        }
    }
}

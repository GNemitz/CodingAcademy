using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionMVC
{
    class CollectionView
    {
        public CollectionView()
        {
            Console.WriteLine("Collection App in C#\r");
            Console.WriteLine("------------------------\n");
        }
        public string GetSouvenirType()
        {
            //Declare the user choice
            string souvenirChoice;
                        
            //print the menu
            Console.WriteLine("Pick a souvenir:");
            Console.WriteLine("1. Magnet");
            Console.WriteLine("2. Shirt");
            Console.WriteLine("3. Glass");
            Console.WriteLine("Please enter a 1 or 2 or 3: ");
            souvenirChoice = Console.ReadLine();
            return souvenirChoice;

        }
        public string GetMagnetLocation()
        {
            Console.Write("Where did you get the magnet? ");
            string newMagnetLocation = Console.ReadLine();
            return newMagnetLocation;
        }
        public string GetMagnetYear()
        {
            Console.Write("When did you get the magnet? ");
            string newMagnetYear = Console.ReadLine();
            return newMagnetYear;
        }
        public string GetMagnetDescription()
        {
            Console.Write("Please enter a description of the magnet: ");
            string newMagnetDescription = Console.ReadLine();
            return newMagnetDescription;
        }

        public string GetShirtLocation()
        {
            Console.Write("Where did you get the shirt? ");
            string newShirtLocation = Console.ReadLine();
            return newShirtLocation;
        }
        public string GetShirtYear()
        {
            Console.Write("When did you get the shirt? ");
            string newShirtYear = Console.ReadLine();
            return newShirtYear;
        }
        public string GetShirtType()
        {
            Console.Write("What type of shirt is it?  ");
            string newShirtType = Console.ReadLine();
            return newShirtType;
        }
        public string GetGlassLocation()
        {
            Console.Write("Where did you get the glass? ");
            string newGlassLocation = Console.ReadLine();
            return newGlassLocation;
        }
        public string GetGlassYear()
        {
            Console.Write("When did you get the glass? ");
            string newGlassYear = Console.ReadLine();
            return newGlassYear;
        }
        public string GetGlassSize()
        {
            Console.Write("What size is the glass?  ");
            string newGlassType = Console.ReadLine();
            return newGlassType;
        }
        public string GetUserChoice()
        {
            Console.WriteLine("1. Add a magnet to the souvenir list.");
            Console.WriteLine("2. Print the magnet souvenir list.");
            Console.WriteLine("3. Quit.");
            Console.WriteLine("Please enter a 1, 2, or 3: ");
            string userChoice = Console.ReadLine();
            return userChoice;

        }

        public void PrintShirt(Shirt theShirt)
        {
            //Console.WriteLine(theShirt.Location);
            //Console.WriteLine(theShirt.Year);
            //Console.WriteLine(theShirt.ShirtType);
            Console.WriteLine("I got a " + theShirt.ShirtType + " from " + theShirt.Location + " in " + theShirt.Year + ".");
        }

        public void PrintMagnet(Magnet theMagnet)
        {
            Console.WriteLine("I got a " + theMagnet.Description + " magnet from " + theMagnet.Location + " " + "in " + theMagnet.Year + ".");
        }


    }
}

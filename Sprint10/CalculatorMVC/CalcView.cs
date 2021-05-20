using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalcView
    {
        private bool validnum;

        public CalcView()  //constructor obj created
        {
            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");
        }

        public double getNumValue()
        {

            Console.Write("Type a number, and then press Enter: ");
            double newInput = Convert.ToDouble(Console.ReadLine());
            return newInput;
        }


        //with validation - needs work 
        /*
         public double getNumValue()
        {
            bool validNum = false;

            while (!validNum)
                Console.Write("Type a number, and then press Enter: ");
                string numInput = Console.ReadLine();
                Console.Write("This is not valid input. Please enter an integer value: ");
                double newInput = Convert.ToDouble(Console.ReadLine());
            }

            return newInput;

            }
        or something like this?
        private static void Number()
    {
        Console.Write("Type it in a number: ");
        int result;
        if (int.TryParse(Console.ReadLine(), out result))
        {
             // user input a valid integer
             // result varaible have the input integer
             Console.Write("Hi");
        }
        else
        {
           // user input none integer
           Console.WriteLine("Please type a number!");
        }
        Console.ReadLine();
    }
        }  */

        public string getOption()
        {
            Console.WriteLine("Choose an operator from the following list:");
            Console.WriteLine("\ta - Add");
            Console.WriteLine("\ts - Subtract");
            Console.WriteLine("\tm - Multiply");
            Console.WriteLine("\td - Divide");
            Console.Write("Your option? ");
            string newOption = Console.ReadLine();    
            return newOption;
        }

        public void printResult(double result)  // void not returning anything
        {
            Console.WriteLine("Your result is: " + result);
            Console.WriteLine("------------------------\n");
        }
      
        public string getContinue()
        {
            Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
            string newCont = Console.ReadLine();
            return newCont;

        }
    }

}

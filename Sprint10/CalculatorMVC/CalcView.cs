using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalcView
    {
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
            Console.Write("Your result is: " + result);
           
        }
      
    }

}

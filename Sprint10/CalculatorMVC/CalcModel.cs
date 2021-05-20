using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalcModel
    {
        // Declare variables and set to empty.
        private double numInput1;
        private double numInput2;
        
        public CalcModel()  //constructor 
        {
            numInput1 = 0;
            numInput2 = 0;
        }

        public double NumInput1 //property for numInput1
        {
            get { return numInput1; }  //get method
            set { numInput1 = value; } //set method
        }
        public double NumInput2 //property for numInput2
        {
            get { return numInput2; }  //get method
            set { numInput2 = value; } //set method
        }

        public double getResult(string newOption)
        {

            double result = double.NaN;  //default value is 'not-a-number' which we use if an operation such as division could result in an error


            //use a s
            switch (newOption)
            {
                case "a":
                    result = numInput1 + numInput2;
                    break;
                case "s":
                    result = numInput1 - numInput2;
                    break;
                case "m":
                    result = numInput1 * numInput2;
                    break;
                case "d":
                    // Ask the user to enter a non-zero divisor.
                    if (numInput2 != 0)
                    {
                        result = numInput1 / numInput2;
                    }
                    else Console.WriteLine("Can't divide by zero");
                    break;
                // Return text for an incorrect option entry.
                default:
                    Console.WriteLine("Must select a, s, m, or d!");
                    break;
            }

            return result;

        }
    }
}

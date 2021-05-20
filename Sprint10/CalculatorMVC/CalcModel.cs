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
                    break;
                // Return text for an incorrect option entry.
                default:
                    break;
            }

            return result;

        }
    }
}

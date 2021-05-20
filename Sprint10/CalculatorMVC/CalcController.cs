using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalcController
    {
        private CalcModel aCalc; //creating new model object
        private CalcView aView;  //creating variable aview

        public CalcController()  //constructor
        {
            // instantiate/create a view object using the constructor
            aView = new CalcView();
            // instantiate a model
            aCalc = new CalcModel();


            // note the interaction between the model and view
            // in inputting and outputting the information
            aCalc.NumInput1 = aView.getNumValue();
            aCalc.NumInput2 = aView.getNumValue();
            string newOption = aView.getOption();
            double result = aCalc.getResult(newOption);
            aView.printResult(result);


            //loop based on results

        }
    }
}

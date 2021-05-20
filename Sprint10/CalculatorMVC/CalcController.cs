using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalcController
    {
        private CalcModel aCalcModel; //creating new model object
        private CalcView aCalcView;  //creating variable aview

        public CalcController()  //constructor
        {
            // instantiate/create a view object using the constructor
            aCalcView = new CalcView();
            // instantiate a model
            aCalcModel = new CalcModel();
            bool endApp = false;

            while (!endApp)
            {
                // note the interaction between the model and view
                // in inputting and outputting the information
                // get numvalue from view and assign model value
                aCalcModel.NumInput1 = aCalcView.getNumValue();
                aCalcModel.NumInput2 = aCalcView.getNumValue();

                // get calc option from view and set newOption
                // then send that newOption to the getResult method in CalcModel
                string newOption = aCalcView.getOption();
                //if (newOption == "a" , "s" , "m" , "d")
                double result = aCalcModel.getResult(newOption);

                // print the result received from the model to the view
                aCalcView.printResult(result);

                //get continue or end option from view and set newCont
                //then set endApp flag accordingly
                string newCont = aCalcView.getContinue();
                if (newCont == "n") endApp = true;
            }

        }
    }
}

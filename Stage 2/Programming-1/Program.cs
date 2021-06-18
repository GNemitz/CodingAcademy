using System;
using System.IO;

namespace Programming_1
{
    class Program
    {
        static void Main(string[] args)
        {
            ReadAllLines();
            Stream();
        }
            
        static void ReadAllLines()
        {
            //Part 1
            var lines = File.ReadAllLines("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Contacts.csv");

            foreach (var line in lines)
            {
                var splits = line.Split(',');
                Console.WriteLine(splits[1] + " " + splits[2]);

                //What would happen if line.Split returns no splits?
                    //an exception would happen and the program failes to run - out of bounds error.
                    //array - if blank line then none and will give an exception
                    //another issue - comma in value would cause issues - use library instead?

                //how could we protect ourselves from line.Split returning no splits?  how could we prevent that exception?
                    //code error handling that would display an error in this case
                    // try...catch?  or if stmt to handle no splits     

            }  
        }

        static void Stream()
        {
            //Part 2
            
            using var stream = File.OpenRead(@"C:\Users\gnemitz\CodingAcademy\Stage 2\Programming-1\Contacts.csv");
            using var reader = new StreamReader(stream);
            var line = reader.ReadLine();
            while (!reader.EndOfStream)
            {
                var splits = line.Split(',');
                Console.WriteLine(splits[1] + " " + splits[2]);
                line = reader.ReadLine();
            }

            //my logic from google
            /*int counter = 0;
              string line;
              string path = (@"C:\Users\gnemitz\CodingAcademy\Stage 2\Programming-1\Contacts.csv");

              // Read the file and display it line by line.  
              File.OpenRead(path); //not really needed because path is specified in StreamReader method
              StreamReader file = new StreamReader(path);
              while ((line = file.ReadLine()) != null)
              {
                  var splits = line.Split(',');
                  Console.WriteLine(splits[0] + " " + splits[1] + " " + splits[2]);
                  //Console.WriteLine(line);
                  counter++;
              }

              file.Close();
              Console.WriteLine("There were {0} lines.", counter);
              // Suspend the screen.  
              Console.ReadLine();  */

            //Compare the solutions from part 1 to part 2:
            //What are the advantages of part 1?
            //simple approach to read all lines at once (no using stmts, etc.)
            //easier to read and understand
            //ok if file is small but if file is larger, you may run out of memory
            //What are the advantages of part 2?
            //user doesn't have to wait for whole arrray to load
            //Doesn't load the whole file to memory, so better approach if file is larger
            //could create another instance of the streamreader 
            //can start enumerating the collection of strings before the whole collection is returned

        }
    }
}


/*
 * code from mitch for part 1 with the try..catch code
using System;
using System.IO;

namespace ProgrammingActivity1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            try
            {
                var lines = File.ReadAllLines("C:/Users/MCovert/source/repos/Coding-Academy/DPL-Phase2/ProgrammingActivity1/ProgrammingActivity1/Contact.csv");
                foreach (var line in lines)
                {
                    try
                    {
                        var splits = line.Split(',');
                        Console.WriteLine(splits[1] + " " + splits[2]);
                    }
                    catch (Exception e)
                    {
                        if (e.Source != null)
                            Console.WriteLine("IOException source: {0}", e.Source);
                    }
                }
            }
            catch (FileNotFoundException e)
            {
                Console.WriteLine("File Not Found! Please Check File Path.");
            }
            catch (IOException e)
            {
                // Extract some information from this exception, and then
                // throw it to the parent method.
                if (e.Source != null)
                    Console.WriteLine("IOException source: {0}", e.Source);
                throw;
            }

        }
    }
}
*/
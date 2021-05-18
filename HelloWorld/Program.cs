using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your name? ");
            string userName = Console.ReadLine();
            //Console.WriteLine("Hello World!");
            //Console.WriteLine("The current time is " + DateTime.Now); 
            Console.WriteLine("Hello " + userName + "!  How are you?");
        }
    }
}

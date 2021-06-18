using System;
using System.IO;
using Newtonsoft.Json;
using System.Xml.Serialization;
using System.Linq;

namespace Programming_3
{
    public class Contact
    {
        public int Id { get; set; }
        [JsonProperty("first_name")]
        public string FirstName { get; set; }
        [JsonProperty("last_name")]
        public string LastName { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("gender")]
        public string Gender { get; set; }
        [JsonProperty("ip_address")]
        public string IpAddress { get; set; }
        [JsonProperty("skill")]
        public string Skill { get; set; }
        [JsonProperty("height")]
        public int Height { get; set; }

    }
    class Program
    {
        static void Main(string[] args)
        {
            var text = File.ReadAllText("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/ContactsWithHeight.json");
            var contacts = JsonConvert.DeserializeObject<Contact[]>(text);

            /*
            //for loop
            foreach (var contact in contacts)
            {
                Console.WriteLine($"{contact.FirstName} {contact.LastName} Height={contact.Height}");
            } 
            */

            /*
            //while loop
            int i = 0;
            while (i < contacts.Length)
            {
                Console.WriteLine($"{contacts[i].FirstName} {contacts[i].LastName} Height={contacts[i].Height}");
                i++;
            }
            */

            /*
            //do while loop
            int i = 0;
            do
            {
                if (contacts[i].Height > 70)
                {
                    Console.WriteLine($"{contacts[i].FirstName} {contacts[i].LastName} Height={contacts[i].Height}");
                }
                    i++;
            } while (i < contacts.Length) ;
            */

            // JSON using where clause and LINQ
            //contacts.Where(contacts => contacts.Height < 68);
            var QueryContactByHeight = 
                from contact in contacts
                where contact.Height < 68
                group contact by contact.FirstName;

            foreach (var contact1 in QueryContactByHeight)
            {
                    foreach (var contact in contact1)
                    {
                        Console.WriteLine($"{contact.FirstName} {contact.LastName} Height={contact.Height}");
                    }
            }
        }

    }
}

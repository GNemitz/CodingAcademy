using System;
using System.IO;
using Newtonsoft.Json;
using System.Xml.Serialization;
using System.Collections.Generic;


namespace Programming_2
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
        [JsonProperty("GUID")]
        public Guid Guid { get; set; }

    }

       
    class Program
    {
        static void Main(string[] args)
        {
            ReadJson();
            ReadXML();
        }
        //What would happen if we remove the JsonProperty attributes from the Contact class?
            //It will not recognize the command and will not display the name.
            //It needs to know what it is looking for in the JSON file.  Maps to the JSON file
        //Why is the IpAddress not being populated?
            //it doesn't have the json property
        static void ReadJson()
        {
            var text = File.ReadAllText("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Contacts.json");
            var contacts = JsonConvert.DeserializeObject<Contact[]>(text);

            foreach (var contact in contacts)
            {
                Console.WriteLine($"{contact.FirstName} {contact.LastName} {contact.Email} {contact.Gender} {contact.IpAddress} {contact.Skill}");
            }
        }
        static void ReadXML()
        {
            string path = "C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Contacts.xml";
            
            FileStream stream = File.Open(path, FileMode.Open, FileAccess.Read);
            //List<Contact> result = (List<Contact>)(new XmlSerializer(typeof(List<Contact>))).Deserialize(stream);
            Contact[] result = (Contact[])(new XmlSerializer(typeof(Contact[]))).Deserialize(stream);

            foreach (var contact in result)
            {
                //Console.WriteLine(contact.FirstName + " " + contact.LastName +" " +contact.IpAddress );
                Console.WriteLine($"{contact.FirstName} {contact.LastName} {contact.Email} {contact.Gender} {contact.IpAddress} {contact.Skill}");
                //Console.WriteLine(contact.ToString());

            }
                                   

        }
    }
}

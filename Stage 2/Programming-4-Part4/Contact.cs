using CsvHelper.Configuration.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Programming_4_Part4
{
    public class Contact
    {
        [Name("id")]
        public int Id { get; set; }
        [Name("first_name")]
        public string FirstName { get; set; }
        [Name("last_name")]
        public string LastName { get; set; }
        [Name("email")]
        public string Email { get; set; }
        [Name("gender")]
        public string Gender { get; set; }
        [Name("skill")]
        public string Skill { get; set; }
        [Name("ip_address")]
        public string IpAddress { get; set; }
        [Name("GUID")]
        public Guid GUID { get; set; }
    }
}

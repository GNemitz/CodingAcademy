using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Models
{
    public class Movie
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public bool Watched { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace APP.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenresController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Genres> Get()
        {
            string jsonFilePath = "./resources/genres.json";

            // Read the JSON file content
            string jsonContent = System.IO.File.ReadAllText(jsonFilePath);

            // Deserialize the JSON array to a list of Genres objects
            List<Genres> genresList = JsonConvert.DeserializeObject<List<Genres>>(jsonContent);

            return genresList;
        }
    }
}

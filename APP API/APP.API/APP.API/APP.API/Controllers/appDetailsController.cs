using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace APP.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppDetailsController : ControllerBase
    {
        [HttpGet("{app}")]
        public IEnumerable<appDetails> Get(String app)
        {
            string jsonFilePath = "./resources/appdetails.json";

            // Read the JSON file content
            string jsonContent = System.IO.File.ReadAllText(jsonFilePath);

            // Deserialize the JSON array to a list of Genres objects
            List<appDetails> appDetailslist = JsonConvert.DeserializeObject<List<appDetails>>(jsonContent);

            for(int i = 0;i<appDetailslist.Count;i++)
            {
                if (appDetailslist[i].appName == app)
                {
                    List<appDetails> result = new List<appDetails> { appDetailslist[i] };
                    return result;
                }
            }
            return null;
        }
    }
}

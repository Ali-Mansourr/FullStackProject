using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace APP.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppRankingController : ControllerBase
    {
        [HttpGet]
        public IDictionary<string, List<appRanking>> Get()
        {
            string jsonFilePath = "./resources/appranking.json";

            // Read the JSON file content
            string jsonContent = System.IO.File.ReadAllText(jsonFilePath);

            // Deserialize the JSON array to a list of Genres objects
            Dictionary<string, List<appRanking>> appRankingList = JsonConvert.DeserializeObject<Dictionary<string, List<appRanking>>>(jsonContent);

            return appRankingList;
        }

        [HttpGet("{genre}")]
        public List<appRanking> Get(string genre)
        {
            string jsonFilePath = "./resources/appranking.json";
            string jsonContent = System.IO.File.ReadAllText(jsonFilePath);
            Dictionary<string, List<appRanking>> appRankingDict = JsonConvert.DeserializeObject<Dictionary<string, List<appRanking>>>(jsonContent);

            if (appRankingDict.ContainsKey(genre))
            {
                return appRankingDict[genre];
            }
            else
            {
                return new List<appRanking>();
            }
        }
    }
}

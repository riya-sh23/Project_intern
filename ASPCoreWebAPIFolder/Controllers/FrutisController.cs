using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPCoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FrutisController : ControllerBase
    {
        public List<string> fruits = new List<string>()
        {
            "Apple","Banana","Mango","Cherry","Grapes"
        };

        [HttpGet]
        public List<string> GetFruitsByIndex() 
        {
            return fruits;
        }
        [HttpGet("{id}")]
        public string GetFruits(int id)
        {
            return fruits.ElementAt(id);
        }
    }
}

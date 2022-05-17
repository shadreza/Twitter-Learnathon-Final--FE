using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace first_task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class hello : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello world");
        }
        [HttpPost]
        public IActionResult Post(JObject payload)
        {
            return Ok(payload);
        }
    }
}

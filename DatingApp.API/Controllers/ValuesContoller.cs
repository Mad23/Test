using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        //inject datacontext in controller
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;

        }
        //get api/values
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetValues()
        {
            var values = await  _context.Values.ToListAsync();
            return Ok(values);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value =await _context.Values.FirstOrDefaultAsync(x=>x.Id ==id);
            return Ok(value);
        }
    }
}
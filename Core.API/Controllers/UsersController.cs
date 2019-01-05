using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.API.Data;
using Core.API.Dtos;
using Core.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Core.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public DataContext _context { get; set; }
        public UsersController(DataContext context)
        {
            _context = context;

        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _context.Values.ToListAsync();

            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserForRegisterDto user)
        {
            var addUser = new User
            {
                Name = user.Name,
                Surname = user.Surname,
                BirthDate = user.BirthDate
            };

            await _context.Values.AddAsync(addUser);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }


    }
}

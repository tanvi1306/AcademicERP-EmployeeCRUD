package com.example.esd_miniproject.Controller;

import com.example.esd_miniproject.Entities.Admin;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Admin")
public class AdminController {


    @GetMapping("/check")
    public Boolean check(@RequestParam String id,@RequestParam String pwd)
    {
        return (id.equals("Admin")&&pwd.equals("12345"));
    }
}

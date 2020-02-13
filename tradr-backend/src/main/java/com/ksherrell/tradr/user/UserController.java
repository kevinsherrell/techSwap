package com.ksherrell.tradr.user;

import com.ksherrell.tradr.listing.ListingRepository;
import com.ksherrell.tradr.listing.ListingService;
import com.ksherrell.tradr.validation.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewUser(@Valid @RequestBody User user, BindingResult result) {

        ResponseEntity<?> errors = validationErrorService.ValidationService(result);

        if (errors != null) return errors;

        User user1 = userService.saveOrUpdateUser(user);

        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user, BindingResult result) {
        User validUser = userService.verifyUserLogin(user);
         if(validUser != null) {
             return new ResponseEntity<User>(validUser, HttpStatus.OK);
         }
         return new ResponseEntity<User>(user, HttpStatus.UNAUTHORIZED);
    }

    @GetMapping
    public ResponseEntity<?> findUserByEmail(@RequestParam(value = "email") String email){
        User user = userService.findUserByEmail(email);
        System.out.println(email);
        return new ResponseEntity<User>(user, HttpStatus.OK);

    }
    @GetMapping("/all")
    public Iterable<User> getAllUsers(){
        return userService.findAllUsers();
    };
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userService.findUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

}

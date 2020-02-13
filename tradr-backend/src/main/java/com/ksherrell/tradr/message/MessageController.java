package com.ksherrell.tradr.message;

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
@RequestMapping("/api/message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewMessage(@Valid @RequestBody Message message, BindingResult result) {

        ResponseEntity<?> errors = validationErrorService.ValidationService(result);

        if (errors != null) return errors;

        Message message1 = messageService.saveMessage(message);

        return new ResponseEntity<Message>(message, HttpStatus.CREATED);
    }


    @GetMapping("/all")
    public Iterable<Message> getAllUsers(){
        return messageService.findAllMessages();
    };
    @GetMapping("/{id}")
    public ResponseEntity<Message> getUserById(@PathVariable Long id){
        Message message = messageService.findMessageById(id);
        return new ResponseEntity<Message>(message, HttpStatus.OK);
    }

}
package com.ksherrell.tradr.listing;

import com.ksherrell.tradr.image.Image;
import com.ksherrell.tradr.user.User;
import com.ksherrell.tradr.user.UserService;
import com.ksherrell.tradr.validation.ValidationErrorService;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/listing")
@CrossOrigin
public class ListingController {
    @Autowired
    private ListingService listingService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewListing(@Valid @RequestBody Listing listing, BindingResult result) {

        ResponseEntity<?> errors = validationErrorService.ValidationService(result);

        if (errors != null) return errors;

        Listing listing1 = listingService.saveOrUpdateListing(listing);

        return new ResponseEntity<Listing>(listing, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Listing> getAllListings() {
        return listingService.findAllListings();
    }

    ;

    @GetMapping("/{id}")
    public Optional<Listing> getListingById(@PathVariable Long id) {

        return listingService.findListingById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteListingById(@PathVariable Long id) {
        listingService.deleteListingById(id);
    }

}

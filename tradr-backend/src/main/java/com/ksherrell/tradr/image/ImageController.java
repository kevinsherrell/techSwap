package com.ksherrell.tradr.image;

import com.ksherrell.tradr.validation.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/image")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewImage(@Valid @RequestBody Image image, BindingResult result){
        ResponseEntity<?> errors = validationErrorService.ValidationService(result);
        if(errors != null) return errors;

        Image image1 = imageService.saveOrUpdateImage(image);

        return new ResponseEntity<Image>(image, HttpStatus.CREATED);

    }

    @GetMapping("/all")
    public Iterable<Image> getAllImages(){return imageService.findAllImages();}

    @GetMapping("/{id}")
    public ResponseEntity<Image> getImageById(@PathVariable Long id){
        Image image = imageService.findImageById(id);
        return new ResponseEntity<Image>(image, HttpStatus.OK);
    }
}

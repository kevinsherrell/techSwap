package com.ksherrell.tradr.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public Image saveOrUpdateImage(Image image){
        return imageRepository.save(image);
    }
    public Iterable<Image> findAllImages(){
        return imageRepository.findAll();
    }
    public Image findImageById(Long id){
        return imageRepository.getById(id);
    }
}

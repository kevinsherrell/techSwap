package com.ksherrell.tradr.image;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {
    Iterable<Image> findAll();
    Image getById(Long id);

}

package com.ksherrell.tradr.listing;

import com.ksherrell.tradr.image.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ListingRepository extends CrudRepository<Listing, Long> {

    List<Listing> findAllByCategory(String category);


}

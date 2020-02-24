package com.ksherrell.tradr.listing;

import com.ksherrell.tradr.image.Image;
import com.ksherrell.tradr.image.ImageRepository;
import com.ksherrell.tradr.user.User;
import com.ksherrell.tradr.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListingService {
    @Autowired
    private ListingRepository listingRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ImageRepository imageRepository;

    public Listing saveOrUpdateListing(Listing listing) {
        User user = userRepository.getById(listing.getUser());
        listing.setLocation(user.getZipCode());
        return listingRepository.save(listing);
    }

    public Iterable<Listing> findAllListings() {
        return listingRepository.findAll();
    }

    public List<Listing> findAllListingsByCategory(String category){
        return listingRepository.findAllByCategory(category);
    }
    public Optional<Listing> findListingById(Long id) {
        return listingRepository.findById(id);
    }

    public void deleteListingById(Long id) {
        listingRepository.deleteById(id);
    }
}
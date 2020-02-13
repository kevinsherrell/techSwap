package com.ksherrell.tradr.listing;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.ksherrell.tradr.image.Image;
import com.ksherrell.tradr.user.User;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //    @NotBlank
//    @Column(updatable = false)
    private Long user;
    private String title;
    private boolean tradeOnly;
    private int price;
    private String category;
    private String description;
    private String itemsWanted;
    private String location;
    private String imageUrl;
    @OneToMany(fetch = FetchType.EAGER,targetEntity = Image.class, cascade = CascadeType.ALL)
    @JoinColumn(name="listing_id")
    @Where(clause="image_type = 'listing'")
    private List<Image> image;


    @JsonFormat(pattern = "yyyy-mm-dd HH:mm")
    private Date date_created;
    @JsonFormat(pattern = "yyyy-mm-dd HH:mm")
    private Date date_updated;

    @PrePersist
    protected void onCreate() {
        this.date_created = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.date_updated = new Date();
    }

    public Listing() {
    }


    public Listing(Long user, String title, boolean tradeOnly,int price, String description, String category, String itemsWanted) {
        this.user = user;
        this.title = title;
        this.tradeOnly = tradeOnly;
        this.price = price;
        this.description = description;
        this.category = category;
        this.itemsWanted = itemsWanted;
    }

    public boolean isTradeOnly() {
        return tradeOnly;
    }

    public void setTradeOnly(boolean tradeOnly) {
        this.tradeOnly = tradeOnly;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

    public Date getDate_updated() {
        return date_updated;
    }

    public void setDate_updated(Date date_updated) {
        this.date_updated = date_updated;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser() {
        return user;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getItemsWanted() {
        return itemsWanted;
    }

    public void setItemsWanted(String itemsWanted) {
        this.itemsWanted = itemsWanted;
    }

    public List<Image> getImage() {
        return image;
    }

    public void setImage(List<Image> image) {
        this.image = image;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}

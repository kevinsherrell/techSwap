package com.ksherrell.tradr.image;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name="image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
//    @NotBlank(message = "must have a listing id")
    @Column(name="listing_id")
    private Long listingId;
    @NotBlank(message = "must have an image type")
    private String imageType;
    @NotBlank(message = "must have an image url")
    private String imageUrl;

    @JsonFormat(pattern = "yyyy-mm-dd HH:mm")
   private Date date_created;

    @PrePersist
    protected void onCreate(){
        this.date_created = new Date();
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getListingId() {
        return listingId;
    }

    public void setListingId(Long listingId) {
        this.listingId = listingId;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }



    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", listingId=" + listingId +
                ", imageType='" + imageType + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", date_created=" + date_created +
                '}';
    }
}

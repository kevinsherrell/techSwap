package com.ksherrell.tradr.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ksherrell.tradr.image.Image;
import com.ksherrell.tradr.listing.Listing;
import com.ksherrell.tradr.message.Message;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Where;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user")
@CrossOrigin
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @NotBlank
    private String firstName;
    private String middleName;
    @NotBlank
    private String lastName;
    @NotBlank
    @Column(unique = true)
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String zipCode;
    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = Listing.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "user")
    private List<Listing> listing;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = Message.class)
    @Fetch(value = FetchMode.SUBSELECT)
    @JoinColumn(name = "receiver")
    private List<Message> messagesReceived;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = Message.class)
    @Fetch(value = FetchMode.SUBSELECT)
    @JoinColumn(name = "sender")
    private Set<Message> messagesSent;

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

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public List<Message> getMessagesReceived() {
        return messagesReceived;
    }

    public void setMessagesReceived(List<Message> messagesReceived) {
        this.messagesReceived = messagesReceived;
    }

    public Set<Message> getMessagesSent() {
        return messagesSent;
    }

    public void setMessagesSent(Set<Message> messagesSent) {
        this.messagesSent = messagesSent;
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
    //    public Date getDate_created() {
//        return date_created;
//    }
//
//    public void setDate_created(Date date_created) {
//        this.date_created = date_created;
//    }

    public List<Listing> getListing() {
        return listing;
    }

    public void setListing(List<Listing> listing) {
        this.listing = listing;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", listing=" + listing +
                ", date_created=" + date_created +
                '}';
    }
}

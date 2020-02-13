package com.ksherrell.tradr.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Iterable<User> findAll();

    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);

    User getById(Long id);
}

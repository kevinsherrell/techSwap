package com.ksherrell.tradr.user;

import com.ksherrell.tradr.exceptions.UserEmailException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user) {
        try {
//            user.setEmail(user.getEmail());
            return userRepository.save(user);
        } catch (Exception e){
            throw new UserEmailException("Email '" + user.getEmail() + "' already exists");
        }
//        return userRepository.save(user);

    }

    public  User verifyUserLogin(User user){
        return userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
    }

    public User findUserByEmail(String email){
        User user = userRepository.findByEmail(email.toLowerCase());
        if(user == null){
            throw new UserEmailException("The user " + email + " does not exist");
        }
        return user;
    }
    public Iterable<User> findAllUsers(){
        return userRepository.findAll();
    }
    public User findUserById(Long id){
        System.out.println("findUserById");
        return userRepository.getById(id);
    }
}

package com.ksherrell.tradr.message;

import com.ksherrell.tradr.exceptions.UserEmailException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public Message saveMessage(Message message) {
            return messageRepository.save(message);
    }


    public Iterable<Message> findAllMessages(){
        return messageRepository.findAll();
    }
    public Message findMessageById(Long id){
        return messageRepository.getById(id);
    }
}

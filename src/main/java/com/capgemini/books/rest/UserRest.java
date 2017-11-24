package com.capgemini.books.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/services/rest")
public class UserRest {

    private long idGen = 1L;

    private List<User> users = new ArrayList<>();

    {
        newUser(new User(0L, "John Doe", "john.doe@email.com"));
        newUser(new User(0L, "Max Rockatansky", "mad.max@gmail.com"));
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return this.users;
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User findUser(@PathVariable("id") long id) {
        return this.users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElseThrow(() -> new NotFoundException());
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void saveUser(@RequestBody User user) {
        if (user.getId() != null) {
            final User found = this.users.stream().filter(elem -> elem.getId() == user.getId()).findFirst().get();
            found.setName(user.getName());
            found.setEmail(user.getEmail());
        } else {
            newUser(user);
        }
    }

    private void newUser(final User user) {
        user.setId(this.idGen);
        this.users.add(user);
        ++this.idGen;
    }
}

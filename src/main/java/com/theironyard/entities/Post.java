package com.theironyard.entities;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Created by jessicahuffstutler on 12/7/15.
 */
@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue
    public int id;

    @Column(nullable = false)
    public String communityName;

    @Column(nullable = false)
    public String postName;

    @Column(nullable = false)
    public String postBody;

    @Column(nullable = false)
    public LocalDateTime postTime;

    //multiple posts per community
    @ManyToOne
    public Community community;
    public MultipartFile postImage;
}

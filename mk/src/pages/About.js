import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <h2>About Us</h2>
          <p>Welcome to My Restaurant, where culinary tradition meets innovation! Nestled in the heart of Erode, our restaurant is more than just a place to eat—it's an experience. Founded in 2022, My Restaurant has been serving delicious, high-quality meals crafted with love and the freshest ingredients.</p> <br></br>
        
        <h2>Our Story</h2>
          <p>
          At [Restaurant Name], we believe in the power of food to bring people together. What started as a small family-owned eatery has grown into a beloved dining destination for locals and visitors alike. Our journey began with a simple goal: to share our passion for cooking with the community. Over the years, our dedication to quality and hospitality has earned us a loyal following and numerous accolades.
          </p> <br></br>
        <h2>Our Philosophy</h2>  
          <p>
          Our menu is a celebration of Veg and Non-veg. We source our ingredients from local farmers and producers, ensuring that every dish is as fresh and sustainable as possible. From our signature Biriyani to our seasonal specials, every plate is a testament to our commitment to quality and taste
          </p>
          <br></br>

        <h2>The My Restaurant Experience</h2>  
          <p>
          Whether you're here for a quick bite, a romantic dinner, or a family celebration, My Restaurant offers a warm and inviting atmosphere where everyone feels at home. Our team of passionate chefs and friendly staff work tirelessly to make your dining experience unforgettable. We believe that great food, enjoyed in a beautiful setting, can create lasting memories.
          </p>
          
      </Box>
    </Layout>
  );
};

export default About;

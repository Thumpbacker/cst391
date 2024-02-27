# Milestone 1

## Food Store Database
- Anthony Cicinelli
- JavaScript Web Application Development
- CST-391 1/21/2024

## Instructor Feedback

Anthony, thank you for meeting all requirements on this assignment.  I would recommend to do everything in Markdown as this will be a lot easier to maintain, submit and more.  If you are interested, [go here](  https://gitlab.com/bobby.estey/wikibob/-/blob/master/docs/markdown/README.md?ref_type=heads)

You can also text me and I can provide a personal session with you, Bobby

Using Markdown has not been implemented yet. Markdown will be a possibility in the future when I get a chance to research it and learn how to use it properly.

## Introduction

The application that will be designed is a database for all the food products a store sells. This application will be used by store owners to view any products currently in a store, how much they cost and if they are in stock. They will also be able to update a product's price, stock and availability. Along with this any products they do not wish to sell can be deleted from the database. This will help with keeping everything sold in the store clear.

## REST API

The program will use 4 REST API entry points. These endpoints will be GET, POST, DELETE and PUT. The GET request will be used to request the data from the database and display it in a list on the page. The POST request will allow for adding a new item into the database. The DELETE request will remove an item from the database. Finally the PUT request will update an existing item in the database.

## REST API Hierarchy

|method|endpoint|description|
|--|--|--|
|GET|localhost/product|This is the main page and will get all the different items from the database to display|
|GET|localhost/product?id=[productID]|
This will allow the main page to search and display a product based on their id|
|GET|localhost/product/search/[product name]|
This will allow the main page to search and display a product based on their name|
|DELETE|localhost/product/[product id]|
This will allow for an item to be deleted if the proper id is submitted|
|POST|localhost/product/[product values]|
This will allow the product to be added to the database once a button is clicked|
|PUT|localhost/product/[product values][product id]|This will allow for a product to be updated if the correct values are inputted. The Id will already be provided when going to the update page|

## User Stories

- As a user I want to view all my product so I can see what I’m selling
- As a user I want to delete a product so I don’t see it in my view
- As a user I want to search for a specific item so I can see if I’m selling it
- As a user I want to update a product so I can keep the database up to date with what's in the store
- As a user I want to view a specific product so I can see it’s values
- As a user I want to add a product so I can see the new product I’m selling

## ER Diagrams

## Sitemap

## Wireframes

## Homepage

## View product page

## Update Product Page

## Add Product Page

## UML Diagram

## Risks

- React
- Express
- Node.js
- Deleting a product
- Updating a product

## Updates to Proposal

Changed URL’s in Hierarchy to represent the Postman tests
Anthony Cicinelli
2/25/2024

## Known Issues

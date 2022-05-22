import React, { useState } from 'react';
import BusinessSummary from '../Home/BusinessSummary';

const Blogs = () => {
    

    const products = [
        {name:'laptop', price:45000, description:'This is hp laptop'},
        {name:'Mobile', price:20000, description:'This is poco mobile'},
        {name:'Glass', price:500, description:'This is a Glass'},
    ]
    const productName =  products.filter((product) => product.name === 'laptop')
  /*   for(let i =0; i< productName.length; i++){
          let name =  productName[i]
          console.log(name.name)
    } */
    return (
        <div className='text-center'>
            <h2 className='text-xl font-bold'>How will you improve the performance of a React Application?</h2>
            <p>Avoid inline functions as much as possible.Keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders.Code-splitting in React using dynamic import.Windowing or list virtualization in React.Lazy loading images in React.To optimize React rendering, you need to make sure that components receive only necessary props.It will let you control the CPU consumption and avoid over-rendering unnecessary features. </p>
            <h2 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state to properly manage React apps:</p>
            <p>1. Local state.</p>
            <p>2. Global state.</p>
            <p>3. Server state.</p>
            <p>4. URL state.</p>
            <p>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly.Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Global state is data we manage across multiple components.Data that comes from an external server that must be integrated with our UI state.Data that exists on our URLs, including the pathname and query parameters. </p>
            <h2 className='text-xl font-bold'>How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototypeof an object, we use Object.Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain</p>
            <h2 className='text-xl font-bold'>Why you do not set the state directly in React??</h2>
            <p>React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly.Before updating the value of the state, we need to build an initial state setup. Once we are done with it, we use the setState() method to change the state object. </p>
            <h2 className='text-xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <div className='my-5'>
                   <p>This is product name: <span className='text-secondary font-bold'> {productName[0].name}</span></p>
                      
            </div>
            <h2 className='text-xl font-bold'> What is a unit test? Why should write unit tests?</h2>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            
        </div>
    );
};

export default Blogs;
import React from 'react';
import './Blogs.css';
// import blog from '../../../src/images/blog-bg.jpg';


const Blogs = () => {
    return (
        <div className="container">
            <div className='blog-bg'>
                <h1 className='pt-3'>Blogs</h1>
                <h3 className='mt-4'>Difference between Javascript and Node.JS</h3>
                <ul>
                    <h5>Java Script</h5>
                    <li>Javascript is Programming language.It running any web browser with proper browser engine.</li>
                    <li>Mainly using for any client side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
                    <li>Java Script Running any engine like spider monkey (Fire Fox), Java Script core (Safari), V8 (Google) </li>


                    <h5>Node JS</h5>
                    <li>Node JS is an interpreter and environment for java script with some specific useful libraries which java script programming can use separately.</li>
                    <li> Node JS mainly using for accessing or performing any non-blocking operating system,like creating or executing shell script or accessing any hardware specific information or running any backend job.</li>
                    <li>Node JS only run in V8 engine which mainly using by google chrome. and java script program which will be written under this Node JS will be always run in V8 Engine.</li>
                </ul>
                <br />
                <br />
                <h3>When should use Node JS and when should use MongoDB</h3>

                <p>Node.js has got a wide range of advantages. It's a lightweight, robust, and easy to scale environment that facilitates software development.The Internet of Things represents an ecosystem of various automated computer devices and digital machines that can exchange data with each other without any human interference. The technology is used in a broad variety of cases and diverse industries.Node.js perfectly suits for building social networking apps, streaming services, collaboration tools, interactive commercial websites, instant messengers, and many others. All these apps have one common feature they can transmit live text, audio, or video data in groups or face-to-face interaction.
                    <br />
                    MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON.

                    Documents, in turn, are gathered into collections. If you're already familiar with relational databases, you can think of a collection as equivalent to a table, but without a schema. Unlike the records in a relational table, documents within a collection can have different fields, though typically all documents in a collection have a similar or related purpose. Collections exist within a given database.

                    Most businesses use MongoDB as a distributed database on multiple, geographically dispersed servers in a configuration called a cluster. Clusters allow a MongoDB database to scale horizontally across many servers with sharding (auto-balancing). They also let applications replicate data across servers to ensure high availability through a feature MongoDB calls replica sets, thus enhancing the overall performance and reliability of a MongoDB cluster.
                </p>
                <h3>Differences between SQL and NoSQL databases.</h3>
                <ul>
                    <h5>SQL</h5>
                    <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                    <li>These databases have fixed or static or predefined schema</li>
                    <li>These databases are not suited for hierarchical data storage.</li>
                    <li>These databases are best suited for complex queries</li>
                    <li>Vertically Scalable</li>
                    <li>Follows ACID property</li>
                    <br />
                    <h5>NoSQL</h5>
                    <li>Non-relational or distributed database system.</li>
                    <li>They have dynamic schema</li>
                    <li>These databases are best suited for hierarchical data storage.</li>
                    <li>These databases are not so good for complex queries</li>
                    <li>Horizontally scalable</li>
                    <li>Follows CAP(consistency, availability, partition tolerance)</li>
                </ul>
                <br />
                <h4> What is the purpose of JWT & How does it work.</h4>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    <br />
                    <br />

                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.
                </p>

            </div>

        </div>
    );
};

export default Blogs;
import { Component } from "react";
import Navigation from "../components/Navigation";


// note you can't use usestate in class components but you can use state here by saying this.state

// This class component extends component means that as you are importing the component that react already have, you are saying you want to build on it and add your own things by using the 'extend'. Note that class components using the 'render method' before the 'return' word. You can also draw more light from the example of class user function below just like we did in advance javascript when we created class. so in this case, we are buiding on the class user already created and then getting a delete user function. this way will help that a user cannot delete users on the site will only have access to the login and logout functions.

// class User {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     login () {
    //         console.log(this.name = "logged in");
    //     }
    //     logout() {
    //         console.log(this.name = "logged out");
    //     }
    
    // }
    // class Admin extends User {
    //       deleteUser() {
    //         console.log("User deleted");
    //       }  
    // }

    // NOW LET'S USE STATE HERE.

class ClassComp extends Component {
    render() {
        this.state = {
            person: "Johnson",
            point: 0,
            users: ["Martha", "James", "John"],
        };
        return (
            <div>
                <Navigation/>
                <h1>This is a class component</h1>
                <h2>{this.state.person}</h2>
                <p>{this.state.point}</p>
                {this.state.users.map((user) => (
                    <p>{user}</p>
                ))}
                <p>{this.state.users[1]}</p>
            </div>
        )
    }
}

export default ClassComp;

// 
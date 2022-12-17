import React, { Component } from "react";


class Course extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            showForm: []
        };
       
        this.setShowFormValue = this.setShowFormValue.bind(this);
    }

    setShowFormValue(selectedIndex) {
   
        let formArray = [];
       
       for (let index = 0; index <this.state.showForm.length; index++) {
            if(parseInt(selectedIndex) === index){
                formArray[index] = true
            }else{
                formArray[index] = false
            }
        
       }
     
       this.setState({
        showForm:formArray
       })

      

    };
    renderForm(index){
       
        const formArray = this.state.showForm;
       
        
           
            if(formArray[index]){
                return (
                    <div>
                      <form id="add-app">
                        <label>Name : </label>
                        <input type="text"/>
              
                        <label> Number : </label>
                        <input type="text"/>
                        <label>Query : </label>
                
                        <button>Create</button>
                      </form>
                    </div>
                  );
            }else{
                return null
            }
        
      
       
    }

    render() {
        const courseList = this.state.courses.map((course, index) => {
           
            return (
                <div id="courselist" key={index}>
                    <ul id="list">
                        <h4 id="coursename"> {course.name}</h4>
                        <p> Start Date : {course.date}</p>
                        <button
                            id="enquire"
                            onClick={this.setShowFormValue.bind(this,index)}
                        >
                            Enquire
                        </button>
                        {this.renderForm(index)}
                    </ul>
                </div>
            );
        });
        return (
            <>
                <center>
                    <h1>Course List </h1>
                </center>
                <center>
                    <h2>Courses</h2>
                </center>
                <h4>{courseList}</h4>
            </>
        );
    }
    componentDidMount() {
        fetch("http://localhost:3000/courses")
            .then((res) => res.json())
            .then((data) => {
                const formArray =[]
                for (let index = 0; index < data.length; index++) {
                    formArray[index] = false
                    
                }
                this.setState({
                    courses: data,
                    showForm:formArray
                });
          
            });
    }
}

export default Course;
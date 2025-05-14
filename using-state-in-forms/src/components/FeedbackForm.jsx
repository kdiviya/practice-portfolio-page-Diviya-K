import React, {useState} from "react";

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleDataChange = (e) => {
        const {name,value} = e.target;
        console.log(`Update ${name}`, value);

        setFormData((PreviousData) =>
            ({ ...PreviousData, 
            [name]: value,
            })) ;

    };

   const formInComplete = !formData.name || !formData.email || !formData.feedback;
   //console.log("Is form incomplete?", formInComplete);

   const handleSubmit = () => !formInComplete ? alert("Form Submitted!"): alert("Fill all the fields");
       

    return(
        <div className="feedbackForm">
            <h1>User Feedback Form</h1>
            <form>
                <label>Name: </label> 
                <input type ="text" name ="name" value ={formData.name} onChange={handleDataChange} />

                <label>Email: </label>
                <input type ="email" name ="email" value={formData.email} onChange={handleDataChange} />

                <label>Feedback :</label>
                <textarea name ="feedback" value ={formData.feedback} rows="4" cols="50" maxLength="200" onChange={handleDataChange} />
                <p id = "textarea">{200 - formData.feedback.length} characters remaining</p>

                <button type ="button" disabled={formInComplete} onClick={handleSubmit}>Submit Feedback</button>

            </form>
            <div className="preview">
                <h2>Preview</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>
            </div>
            
        </div>  

    );
};

export default FeedbackForm;

    



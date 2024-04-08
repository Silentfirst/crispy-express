 import { signUp } from "../config/auth";

export default function Sign({ state }) {

    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(e.target); // Get form data
        const formDataObject = Object.fromEntries(formData.entries()); // Convert form data to object
        // console.log(formDataObject); // Print form data on the console
        const {email, password} = formDataObject; 
        console.log(`email=${email} and password =${password}`)
        // console.log(e.target)

        //submit
       // e.target.submit();  
       await signUp(email,password);  
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}> {/* Use onSubmit event handler */}
                <label htmlFor="Email">Email</label>
                <input type="email" id='Email' name="email" /> {/* Add name attribute */}
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name="password" /> {/* Add name attribute */}
                <input type="submit" value="Submit" className="submit-btn" />
            </form>
        </>
    );
}

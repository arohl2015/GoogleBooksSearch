import React from "react";

const Form = props => {
    console.log(props);
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h2>Search for Any Book!</h2></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="search"
                    placeholder="Search for a book here"
                    onChange={props.handleInputChange}
                />
            </div>

            <button type="submit" className="submitBtn btn btn-light" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default Form;
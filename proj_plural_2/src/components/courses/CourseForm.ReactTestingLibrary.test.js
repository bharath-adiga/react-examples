import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CourseForm from './CourseForm';

afterEach(cleanup);

function renderCourseForm(args) {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        error: {},
        onSave: ()=> {},
        onChange: () => {}
    }

    const props = {...defaultProps, ...args};
    return render(<CourseForm {...props}/>);
}

it("should rendor add course button", () => {
    const { getByText } = renderCourseForm();
    getByText("Add Course");
});

it("Should label save button as 'save' when not saving", () => {
    const { getByText } = renderCourseForm();
    getByText("Save");
});

it("Should label save button as 'save' when not saving", () => {
    const { getByText } = renderCourseForm({saving: true});
    getByText("Saving...");
});
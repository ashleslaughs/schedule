import React, {Component} from 'react';
import Library from './library';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className ="library-course__title"> Problem Solving </label> 
                {/* icon componsnet */}
                {/* arrow component  */}
                {/* action button component  */}
                <div className="library-course__description">
                    <label> Course Description </label>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                </div> 
            </div>
        )
    }
}

export default LibraryCourse; 
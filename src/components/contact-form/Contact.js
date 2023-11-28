import React, { Component } from "react";
import styles from './Contact.module.css'

class Contact extends Component {
    submitHandler = (event) => {
        event.preventDefault();
    };
    render() {
        return (
            <>
                <div className={styles.content}>
                    <div className="container">
                        <div className="row align-items-stretch justify-content-center no-gutters">
                            <div className="col-md-7">
                                <div className="form h-100 contact-wrap p-4">
                                    <h3 className="text-light text-center py-5">Contact with me </h3>
                                    <form
                                        className="mb-5"
                                        id="contactForm"
                                        name="contactForm"
                                        onSubmit={this.submitHandler}
                                    >
                                        <div className="row">
                                            <div className="col-md-6 form-group mb-3">
                                                <label
                                                    htmlFor=""
                                                    className="text-light col-form-label"
                                                >
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="text-light form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="col-md-6 form-group mb-3">
                                                <label
                                                    htmlFor=""
                                                    className="text-light col-form-label"
                                                >
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    className="text-light form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your email"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group mb-3">
                                                <label
                                                    htmlFor="budget"
                                                    className="text-light col-form-label"
                                                >
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    className="text-light form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Your subject"
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-5">
                                            <div className="col-md-12 form-group mb-3">
                                                <label
                                                    htmlFor="message"
                                                    className="text-light col-form-label"
                                                >
                                                    Message *
                                                </label>
                                                <textarea
                                                    className="text-light form-control"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="4"
                                                    placeholder="Write your message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-5 form-group text-center">
                                                <input
                                                    type="submit"
                                                    value="Send Message"
                                                    className="btn btn-block btn-primary rounded-0 py-2 px-4"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;

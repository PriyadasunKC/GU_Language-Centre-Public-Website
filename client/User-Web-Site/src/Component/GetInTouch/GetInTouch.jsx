import React, { useState, useEffect } from "react";
import GetInTouchStyles from "./GetInTouch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Form, Modal, Button } from "react-bootstrap";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  const isFormValid = () => {
    return name !== "" && isValidEmail && message !== "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setShowModal(true);
  };

  return (
    <div className={GetInTouchStyles.getInTouchContainer}>
      <div className={GetInTouchStyles.GetInTouchTitle}>Get In Touch</div>
      <div className={GetInTouchStyles.GetInTouchTextContainer}>
        <div className={GetInTouchStyles.GetInTouchLeft}>
          <div className={GetInTouchStyles.GetInTouchLeftSub}>
            <div className={GetInTouchStyles.GetInTouchLeftSubIcon}>
              <FontAwesomeIcon icon={faPhone} color="white" />
            </div>
            <div className={GetInTouchStyles.GetInTouchLeftSubText}>
              <a href="tel:+94750101296">0750101296</a>
            </div>
          </div>
          <div className={GetInTouchStyles.GetInTouchLeftSub}>
            <div className={GetInTouchStyles.GetInTouchLeftSubIcon}>
              <FontAwesomeIcon icon={faEnvelope} color="white" />
            </div>
            <div className={GetInTouchStyles.GetInTouchLeftSubText}>
              <a href="mailto:Gayaniukwattalc@gmail.com" target="_blank">
                Gayaniukwattalc@gmail.com
              </a>
            </div>
          </div>
          <div className={GetInTouchStyles.GetInTouchLeftSub}>
            <div className={GetInTouchStyles.GetInTouchLeftSubIcon}>
              <FontAwesomeIcon icon={faGlobe} color="white" />
            </div>
            <div className={GetInTouchStyles.GetInTouchLeftSubText}>
              <a href="http://registration.gulcentre.com/" target="_blank">
                www.registration.gulcentre.com
              </a>
            </div>
          </div>
        </div>
        <div className={GetInTouchStyles.GetInTouchRight}>
          <Form
            className={GetInTouchStyles.GetInTouchForm}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicTextarea">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <button
              type="submit"
              className={
                isFormValid()
                  ? GetInTouchStyles.GetInTouchButtonEnabled
                  : GetInTouchStyles.GetInTouchButtonDisabled
              }
              disabled={!isFormValid()}
            >
              Submit
            </button>
          </Form>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your message has been successfully sent!</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                style={{
                  backgroundColor: "#10C843",
                  border: "none",
                  width: "100px",
                }}
                onClick={() => setShowModal(false)}
              >
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

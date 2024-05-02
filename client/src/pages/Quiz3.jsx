import React, { useState } from 'react';
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
registerCoreBlocks();

export default function Quiz3() {
  const [formData, setFormData] = useState(null);

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Online Sexual Exploitation Quiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </div>
      <div style={{ width: "100%", height: "70vh" }}>
        <Form
          formId="1"
          formObj={{
            blocks: [
              {
                name: "welcome-screen",
                id: "jg1401r",
                attributes: {
                  label: "Test your knowledge on online sexual exploitation",
                  description: "Please answer the following questions to test your knowledge.",
                  attachment: {
                    type: "image",
                    url: "http://localhost:5173/src/assets/img/sexual_exploitation.png"
                  }
                }
              },
              {
                    name: "multiple-choice",
                    id: "gqr1294c",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What is the definition of online sexual exploitation?",
                      choices: [
                        {
                          label: "Sending friendly messages online",
                          value: "a"
                        },
                        {
                          label: "Using digital technology to sexually exploit individuals",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Sharing photos with close friends only",
                          value: "c"
                        },
                        {
                          label: "None of the above",
                          value: "d"
                        }
                      ]
                    }
                  },
                  {
                    name: "multiple-choice",
                    id: "gqr1294d",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "Which of the following is an example of online sexual exploitation?",
                      choices: [
                        {
                          label: "Sending virtual gifts to friends",
                          value: "a"
                        },
                        {
                          label: "Sharing inspirational quotes on social media",
                          value: "b"
                        },
                        {
                          label: "Coercing someone into producing explicit content",
                          value: "c",
                          correct: true
                        },
                        {
                          label: "Attending online educational seminars",
                          value: "d"
                        }
                      ]
                    }
                  },
                  {
                    name: "multiple-choice",
                    id: "gqr1294e",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What is grooming in the context of online sexual exploitation?",
                      choices: [
                        {
                          label: "A grooming routine for personal hygiene",
                          value: "a"
                        },
                        {
                          label: "Building a relationship with the intention of exploitation",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "A method for gardening indoors",
                          value: "c"
                        },
                        {
                          label: "None of the above",
                          value: "d"
                        }
                      ]
                    }
                  },
                  {
                    name: "multiple-choice",
                    id: "gqr1294f",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "Sextortion involves:",
                      choices: [
                        {
                          label: "Sending friendly text messages",
                          value: "a"
                        },
                        {
                          label: "Threatening to distribute explicit material unless demands are met",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Exchanging jokes with online friends",
                          value: "c"
                        },
                        {
                          label: "Sharing cooking recipes online",
                          value: "d"
                        }
                      ]
                    }
                  },
                ]
              }}
              onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }) => {
                setFormData(data);
                // Custom submission handling can be added here if needed
                // For now, just completing the form after a delay
                setTimeout(() => {
                  setIsSubmitting(false);
                  completeForm();
                }, 500);
              }}
            />
          </div>
        </div>
      );
    }
    
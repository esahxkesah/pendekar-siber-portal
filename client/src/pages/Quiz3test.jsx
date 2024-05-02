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
                  {
                    name: "multiple-choice",
                    id: "gqr1294g",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "Which tactic may traffickers use in online trafficking?",
                      choices: [
                        {
                          label: "Offering genuine job opportunities",
                          value: "a",
                          correct: true
                        },
                        {
                          label: "Promising unrealistic rewards",
                          value: "b"
                        },
                        {
                          label: "Selling homemade crafts",
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
                    id: "gqr1294h",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What is the impact of online sexual exploitation on mental health?",
                      choices: [
                        {
                          label: "Improved self-esteem",
                          value: "a"
                        },
                        {
                          label: "Feelings of shame and guilt",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Increased social connections",
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
                    id: "gqr1294i",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "How can online sexual exploitation affect physical health?",
                      choices: [
                        {
                          label: "Improved physical fitness",
                          value: "a"
                        },
                        {
                          label: "Risk of exposure to STIs",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Reduced stress levels",
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
                    id: "gqr1294j",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What role do education and awareness campaigns play in preventing online sexual exploitation?",
                      choices: [
                        {
                          label: "They increase the number of online friends",
                          value: "a"
                        },
                        {
                          label: "They empower individuals to recognize and respond effectively",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "They encourage sharing personal information online",
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
                    id: "gqr1294k",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "How can parental controls help protect children from online exploitation?",
                      choices: [
                        {
                          label: "By limiting screen time",
                          value: "a"
                        },
                        {
                          label: "By restricting access to inappropriate content",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "By encouraging more online interactions",
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
                    id: "gqr1294l",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What should online safety guidelines and policies include?",
                      choices: [
                        {
                          label: "Punishments for victims of online exploitation",
                          value: "a"
                        },
                        {
                          label: "Procedures for reporting incidents of harassment or abuse",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Guidelines for online pranks",
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
                    id: "gqr1294m",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What do digital literacy programs teach individuals?",
                      choices: [
                        {
                          label: "How to create social media accounts",
                          value: "a"
                        },
                        {
                          label: "How to evaluate online content critically",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "How to share personal information online",
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
                    id: "gqr1294n",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What support services do victims of online sexual exploitation require?",
                      choices: [
                        {
                          label: "Counseling and legal assistance",
                          value: "a",
                          correct: true
                        },
                        {
                          label: "Cooking classes",
                          value: "b"
                        },
                        {
                          label: "Swimming lessons",
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
                    id: "gqr1294o",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "How can technology solutions help prevent online sexual exploitation?",
                      choices: [
                        {
                          label: "By promoting online exploitation",
                          value: "a"
                        },
                        {
                          label: "By enhancing privacy and security features",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "By encouraging sharing explicit content",
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
                    id: "gqr1294p",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "Which of the following is an example of online sexual exploitation?",
                      choices: [
                        {
                          label: "Sharing cooking recipes online",
                          value: "a"
                        },
                        {
                          label: "Grooming a child for exploitation",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Exchanging business emails",
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
                    id: "gqr1294q",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What role do parental controls play in protecting children from online exploitation?",
                      choices: [
                        {
                          label: "Restricting access to inappropriate content",
                          value: "a",
                          correct: true
                        },
                        {
                          label: "Encouraging online interactions with strangers",
                          value: "b"
                        },
                        {
                          label: "Promoting unsupervised online activities",
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
                    id: "gqr1294r",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "How do education and awareness campaigns help prevent online sexual exploitation?",
                      choices: [
                        {
                          label: "By spreading misinformation",
                          value: "a"
                        },
                        {
                          label: "By empowering individuals to recognize and respond effectively",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "By promoting online exploitation",
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
                    id: "gqr1294s",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What is the impact of online sexual exploitation on mental health?",
                      choices: [
                        {
                          label: "Improved self-esteem",
                          value: "a"
                        },
                        {
                          label: "Feelings of shame and guilt",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "Increased social connections",
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
                    id: "gqr1294t",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What should online safety guidelines and policies include?",
                      choices: [
                        {
                          label: "Procedures for reporting incidents of harassment or abuse",
                          value: "a",
                          correct: true
                        },
                        {
                          label: "Punishments for victims of online exploitation",
                          value: "b"
                        },
                        {
                          label: "Guidelines for online pranks",
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
                    id: "gqr1294u",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "How can technology solutions help prevent online sexual exploitation?",
                      choices: [
                        {
                          label: "By promoting online exploitation",
                          value: "a"
                        },
                        {
                          label: "By enhancing privacy and security features",
                          value: "b",
                          correct: true
                        },
                        {
                          label: "By encouraging sharing explicit content",
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
                    id: "gqr1294v",
                    attributes: {
                      required: true,
                      multiple: false,
                      verticalAlign: true,
                      label: "What support services do victims of online sexual exploitation require?",
                      choices: [
                        {
                          label: "Counseling and legal assistance",
                          value: "a",
                          correct: true
                        },
                        {
                          label: "Cooking classes",
                          value: "b"
                        },
                        {
                          label: "Swimming lessons",
                          value: "c"
                        },
                        {
                          label: "None of the above",
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
    
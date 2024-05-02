import React, { useState } from 'react';
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
registerCoreBlocks();

export default function Quiz1() {
  const [formData, setFormData] = useState(null);

  return (
    <div>
 <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Cyberbullying Quiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </div>
      <div style={{ width: "100%", height: "65vh" }}>
        <Form
          formId="1"
          formObj={{
            blocks: [
              {
                name: "welcome-screen",
                id: "jg1401r",
                attributes: {
                  label: "Test your knowledge on cyberbullying",
                  description: "Please answer the following questions to test your knowledge.",
                  attachment: {
                    type: "image",
                    url: "https://www.nea.org/sites/default/files/styles/1920wide/public/2022-09/cyber-bullying.jpeg?itok=iVpZp2Dp"
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
                  label: "1. What is cyberbullying?",
                  choices: [
                    {
                      label: "Physical bullying",
                      value: "a"
                    },
                    {
                      label: "Verbal bullying",
                      value: "b"
                    },
                    {
                      label: "Harassment using electronic communication",
                      value: "c",
                      correct: true
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
                  label: "2. Which of the following is NOT a common form of cyberbullying?",
                  choices: [
                    {
                      label: "Social media bullying",
                      value: "a"
                    },
                    {
                      label: "Doxing",
                      value: "b"
                    },
                    {
                      label: "Physical assault",
                      value: "c",
                      correct: true
                    },
                    {
                      label: "Sexting coercion",
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
                  label: "3. How does cyberbullying differ from traditional bullying?",
                  choices: [
                    {
                      label: "It can occur 24/7",
                      value: "a"
                    },
                    {
                      label: "It reaches a wider audience instantly",
                      value: "b"
                    },
                    {
                      label: "Both a and b",
                      value: "c",
                      correct: true
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
                  label: "4. Which of the following is an example of social media bullying?",
                  choices: [
                    {
                      label: "Sending threatening messages via email",
                      value: "a"
                    },
                    {
                      label: "Posting mean comments on Facebook",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Physically assaulting someone",
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
                id: "gqr1294g",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "5. What is doxing?",
                  choices: [
                    {
                      label: "Sharing personal information about someone without their permission",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Sending supportive messages to someone online",
                      value: "b"
                    },
                    {
                      label: "Organizing a group to bully someone",
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
                  label: "6. What is the potential danger of doxing?",
                  choices: [
                    {
                      label: "Exposing the person to harassment or threats",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Building trust with others online",
                      value: "b"
                    },
                    {
                      label: "Making new friends",
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
                  label: "7. What is sexting coercion?",
                  choices: [
                    {
                      label: "Encouraging someone to send intimate photos or videos",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Sharing someone's private information",
                      value: "b"
                    },
                    {
                      label: "Threatening someone online",
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
                  label: "8. How can group attacks affect a victim of cyberbullying?",
                  choices: [
                    {
                      label: "It can make the victim feel isolated",
                      value: "a"
                    },
                    {
                      label: "It can lead to feelings of overwhelm",
                      value: "b"
                    },
                    {
                      label: "Both a and b",
                      value: "c",
                      correct: true
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
                  label: "9. True or False: Cyberbullying has decreased in recent years.",
                  choices: [
                    {
                      label: "True",
                      value: "a"
                    },
                    {
                      label: "False",
                      value: "b",
                      correct: true
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
                  label: "10. Which of the following is NOT an impact of cyberbullying?",
                  choices: [
                    {
                      label: "Positive mental health",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Physical health issues",
                      value: "b"
                    },
                    {
                      label: "Community fracture",
                      value: "c"
                    },
                    {
                      label: "Educational and professional consequences",
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
                  label: "11. How can chronic stress from cyberbullying manifest physically?",
                  choices: [
                    {
                      label: "Headaches",
                      value: "a"
                    },
                    {
                      label: "Muscle tension",
                      value: "b"
                    },
                    {
                      label: "Fatigue",
                      value: "c"
                    },
                    {
                      label: "All of the above",
                      value: "d",
                      correct: true
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
                  label: "12. True or False: Cyberbullying only affects the victim's mental well-being.",
                  choices: [
                    {
                      label: "True",
                      value: "a"
                    },
                    {
                      label: "False",
                      value: "b",
                      correct: true
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
                  label: "13. What is one educational measure to prevent cyberbullying?",
                  choices: [
                    {
                      label: "Encouraging bystanders to intervene",
                      value: "a"
                    },
                    {
                      label: "Building strong, connected communities",
                      value: "b"
                    },
                    {
                      label: "Promoting digital literacy",
                      value: "c",
                      correct: true
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
                  label: "14. What is one regulatory measure to prevent cyberbullying?",
                  choices: [
                    {
                      label: "Implementing clear policies and regulations",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Promoting inclusivity and diversity",
                      value: "b"
                    },
                    {
                      label: "Providing peer support and intervention",
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
                  label: "15. True or False: Bystanders can play a role in preventing cyberbullying by speaking out against online abuse.",
                  choices: [
                    {
                      label: "True",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "False",
                      value: "b"
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
                  label: "16. What is the importance of communicating with trusted individuals for victims of cyberbullying?",
                  choices: [
                    {
                      label: "It provides emotional support",
                      value: "a"
                    },
                    {
                      label: "It helps in devising coping strategies",
                      value: "b"
                    },
                    {
                      label: "It encourages seeking professional assistance if needed",
                      value: "c"
                    },
                    {
                      label: "All of the above",
                      value: "d",
                      correct: true
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
                  label: "17. True or False: Discussing cyberbullying with someone who cares can foster a sense of validation and connection.",
                  choices: [
                    {
                      label: "True",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "False",
                      value: "b"
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
                  label: "18. How does cyberbullying impact mental health?",
                  choices: [
                    {
                      label: "It can lead to depression, anxiety, and low self-esteem",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "It can cause physical health issues",
                      value: "b"
                    },
                    {
                      label: "It can fracture communities",
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
                  label: "19. True or False: Cyberbullying poses no cybersecurity risks.",
                  choices: [
                    {
                      label: "True",
                      value: "a"
                    },
                    {
                      label: "False",
                      value: "b",
                      correct: true
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
                  label: "20. What is the ultimate goal of preventive measures against cyberbullying?",
                  choices: [
                    {
                      label: "To promote a safer and more inclusive online environment",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "To increase the prevalence of cyberbullying",
                      value: "b"
                    },
                    {
                      label: "Both a and b",
                      value: "c"
                    },
                    {
                      label: "None of the above",
                      value: "d"
                    }
                  ]
                }
              },
            ],
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

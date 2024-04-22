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
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Gaming Disorder Quiz</h1>
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
                  label: "Test your knowledge on gaming disorder",
                  description: "Please answer the following questions to test your knowledge.",
                  attachment: {
                    type: "image",
                    url: "https://images.ctfassets.net/cnu0m8re1exe/4g8ng6Xo7Qau8aiV6nIGK/a8c1fbebff06904aa0ac44c1b5692ad0/Untitled_design__88_.png?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
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
                  label: "1. What is gaming disorder recognized as by the World Health Organization (WHO)?",
                  choices: [
                    {
                      label: "A hobby",
                      value: "a"
                    },
                    {
                      label: "A mental health condition",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "A social activity",
                      value: "c"
                    },
                    {
                      label: "A sport",
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
                  label: "2. Which of the following is a characteristic of gaming disorder?",
                  choices: [
                    {
                      label: "Occasional gaming for relaxation",
                      value: "a"
                    },
                    {
                      label: "Persistent and recurrent gaming behavior",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Playing games only with friends",
                      value: "c"
                    },
                    {
                      label: "Limited gaming time on weekends",
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
                  label: "3. What is one reason why gaming disorder can develop?",
                  choices: [
                    {
                      label: "Lack of interest in gaming",
                      value: "a"
                    },
                    {
                      label: "Social interaction",
                      value: "b"
                    },
                    {
                      label: "Physical activity",
                      value: "c"
                    },
                    {
                      label: "Reading books",
                      value: "d",
                      correct: true
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
                  label: "4. How can gaming serve as a coping mechanism?",
                  choices: [
                    {
                      label: "By increasing stress levels",
                      value: "a"
                    },
                    {
                      label: "By promoting social interaction",
                      value: "b"
                    },
                    {
                      label: "By providing an escape from real-life problems",
                      value: "c",
                      correct: true
                    },
                    {
                      label: "By encouraging outdoor activities",
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
                  label: "5. Which neurotransmitter is associated with pleasure and reward in the brain?",
                  choices: [
                    {
                      label: "Serotonin",
                      value: "a"
                    },
                    {
                      label: "Dopamine",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Endorphins",
                      value: "c"
                    },
                    {
                      label: "GABA",
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
                  label: "6. What impact can gaming disorder have on physical health?",
                  choices: [
                    {
                      label: "Improved sleep quality",
                      value: "a"
                    },
                    {
                      label: "Musculoskeletal problems",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Increased physical activity",
                      value: "c"
                    },
                    {
                      label: "Weight loss",
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
                  label: "7. What are some mental health issues associated with gaming disorder?",
                  choices: [
                    {
                      label: "Decreased stress levels",
                      value: "a"
                    },
                    {
                      label: "Increased feelings of loneliness",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Enhanced social skills",
                      value: "c"
                    },
                    {
                      label: "Improved self-esteem",
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
                  label: "8. How can excessive gaming affect social interactions?",
                  choices: [
                    {
                      label: "By strengthening relationships",
                      value: "a"
                    },
                    {
                      label: "By encouraging face-to-face communication",
                      value: "b"
                    },
                    {
                      label: "By leading to social withdrawal and isolation",
                      value: "c",
                      correct: true
                    },
                    {
                      label: "By promoting teamwork",
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
                  label: "9. What impact can gaming disorder have on academic or occupational functioning?",
                  choices: [
                    {
                      label: "Improved concentration",
                      value: "a"
                    },
                    {
                      label: "Decreased productivity",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Enhanced problem-solving skills",
                      value: "c"
                    },
                    {
                      label: "Increased motivation",
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
                  label: "10. Which of the following may be a sign of gaming disorder?",
                  choices: [
                    {
                      label: "Balanced lifestyle",
                      value: "a"
                    },
                    {
                      label: "Preoccupation with gaming",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Limited screen time",
                      value: "c"
                    },
                    {
                      label: "Engagement in various hobbies",
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
                  label: "11. What is one strategy to mitigate the risk of gaming disorder?",
                  choices: [
                    {
                      label: "Encouraging excessive gaming",
                      value: "a"
                    },
                    {
                      label: "Setting screen time limits",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Ignoring gaming habits",
                      value: "c"
                    },
                    {
                      label: "Promoting gaming as the only activity",
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
                  label: "12. How can fostering open communication help prevent gaming disorder?",
                  choices: [
                    {
                      label: "By discouraging dialogue about gaming habits",
                      value: "a"
                    },
                    {
                      label: "By creating a supportive environment",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "By promoting judgmental attitudes",
                      value: "c"
                    },
                    {
                      label: "By avoiding discussions about gaming",
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
                  label: "13. What is one responsible gaming practice?",
                  choices: [
                    {
                      label: "Playing games for long periods without breaks",
                      value: "a"
                    },
                    {
                      label: "Balancing gaming with other activities",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Ignoring signs of excessive gaming behavior",
                      value: "c"
                    },
                    {
                      label: "Spending excessive amounts of money on games",
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
                  label: "14. What are healthy coping mechanisms for managing stress without relying solely on gaming?",
                  choices: [
                    {
                      label: "Exercise, mindfulness, and spending time with loved ones",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Playing games for extended periods",
                      value: "b"
                    },
                    {
                      label: "Ignoring stressors and avoiding social interaction",
                      value: "c"
                    },
                    {
                      label: "Spending all free time gaming",
                      value: "d"
                    }
                  ]
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294w",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "15. When seeking professional support for gaming-related concerns, who can individuals consult?",
                  choices: [
                    {
                      label: "Friends and family members only",
                      value: "a"
                    },
                    {
                      label: "Mental health professionals, counselors, or addiction specialists",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "Strangers on the internet",
                      value: "c"
                    },
                    {
                      label: "Gaming enthusiasts",
                      value: "d"
                    }
                  ]
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294x",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "16. What is the primary goal of setting screen time limits?",
                  choices: [
                    {
                      label: "To encourage excessive gaming",
                      value: "a"
                    },
                    {
                      label: "To promote balanced lifestyles",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "To restrict access to gaming devices",
                      value: "c"
                    },
                    {
                      label: "To discourage physical activity",
                      value: "d"
                    }
                  ]
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294y",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "17. Which of the following is NOT an impact of gaming disorder?",
                  choices: [
                    {
                      label: "Financial stability",
                      value: "a",
                      correct: true
                    },
                    {
                      label: "Social withdrawal and isolation",
                      value: "b"
                    },
                    {
                      label: "Academic or occupational dysfunction",
                      value: "c"
                    },
                    {
                      label: "Physical health problems",
                      value: "d"
                    }
                  ]
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294z",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "18. How can reward systems in video games contribute to addictive behavior?",
                  choices: [
                    {
                      label: "By promoting responsible gaming",
                      value: "a"
                    },
                    {
                      label: "By stimulating the release of dopamine in the brain",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "By encouraging breaks from gaming",
                      value: "c"
                    },
                    {
                      label: "By discouraging social interaction",
                      value: "d"
                    }
                  ]
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294aa",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "19. What can an enabling environment facilitate in relation to gaming behavior?",
                  choices: [
                    {
                      label: "Decreased gaming habits",
                      value: "a"
                    },
                    {
                      label: "Responsible gaming practices",
                      value: "b"
                    },
                    {
                      label: "Escalation of gaming behavior",
                      value: "c",
                      correct: true
                    },
                    {
                      label: "Limited access to gaming devices",
                      value: "d"
                    }
                  ]
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294ab",
                attributes: {
                  required: true,
                  multiple: false,
                  verticalAlign: true,
                  label: "20. Why is early recognition and intervention crucial in addressing gaming disorder?",
                  choices: [
                    {
                      label: "To promote excessive gaming",
                      value: "a"
                    },
                    {
                      label: "To mitigate adverse effects",
                      value: "b",
                      correct: true
                    },
                    {
                      label: "To discourage open communication",
                      value: "c"
                    },
                    {
                      label: "To encourage social withdrawal",
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
      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

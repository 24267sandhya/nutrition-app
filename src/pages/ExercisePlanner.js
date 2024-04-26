import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import Navbar from '../components/Navbar';


const exerciseQuestions = [
  {
    id: 1,
    question: "What is your age?",
    type: "number",
    key: "age",
  },
  {
    id: 2,
    question: "What is your gender?",
    type: "select",
    key: "gender",
    options: ["Male", "Female", "Other"],
  },
  {
    id: 3,
    question: "What is your weight (in kilograms)?",
    type: "number",
    key: "weight",
  },
  {
    id: 4,
    question: "What is your height (in centimeters)?",
    type: "number",
    key: "height",
  },
  {
    id: 5,
    question: "How would you describe your activity level?",
    type: "select",
    key: "activityLevel",
    options: ["Sedentary", "Lightly active", "Moderately active", "Very active", "Extremely active"],
  },
  {
    id: 6,
    question: "What are your health goals?",
    type: "checkbox",
    key: "healthGoals",
    options: ["Weight loss", "Weight maintenance", "Muscle gain", "Improved overall health"],
  },
  {
    id: 7,
    question: "Do you have any existing medical conditions? If yes, please specify.",
    type: "text",
    key: "medicalConditions",
  },
  {
    id: 8,
    question: "How many days per week are you willing to dedicate to exercise?",
    type: "number",
    key: "exerciseDays",
  },
  {
    id: 9,
    question: "What types of exercises do you enjoy? (e.g., cardio, strength training, yoga)",
    type: "checkbox",
    key: "exercisePreferences",
    options: ["Cardio", "Strength training", "Yoga", "Pilates", "HIIT", "Flexibility"],
  },
  {
    id: 10,
    question: "Do you have access to any exercise equipment? If yes, please specify.",
    type: "text",
    key: "exerciseEquipment",
  },
];


const ExercisePlanner = () => {
  const [formData, setFormData] = useState({});
  const genAI = new GoogleGenerativeAI('AIzaSyCVsg2p2WqKXCjU3tDYtZjHG6EBHvMqZyg');
  const [search] = useState('');
  const [aiResponse, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  async function aiRun() {
    setLoading(true);
    setResponse('');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `exercise plan related to ${search} category in the list format and every item in next line
                    1. Exercise 1- Amount 1 next line..
                    2. Exercise 2- Amount 2 next line..
                    .
                    .
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
}


  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleCheckboxChange = (e, key) => {
    const { value, checked } = e.target;
    const currentOptions = formData[key] || [];
    let updatedOptions;

    if (checked) {
      updatedOptions = [...currentOptions, value];
    } else {
      updatedOptions = currentOptions.filter((option) => option !== value);
    }

    setFormData({
      ...formData,
      [key]: updatedOptions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    aiRun();
    // Handle form submission with formData
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
      <div className=' w-full font-bold text-[45px]'>Your Custom Exercise Planner</div>
      <div className=' h-[40px] w-[100%]'>
        You can plan your fitness regime and workouts by filling out the form
      </div>
      <div className='flex flex-row justify-center mt-7'>
      <div className='w-1/2 flex justify-center'>
        <img src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=' w-3/4'/>
      </div>
      {aiResponse? null:(
        <>
        <form onSubmit={handleSubmit} className='flex h-[50px]'>
        <div className='w-[25vw]'>
          {exerciseQuestions.map((question) => (
            <>
              <p className='font-medium text-[18px] mb-10'>{question.question}</p>
            </>
          ))}
        </div>
        <div className=' w-[25vw]'>
          {exerciseQuestions.map((question) => (
            <>
            {question.type === 'number' ? (
              <input
                type="number"
                id={question.key}
                name={question.key}
                value={formData[question.key] || ''}
                onChange={(e) => handleInputChange(e, question.key)}
                className='w-[25vw] h-[50px] mb-3 border rounded-md'
              />
            ) : question.type === 'select' ? (
              <select
                id={question.key}
                name={question.key}
                value={formData[question.key] || ''}
                onChange={(e) => handleInputChange(e, question.key)}
                className='w-[25vw] h-[50px] mb-3 border rounded-md'
              >
                {question.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : question.type === 'checkbox' ? (
              <div className="mt-7 flex flex-col">
                {question.options.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option}
                      name={option}
                      value={option}
                      checked={formData[question.key]?.includes(option)}
                      onChange={(e) => handleCheckboxChange(e, question.key)}
                      className="text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <label htmlFor={option} className="ml-2">{option}</label>
                  </div>
                ))}
              </div>
            ) : null}
            </>
          ))}
        </div>
      </form>
        </>
      )}
    </div>
   
    {aiResponse? null: (<><button type="submit" onClick={handleSubmit} className="absolute bottom-0 left-[400px] mb-4 mr-4 bg-black text-white py-3 px-5 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button></>)}
   <div className='m-4 p-4 flex justify-center'>
   {
  loading ? (
    <p className='font-medium text-[32px]'>Loading ...</p>
  ) : (
    <>
      <div className='m-10'>
        {/* Split the aiResponse into sections based on '**' and render each section */}
        {aiResponse && aiResponse.split('**').map((section, index) => (
          <div key={index}>
            {/* Skip empty sections */}
            {section.trim() && (
              <>
                {/* Render the section as a heading */}
                {/* Render each item in the section as a list */}
                <ul>
                  {/* Split the items in the section based on new lines */}
                  {section.split('\n').map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[20px]">{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
   </div>
    </>
  )
}

export default ExercisePlanner
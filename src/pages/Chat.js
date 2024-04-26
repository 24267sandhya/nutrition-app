import React, {useState} from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../helpers/imageHelper';

import Navbar from '../components/Navbar'

const Chat = () => {

  const genAI = new GoogleGenerativeAI('AIzaSyCVsg2p2WqKXCjU3tDYtZjHG6EBHvMqZyg');
    const [image, setImage] = useState('');
    const [preferences, setPreferences] = useState([]);
    const [imageInineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    
  const handlePreferenceChange = (preference) => {
    // Check if the preference is already selected
    const index = preferences.indexOf(preference);
    if (index !== -1) {
      // If it's already selected, remove it
      const updatedPreferences = [...preferences];
      updatedPreferences.splice(index, 1);
      setPreferences(updatedPreferences);
    } else {
      // If it's not selected, add it
      setPreferences([...preferences, preference]);
    }
  };

    /**
     * Generative AI Call to fetch image insights
     */
    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
          `Classify the menu according to: ${preferences.join(', ')}`, imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
}


const handleClick = () => {
  aiImageRun();
}

const handleImageChange = (e) => {
    const file = e.target.files[0];

    // getting base64 from file to render in DOM
    getBase64(file)
        .then((result) => {
            setImage(result);
        })
        .catch(e => console.log(e))

    // generating content model for Gemini Google AI
    fileToGenerativePart(file).then((image) => {
        setImageInlineData(image);
    });
}

// Converts a File object to a GoogleGenerativeAI.Part object.
async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });

    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };

}

  return (
    <>
      <Navbar/>
      <div className=' w-full font-bold text-[45px]'>Customize your Restuarant Menu</div>
      <div className=' h-[40px] w-[100%]'>
        You can plan your Restuarant diet by filling out the form
      </div>
      <div>

<div className='flex flex-row p-6'>
    <div className='m-10 flex flex-row'>
        <input type='file' onChange={(e) => handleImageChange(e)} />
        <button className='bg-black w-[10vw] h-[50px] flex items-center justify-center rounded-md' onClick={() => handleClick()}>
        <p className='text-white text-[20px] '>Search</p>
        </button>
    </div>
    <img src={image} className='w-[30vw] h-[50vh] m-20' alt='' />
    <div className='w-[1/3]'>
      <h2 className='text-[20px] font-medium'>Select Your Diet Preferences</h2>
      <div >
        <label className='flex flex-row'>
          <input
            type="checkbox"
            checked={preferences.includes('Vegetarian')}
            onChange={() => handlePreferenceChange('Vegetarian')}
          />
          <p className='text-[18px]'>Vegetarian</p>
        </label>
      </div>
      <div>
        <label className='flex flex-row'>
          <input
            type="checkbox"
            checked={preferences.includes('Vegan')}
            onChange={() => handlePreferenceChange('Vegan')}
          />
          <p className='text-[18px]'>Vegan</p>
        </label>
      </div>
      <div>
        <label className='flex flex-row'>
          <input
            type="checkbox"
            checked={preferences.includes('Gluten-Free')}
            onChange={() => handlePreferenceChange('Gluten-Free')}
          />
          <p className='text-[18px]'>Gluten-free</p>
        </label>
      </div>
      {/* Add more diet preferences as needed */}
    </div>
</div>

{
    loading == true && (aiResponse == '') ?
        <p style={{ margin: '30px 0' }}>Loading ...</p>
        :
        <div style={{ margin: '30px 0' }}>
            <p>{aiResponse}</p>
        </div>
}
</div>
    </>
  )
}

export default Chat
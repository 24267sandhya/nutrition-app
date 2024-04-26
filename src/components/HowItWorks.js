import React from "react";
import Button from "./Button";
import FeatureCards from "./FeatureCards";
import { Link } from "react-router-dom";
import { FaJs, FaReact } from "react-icons/fa";

const data = [
  {
    topic: "Meal Planner",
    about: "A JavaScript library for building user interfaces",
    icon: <FaReact size={18} color="gray" />,
    to:"/meal-planner"
  },
  {
    topic: "Exercise Planner",
    about: "A programming language used for web development",
    icon: <FaJs size={18} color="gray" />,
    to: "/exercise-planner"
  },
  {
    topic: "Menu Classifier",
    about: "A programming language used for web development",
    icon: <FaJs size={18} color="gray" />,
    to: "/chat"
  },
  {
    topic: "Recipies",
    about: "A programming language used for web development",
    icon: <FaJs size={18} color="gray" />,
    to: "/recipies"
  },
];

const HowItWorks = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between p-16">
          <p className="font-bold text-[40px]">
            How it <span className="text-orange-600">works</span>
          </p>
          <Button />
        </div>
        <div className="flex flex-row justify-around">
          {data.map((data) => (
            <Link to={data.to}>
              <FeatureCards
                topic={data.topic}
                about={data.about}
                icon={data.icon}
                to={data.to}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

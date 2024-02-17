import react from "../assets/svg/achievements/react.svg";
import ec2 from "../assets/svg/achievements/ec2.svg";
import htmlCssJs from "../assets/svg/achievements/htmlCssJs.png";
export const achievementData = {
  bio: "With a passion for crafting engaging digital experiences and a keen eye for detail, I am a dedicated Frontend Developer with a track record of delivering innovative solutions, I thrive in collaborative environments where creativity and problem-solving converge",
  achievements: [
    {
      id: 1,
      title: "React - The Complete Guide",
      details:
        "React, React Router, Redux, and other related topics. From the very basics to advanced topics like HOC, Context API, and React Hooks.",
      date: "Aug 21, 2020",
      field: "Web Development",
      image: react,
    },
    {
      id: 2,
      title: "Complete Front-End Web Dev And Design HTML, CSS, JS",
      details:
        "Comprehensive course that teachs you the fundamentals of front-end web dev and design using HTML, CSS, and JS",
      date: "June 25, 2020",
      field: "Web Development",
      image: htmlCssJs,
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      details:
        "Knowledge-based certification for foundational understanding of AWS Cloud.",
      date: "Dec 8, 2022",
      field: "Cloud Computing",
      image: ec2,
    },
  ],
};

// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/

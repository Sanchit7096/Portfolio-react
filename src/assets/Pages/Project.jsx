
import FlowingMenu from "../Components/FlowingMenu";
import image from "../Images/FitLab.png"
import image2 from "../Images/SkillNavigator.png"
import image3 from "../Images/chatbot.png"

const demoItems = [
  { link: '#', text: 'Skill Navigator', image: image2 },
  { link: '#', text: 'Fit-lab', image: image },
  { link: '#', text: 'Ai-chatBot', image: image3 },
];
const Project = () => {
  return (
    <div className="bg-[#120F17] h-[80vh] w-full overflow-x-hidden">
      <div className="p-4 sm:p-6 md:p-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-light   break-words">Selected Projects</h1>
      </div>



      <div style={{ height: '450px', position: 'relative' }}>
        <FlowingMenu items={demoItems}
          speed={20}
          textColor="#ffffff"
          bgColor="#120F17"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#120F17"
          borderColor="#ffffff"
        />
      </div>
    </div>
  )
}

export default Project

import FlowingMenu from "../Components/FlowingMenu";
import Image1 from "../Images/FitLab.png"
import Image2 from "../Images/Skillnavigator.png"
import Image3 from "../Images/Chatbot.png"

const demoItems = [
  { link: '/project/Skillnavigator', text: 'Skill Navigator', image: Image2 },
  { link: '/project/FitLab', text: 'Fit-lab', image: Image1 },
  { link: '/project/AiChatBot', text: 'Ai-chatBot', image: Image3 },
];
const Project = () => {
  return (
    <div id="projects" className="bg-[#120F17] h-[80vh] w-full overflow-x-hidden">
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
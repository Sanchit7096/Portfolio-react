
import FlowingMenu from "../Components/FlowingMenu";

const demoItems = [
  { link: '#', text: 'Skill Navigator', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Fit-lab', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Ai-chatBot', image: 'https://picsum.photos/600/400?random=3' },
];
const Project = () => {
    return (
        <div className="bg-[#120F17] h-screen w-full overflow-x-hidden">
            <div className="p-4 sm:p-6 md:p-10">
                 <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-light text-center break-words">Selected Projects</h1>
            </div>
           
            

<div style={{ height: '500px', position: 'relative' }}>
  <FlowingMenu items={demoItems}
  speed={15}
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
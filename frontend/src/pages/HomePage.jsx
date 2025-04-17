import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
          <p className="flex text-nowrap" > Beta version: please report bugs at:<a className="text-accent"   href="mailto:revilo2.dev@gmail.com"> revilo2.dev@gmail.com</a></p>  
          <p className="flex text-nowrap" > Check out the :<a className="text-accent"   href="https://trello.com/b/clFa5aGI/stacks"> Roadmap</a></p>
    </div>
  );
};
export default HomePage;
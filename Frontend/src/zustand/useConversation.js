import { create } from "zustand";

const useConversation = create((set) => {
  return {
    selectedConversation: null,
    setSelectedConversation: (conversation) =>
      set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
  };
});
export default useConversation;

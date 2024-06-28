import React from "react";

const ChatLoadingSkeleton = () => {
  return (
    <div className="dark:bg-gray-900 p-4 space-y-4">
      {/* Skeleton for incoming message */}
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-skeleton rounded-full animate-pulse"></div>
        <div className="flex-1 space-y-2">
          <div className="w-1/2 h-4 bg-skeleton rounded animate-pulse"></div>
          <div className="w-3/4 h-4 bg-skeleton-light rounded animate-pulse"></div>
        </div>
      </div>
      {/* Skeleton for outgoing message */}
      <div className="flex justify-end space-x-3">
        <div className="flex-1 space-y-2 text-right">
          <div className="w-1/2 h-4 bg-skeleton rounded animate-pulse ml-auto"></div>
          <div className="w-3/4 h-4 bg-skeleton-light rounded animate-pulse ml-auto"></div>
        </div>
        <div className="w-10 h-10 bg-skeleton rounded-full animate-pulse"></div>
      </div>
      {/* Additional messages can be added similarly */}
    </div>
  );
};

export default ChatLoadingSkeleton;

import React from 'react';
import AcceptTask from './AcceptTask';
import NewTAsk from './NewTAsk';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-center justify-left gap-5 flex-nowrap w-full py-5"
    >
      {data.tasks.map((task, index) => {
        if (task.isActive) {
          return <AcceptTask key={index} task={task} />;
        }

        if (task.isNew) {
          return <NewTAsk key={index} task={task} />;
        }

        if (task.isCompleted) {
          return <CompleteTask key={index} task={task} />;
        }

        if (task.isFailed) {
          return <FailedTask key={index} task={task} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;

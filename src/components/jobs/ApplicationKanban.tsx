import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/components/ui/card";

const initialColumns = {
  saved: {
    id: 'saved',
    title: 'Saved',
    items: []
  },
  applied: {
    id: 'applied',
    title: 'Applied',
    items: []
  },
  interview: {
    id: 'interview',
    title: 'Interview',
    items: []
  },
  offer: {
    id: 'offer',
    title: 'Offer',
    items: []
  },
  rejected: {
    id: 'rejected',
    title: 'Rejected',
    items: []
  }
};

const ApplicationKanban = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {Object.values(columns).map((column) => (
          <div key={column.id} className="min-w-[300px]">
            <h3 className="font-semibold mb-4">{column.title}</h3>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white/50 p-4 rounded-lg min-h-[500px]"
                >
                  {column.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-4 mb-4"
                        >
                          {/* Job card content */}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default ApplicationKanban;

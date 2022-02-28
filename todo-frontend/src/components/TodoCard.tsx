import React from "react";
import { Card, Text, Badge } from "@mantine/core";

import { TodoItem } from "../../types";

interface TodoItemProp {
  item: TodoItem;
}

const TodoCard = ({ item }: TodoItemProp) => {
  return (
    <div style={{ margin: "5px" }}>
      <Card shadow="sm" padding="lg">
        <Text weight={500}>{item.todo}</Text>
        <Badge variant="outline" color="teal">
          {item.status}
        </Badge>
      </Card>
    </div>
  );
};

export default TodoCard;

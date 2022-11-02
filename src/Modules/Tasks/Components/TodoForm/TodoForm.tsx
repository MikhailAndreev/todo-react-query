import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useToggleTasks } from "../../../../Common/Context/TasksContext";
import { useTaskById } from "../../Hooks/useTaskById";
import { ITaskItem } from "../../../../Common/Models/Busines";
import { useCreateTask, useUpdateTask } from "../../Api/mutations";

export const TodoForm = (): JSX.Element => {
  const [values, setValues] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const { taskDataCtx } = useToggleTasks();
  const { taskItemData } = useTaskById(taskDataCtx.id);
  const createTask = useCreateTask();
  const updateTask = useUpdateTask();

  const isCreateForm = taskDataCtx?.id ? false : true;

  useEffect(() => {
    console.log("taskItemData", taskItemData);
    console.log("taskDataCtx", taskDataCtx);
    if (taskItemData?.data) {
      const { title, description } = taskItemData.data;
      setValues({ title, description });
    }
  }, [taskDataCtx, taskItemData]);

  const transformTaskDataDto = (data: any): ITaskItem => {
    const startDate = taskDataCtx?.startDate || dayjs().format("MM-DD-YYYY");
    const id = taskDataCtx?.id || uuidv4();
    return {
      id,
      title: data?.title,
      description: data?.description,
      color: "sd",
      startDate,
      isFinished: false,
    };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("values", values);
    const taskDataDto = transformTaskDataDto(values);
    console.log("values", taskDataDto);
    if (isCreateForm) {
      createTask.mutate(taskDataDto);
    } else {
      updateTask.mutate(taskDataDto);
    }
  };

  const setValue = (field: string, value: string) => {
    setValues((old: any) => ({ ...old, [field]: value }));
  };

  return (
    <Box
      component="form"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Box mb={4} width="100%">
        <InputLabel>Title:</InputLabel>
        <Input
          style={{ width: "100%" }}
          value={values.title}
          onChange={(e) => setValue("title", e.target.value)}
          required
        />
      </Box>

      <Box>
        <InputLabel>Description:</InputLabel>
        <TextareaAutosize
          value={values.description}
          onChange={(e) => setValue("description", e.target.value)}
          minRows={6}
          style={{ width: "100%", borderRadius: "4px" }}
          required
        />
      </Box>

      <Box alignSelf="flex-end">
        <Button type="submit" color="primary" variant="contained">
          {isCreateForm ? "Create" : "Save"}
        </Button>
      </Box>
    </Box>
  );
};

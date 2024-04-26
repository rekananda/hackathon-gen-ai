import { setUserData } from "@/store/GlobalSlice";
import { PropBaseT, UserDataT } from "@/types";
import { Button, Flex, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";

type PropsFormInitT = {
  onSuccess?: () => void; 
} & PropBaseT

const FormInit = (props: PropsFormInitT) => {
  const { onSuccess } = props;
  const dispatch = useDispatch();
  const [data, setData] = useState<UserDataT>({
    name: "Jhon",
    position:"Product Designer",
    company: "HR Technology",
    jobDesc: `- Preparing design specifications through sketches
- Conceptualize product description and design
- Identify new product improvement opportunities`,
    relation: "great"
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    dispatch(setUserData({data: data, saveToLocalStorage: true}));
    onSuccess && onSuccess();
  }

  const handleUpdate = (key: keyof UserDataT, value: string) => {
    // console.log(key, value)
    // setData((prev) => {
    //   const dataNew:UserDataT = {...prev}; 
    //   dataNew[key] = value;
    //   return dataNew;
    // })
  }

  return (
    <form onSubmit={handleSubmit} className={props.className}>
      <TextInput 
        mb={12}
        label="Surname"
        value={data.name}
        onChange={(e) => handleUpdate("name", e.target.value)}
        required={true}
      />
      <TextInput 
        mb={12}
        label="Job Position"
        value={data.position}
        onChange={(e) => handleUpdate("position", e.target.value)}
        required={true}
      />
      <TextInput 
        mb={12}
        label="Bussines/Company field"
        value={data.company}
        onChange={(e) => handleUpdate("company", e.target.value)}
        required={true}
      />
      <Textarea 
        mb={24}
        label="Job Desc"
        value={data.jobDesc}
        onChange={(e) => handleUpdate("jobDesc", e.target.value)}
        autosize
        rows={3}
        maxRows={5}
        required={true}
      />

      <Flex justify={"center"}>
        <Button type="submit" color="primary">Save & Next</Button>
      </Flex>
    </form>
  )
}

export default FormInit;